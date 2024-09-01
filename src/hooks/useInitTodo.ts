import { useEffect, useState } from "react";
import { TodoProps } from "../types/TodoProps";
import { LocalStorageManager } from "../util/localStorageManager";
import { getTodo } from "../api/api";

export const useInitTodo = () => {
  const [initTodo, setInitTodo] = useState<TodoProps[]>([]);

  useEffect(() => {
    const localStorageManager = new LocalStorageManager();
    const storedTodos = localStorageManager.get("todo");

    if (!storedTodos) {
      const fetchData = async () => {
        const todoData = await getTodo();
        setInitTodo(todoData);
        localStorageManager.set("todo", todoData);
      };
      fetchData();
      console.log(storedTodos, "init");
    } else {
      setInitTodo(storedTodos);
    }
  }, []);

  const addTodo = (inputData: string, storage: LocalStorageManager) => {
    const todos = storage.get("todo") || [];
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo: TodoProps = {
      userId: 1,
      id: newId,
      title: inputData,
      completed: false,
    };
    setInitTodo((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      return updatedTodos;
    });
    const updatedTodos = [...todos, newTodo];
    storage.set("todo", updatedTodos);
  };

  return { initTodo, setInitTodo, addTodo };
};

import { useEffect, useState } from "react";
import { TodoTypes } from "../types/TodoTypes";
import { LocalStorageManager } from "../util/localStorageManager";
import { getTodo } from "../api/api";

export const useInitTodo = () => {
  const [initTodo, setInitTodo] = useState<TodoTypes[]>([]);

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

  return { initTodo, setInitTodo };
};

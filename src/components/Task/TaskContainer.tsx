import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Checkbox from "../Input/Checkbox";
import DeleteButton from "../Button/DeleteButton";
import Task from "./Task";
import { getTodo } from "../../api/api";
import { TodoTypes } from "../../types/TodoTypes";
import { LocalStorageManager } from "../../util/localStorageManager";

const TaskContainer = () => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const localStorageManager = new LocalStorageManager();

  useEffect(() => {
    const storedTodos = localStorageManager.get("todo");
    if (storedTodos && storedTodos.length < 0) {
      setTodos(storedTodos);
    } else {
      const fetchData = async () => {
        const todoData = await getTodo();
        setTodos(todoData);
      };
      fetchData();
    }
  }, []);

  const toggleCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TaskContainerComponent>
      {todos.map(({ completed, id, title }) => (
        <TaskItem key={id}>
          <Checkbox
            completed={completed}
            onChange={() => toggleCompleted(id)}
          />
          <Task completed={completed} title={title} />
          <DeleteButton todoId={id} />
        </TaskItem>
      ))}
    </TaskContainerComponent>
  );
};

export default TaskContainer;

const TaskContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

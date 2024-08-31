import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Checkbox from "../Input/Checkbox";
import DeleteButton from "../Button/DeleteButton";
import Task from "./Task";
import { getTodo } from "../../api/api";
import { TodoTypes } from "../../types/TodoTypes";

const TaskContainer = () => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const todoData = await getTodo();
      setTodos(todoData);
    };
    fetchData();
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
          <DeleteButton />
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

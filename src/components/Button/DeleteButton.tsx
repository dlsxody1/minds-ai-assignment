import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";
import { TodoManager } from "../../util/TodoManager";
import { TodoProps } from "../../types/TodoProps";
import { Dispatch } from "react";

interface DeleteButtonProps {
  todoId: number;
  setInitTodo: Dispatch<React.SetStateAction<TodoProps[]>>;
}
const DeleteButton = ({ todoId, setInitTodo }: DeleteButtonProps) => {
  const localStorageManager = new LocalStorageManager();
  const todoManager = new TodoManager();
  const deleteTodo = () => {
    todoManager.delete(todoId, localStorageManager);
    setInitTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <DeleteButtonComponent onClick={() => deleteTodo()}>
      🗑
    </DeleteButtonComponent>
  );
};

export default DeleteButton;

const DeleteButtonComponent = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
`;

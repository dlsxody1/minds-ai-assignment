import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";
import { TodoManager } from "../../util/TodoManager";
import { TodoTypes } from "../../types/TodoTypes";
import { Dispatch } from "react";

interface DeleteButtonProps {
  todoId: number;
  setInitTodo: Dispatch<React.SetStateAction<TodoTypes[]>>;
}
const DeleteButton = ({ todoId, setInitTodo }: DeleteButtonProps) => {
  const localStorageManager = new LocalStorageManager();
  const todoManager = new TodoManager();
  const onClickHandler = () => {
    todoManager.delete(todoId, localStorageManager);
    setInitTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <DeleteButtonComponent onClick={() => onClickHandler()}>
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

import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";

interface DeleteButtonProps {
  todoId: number;
  deleteTodo: (todoId: number, storage: LocalStorageManager) => void;
}
const DeleteButton = ({ todoId, deleteTodo }: DeleteButtonProps) => {
  const localStorageManager = new LocalStorageManager();

  return (
    <DeleteButtonComponent
      onClick={() => deleteTodo(todoId, localStorageManager)}
    >
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

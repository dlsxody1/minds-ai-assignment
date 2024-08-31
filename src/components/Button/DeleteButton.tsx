import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";
import { TodoManager } from "../../util/TodoManager";

const DeleteButton = ({ todoId }: { todoId: number }) => {
  const localStorageManager = new LocalStorageManager();
  const todoManager = new TodoManager();

  return (
    <DeleteButtonComponent
      onClick={() => {
        console.log(todoId, "todoId");
        todoManager.delete(todoId, localStorageManager);
      }}
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

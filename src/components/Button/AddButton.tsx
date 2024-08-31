import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";
import { TodoManager } from "../../util/TodoManager";

const AddButton = ({ inputData }: { inputData: string }) => {
  const localStorageManager = new LocalStorageManager();
  const todoManager = new TodoManager();

  return (
    <AddButtonComponent
      onClick={() => todoManager.add(inputData, localStorageManager)}
      type="button"
    >
      Add
    </AddButtonComponent>
  );
};

export default AddButton;

const AddButtonComponent = styled.button`
  padding: 8px 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

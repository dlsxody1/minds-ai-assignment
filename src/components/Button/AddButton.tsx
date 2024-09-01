import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";
import { Dispatch } from "react";
import { TodoProps } from "../../types/TodoProps";

interface AddButtonProps {
  inputData: string;
  setInitTodo: Dispatch<React.SetStateAction<TodoProps[]>>;
  setInputData: Dispatch<React.SetStateAction<string>>;
  addTodo: (inputData: string, storage: LocalStorageManager) => void;
}

const AddButton = ({ inputData, setInputData, addTodo }: AddButtonProps) => {
  const localStorageManager = new LocalStorageManager();
  const handleAddTodo = () => {
    addTodo(inputData, localStorageManager);
    setInputData("");
  };

  return (
    <AddButtonComponent onClick={() => handleAddTodo()} type="submit">
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

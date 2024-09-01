import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";
import { TodoManager } from "../../util/TodoManager";
import { Dispatch } from "react";
import { TodoProps } from "../../types/TodoProps";

interface AddButtonProps {
  inputData: string;
  setInitTodo: Dispatch<React.SetStateAction<TodoProps[]>>;
  setInputData: Dispatch<React.SetStateAction<string>>;
}

const AddButton = ({
  inputData,
  setInitTodo,
  setInputData,
}: AddButtonProps) => {
  const localStorageManager = new LocalStorageManager();
  const todoManager = new TodoManager();
  const addTodo = () => {
    todoManager.add(inputData, localStorageManager);
    setInitTodo((prevTodos) => {
      const newId =
        prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1;
      const newTodo: TodoProps = {
        userId: 1,
        id: newId,
        title: inputData,
        completed: false,
      };
      const updatedTodos = [...prevTodos, newTodo];
      return updatedTodos;
    });
    setInputData("");
  };

  return (
    <AddButtonComponent onClick={() => addTodo()} type="submit">
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

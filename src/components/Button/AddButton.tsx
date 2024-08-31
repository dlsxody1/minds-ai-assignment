import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";
import { TodoTypes } from "../../types/TodoTypes";

const AddButton = ({ inputData }: { inputData: string }) => {
  const localStorageManager = new LocalStorageManager();
  const addTodo = () => {
    const todos = localStorageManager.get("todo") || [];
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo: TodoTypes = {
      userId: 1,
      id: newId,
      title: inputData,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    localStorageManager.set("todo", updatedTodos);
  };
  return (
    <AddButtonComponent onClick={addTodo} type="button">
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

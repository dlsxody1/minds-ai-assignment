import { styled } from "styled-components";
import { TodoManager } from "../../util/TodoManager";
import { LocalStorageManager } from "../../util/localStorageManager";
import { TodoTypes } from "../../types/TodoTypes";
import { Dispatch } from "react";

interface CheckBoxTypes {
  todoId: number;
  setInitTodo: Dispatch<React.SetStateAction<TodoTypes[]>>;
  completed: boolean;
}
const Checkbox = ({ todoId, setInitTodo, completed }: CheckBoxTypes) => {
  const todoManager = new TodoManager();
  const localStorageManager = new LocalStorageManager();

  const handleChange = () => {
    todoManager.complete(todoId, localStorageManager);
    setInitTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return <CheckboxComponent onChange={handleChange} checked={completed} />;
};

export default Checkbox;

const CheckboxComponent = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

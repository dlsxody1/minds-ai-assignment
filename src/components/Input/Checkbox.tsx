import { styled } from "styled-components";
import { TodoManager } from "../../util/TodoManager";
import { LocalStorageManager } from "../../util/localStorageManager";
import { TodoProps } from "../../types/TodoProps";
import { Dispatch } from "react";

interface CheckBoxProps {
  todoId: number;
  setInitTodo: Dispatch<React.SetStateAction<TodoProps[]>>;
  completed: boolean;
}
const Checkbox = ({ todoId, setInitTodo, completed }: CheckBoxProps) => {
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

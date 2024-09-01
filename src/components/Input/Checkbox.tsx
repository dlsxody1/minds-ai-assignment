import { styled } from "styled-components";
import { LocalStorageManager } from "../../util/localStorageManager";

interface CheckBoxProps {
  todoId: number;
  completeTodo: (todoId: number, storage: LocalStorageManager) => void;
  completed: boolean;
}
const Checkbox = ({ todoId, completeTodo, completed }: CheckBoxProps) => {
  const localStorageManager = new LocalStorageManager();

  const handleChange = () => {
    completeTodo(todoId, localStorageManager);
  };

  return <CheckboxComponent onChange={handleChange} checked={completed} />;
};

export default Checkbox;

const CheckboxComponent = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

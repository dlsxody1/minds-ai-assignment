import { styled } from "styled-components";
import Input from "./Input";
import AddButton from "../Button/AddButton";
import { Dispatch, FormEvent, useState } from "react";
import { TodoProps } from "../../types/TodoProps";
import { LocalStorageManager } from "../../util/localStorageManager";

interface InputContainerProps {
  setInitTodo: Dispatch<React.SetStateAction<TodoProps[]>>;
  addTodo: (inputData: string, storage: LocalStorageManager) => void;
}

const InputContainer = ({ setInitTodo, addTodo }: InputContainerProps) => {
  const [inputData, setInputData] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <InputContainerComponent onSubmit={(e) => onSubmit(e)}>
      <Input setInputData={setInputData} inputData={inputData} />
      <AddButton
        addTodo={addTodo}
        inputData={inputData}
        setInitTodo={setInitTodo}
        setInputData={setInputData}
      />
    </InputContainerComponent>
  );
};

export default InputContainer;

const InputContainerComponent = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

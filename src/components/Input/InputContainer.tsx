import { styled } from "styled-components";
import Input from "./Input";
import AddButton from "../Button/AddButton";
import { LocalStorageManager } from "../../util/localStorageManager";
import { FormEvent, useState } from "react";

interface InputContainerProps {
  addTodo: (inputData: string, storage: LocalStorageManager) => void;
}

const InputContainer = ({ addTodo }: InputContainerProps) => {
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

import { styled } from "styled-components";
import Input from "./Input";
import AddButton from "../Button/AddButton";
import { Dispatch, FormEvent, useState } from "react";
import { TodoTypes } from "../../types/TodoTypes";

const InputContainer = ({
  setInitTodo,
}: {
  setInitTodo: Dispatch<React.SetStateAction<TodoTypes[]>>;
}) => {
  const [inputData, setInputData] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <InputContainerComponent onSubmit={(e) => onSubmit(e)}>
      <Input setInputData={setInputData} inputData={inputData} />
      <AddButton
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

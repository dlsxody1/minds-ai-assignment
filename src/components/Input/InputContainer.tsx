import { styled } from "styled-components";
import Input from "./Input";
import AddButton from "../Button/AddButton";
import { Dispatch, useState } from "react";
import { TodoTypes } from "../../types/TodoTypes";

const InputContainer = ({
  setInitTodo,
}: {
  setInitTodo: Dispatch<React.SetStateAction<TodoTypes[]>>;
}) => {
  const [inputData, setInputData] = useState("");

  return (
    <InputContainerComponent onSubmit={(e) => e.preventDefault()}>
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

import { styled } from "styled-components";
import Input from "./Input";
import AddButton from "../Button/AddButton";
import { useState } from "react";

const InputContainer = () => {
  const [inputData, setInputData] = useState("");

  return (
    <InputContainerComponent onSubmit={(e) => e.preventDefault()}>
      <Input setInputData={setInputData} />
      <AddButton inputData={inputData} />
    </InputContainerComponent>
  );
};

export default InputContainer;

const InputContainerComponent = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

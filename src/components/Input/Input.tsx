import { ChangeEvent, Dispatch } from "react";
import { styled } from "styled-components";

interface InputProps {
  inputData: string;
  setInputData: Dispatch<React.SetStateAction<string>>;
}
const Input = ({ inputData, setInputData }: InputProps) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputData(value);
  };

  return (
    <InputComponent onChange={(e) => onChangeInput(e)} value={inputData} />
  );
};

export default Input;
const InputComponent = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

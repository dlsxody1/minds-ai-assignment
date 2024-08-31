import { ChangeEvent, Dispatch } from "react";
import { styled } from "styled-components";

const Input = ({
  setInputData,
}: {
  setInputData: Dispatch<React.SetStateAction<string>>;
}) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputData(value);
  };

  return <InputComponent onChange={(e) => onChangeInput(e)} />;
};

export default Input;
const InputComponent = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

import { styled } from "styled-components";

const Input = () => {
  return <InputComponent />;
};

export default Input;
const InputComponent = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

import { styled } from "styled-components";

const Checkbox = () => {
  return <CheckboxComponent />;
};

export default Checkbox;

const CheckboxComponent = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

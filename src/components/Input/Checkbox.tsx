import { styled } from "styled-components";

const Checkbox = ({
  completed,
  onChange,
}: {
  completed: boolean;
  onChange: () => void;
}) => {
  return <CheckboxComponent onChange={onChange} checked={completed} />;
};

export default Checkbox;

const CheckboxComponent = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

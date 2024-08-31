import { styled } from "styled-components";

const AddButton = ({ inputData }: { inputData: string }) => {
  const addTodo = () => {
    console.log(inputData, "input");
  };
  return (
    <AddButtonComponent onClick={addTodo} type="button">
      Add
    </AddButtonComponent>
  );
};

export default AddButton;

const AddButtonComponent = styled.button`
  padding: 8px 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

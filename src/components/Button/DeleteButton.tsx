import { styled } from "styled-components";

const DeleteButton = () => {
  return <DeleteButtonComponent>🗑</DeleteButtonComponent>;
};

export default DeleteButton;

const DeleteButtonComponent = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
`;

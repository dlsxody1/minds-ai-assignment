import { styled } from "styled-components";

const Task = ({ title, completed }: { title: string; completed: boolean }) => {
  return <TaskComponent $completed={completed}>{title}</TaskComponent>;
};

export default Task;

const TaskComponent = styled.span<{ $completed?: boolean }>`
  flex: 1;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  color: ${({ $completed }) => ($completed ? "#999" : "black")};
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ $completed }) =>
    $completed ? "#f0f0f0" : "transparent"};
`;

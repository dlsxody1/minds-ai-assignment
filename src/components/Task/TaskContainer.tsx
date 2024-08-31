import { styled } from "styled-components";
import Checkbox from "../Input/Checkbox";
import DeleteButton from "../Button/DeleteButton";
import Task from "./Task";

const TaskContainer = () => {
  return (
    <TaskContainerComponent>
      <Checkbox />
      <Task />
      <DeleteButton />
    </TaskContainerComponent>
  );
};

export default TaskContainer;

const TaskContainerComponent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

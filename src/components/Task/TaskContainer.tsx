import { styled } from "styled-components";
import Checkbox from "../Input/Checkbox";
import DeleteButton from "../Button/DeleteButton";
import Task from "./Task";
import { TodoTypes } from "../../types/TodoTypes";
import { Dispatch } from "react";

interface TaskContainerTypes {
  initTodo: TodoTypes[];
  setInitTodo: Dispatch<React.SetStateAction<TodoTypes[]>>;
}

const TaskContainer = ({ initTodo, setInitTodo }: TaskContainerTypes) => {
  return (
    <>
      <TaskContainerComponent>
        {initTodo?.map(({ completed, id, title }) => (
          <TaskItem key={id}>
            <Checkbox
              todoId={id}
              completed={completed}
              setInitTodo={setInitTodo}
            />
            <Task completed={completed} title={title} />
            <DeleteButton todoId={id} setInitTodo={setInitTodo} />
          </TaskItem>
        ))}
      </TaskContainerComponent>
    </>
  );
};

export default TaskContainer;

const TaskContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

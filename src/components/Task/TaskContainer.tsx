import { styled } from "styled-components";
import Checkbox from "../Input/Checkbox";
import DeleteButton from "../Button/DeleteButton";
import Task from "./Task";
import { TodoProps } from "../../types/TodoProps";
import { Dispatch } from "react";

interface TaskContainerTypes {
  initTodo: TodoProps[];
  setInitTodo: Dispatch<React.SetStateAction<TodoProps[]>>;
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
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

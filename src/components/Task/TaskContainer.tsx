import { styled } from "styled-components";
import Checkbox from "../Input/Checkbox";
import DeleteButton from "../Button/DeleteButton";
import Task from "./Task";
import { useInitTodo } from "../../hooks/useInitTodo";

const TaskContainer = () => {
  const { initTodo, setInitTodo } = useInitTodo();

  return (
    <>
      <TaskContainerComponent>
        {initTodo.map(({ completed, id, title }) => (
          <TaskItem key={id}>
            <Checkbox
              todoId={id}
              completed={completed}
              setInitTodo={setInitTodo}
            />
            <Task completed={completed} title={title} />
            <DeleteButton todoId={id} />
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

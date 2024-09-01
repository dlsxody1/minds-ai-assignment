import { styled } from "styled-components";
import TaskContainer from "./Task/TaskContainer";
import InputContainer from "./Input/InputContainer";
import { useTodo } from "../hooks/useTodo";

const TodoContainer = () => {
  const { initTodo, addTodo, completeTodo, deleteTodo } = useTodo();
  return (
    <Container>
      <ToDoListContainer>
        <Title>To-Do List</Title>
        <InputContainer addTodo={addTodo}></InputContainer>
        <TaskContainer
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          initTodo={initTodo}
        />
      </ToDoListContainer>
    </Container>
  );
};

export default TodoContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ToDoListContainer = styled.div`
  width: 500px;
  padding: 20px;
  padding-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: black;
`;

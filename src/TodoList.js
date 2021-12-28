import React from "react";
import styled from "styled-components";
import TodoRow from "./TodoRow";


const TodoList = ({ todoList }) => (
    <Container>
        {todoList.map((todo, index) => (
            <TodoRow todo={todo} key={index}></TodoRow>
        ))}
    </Container>
);


const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default TodoList;
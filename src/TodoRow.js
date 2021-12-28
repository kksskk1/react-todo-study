import React from "react";
import styled from "styled-components";

const TodoRow = ({ todo, index, handleClickRemove  }) => (
    <Container onClick={() => handleClickRemove(index)}>
        { todo }
    </Container>
);

const Container = styled.div`
    color: white;
`;

export default TodoRow;
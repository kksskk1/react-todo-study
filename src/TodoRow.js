import React from "react";
import styled from "styled-components";


class TodoRow extends React.Component {
    render() {
        const { index, todo, handleClickRemove } = this.props;
        return (
            <Container>
              <Text onClick={() => handleClickRemove(index)}>{todo}</Text>
            </Container>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.todo);
        console.log(nextProps.todo);
        
        if (this.props.todo === nextProps.todo) {
            return false;
        }
        return true;
    }
}

const Container = styled.div`
    color: white;
`;


const Text = styled.div`
    display: inline-block;
    cursor: pointer;
    font-size: 32px;
    &:hover {
        opacity: 0.4;
    }
`;
export default TodoRow;
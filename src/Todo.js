import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

class Todo extends React.Component {
    state = {
        todoList: []
    };
    render() {
        console.log(this.state.todoList);
        return(
            <Container>
                <Input placeholder="할 일 입력" onKeyPress={this.handleInputKeyPress}/>
                <TodoList todoList={this.state.todoList} handleClickRemove={this.handleClickRemove}/>
            </Container>
        );
    }

    handleClickRemove = index => {
        if (window.confirm("목록에서 지우시겠습니까?")) {
            this.setState(
                state => ({
                    todoList: [
                        ...state.todoList.slice(0, index),
                        ...state.todoList.slice(index + 1)
                    ]
                }),
                () =>
                    localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            );
        }
    }

    handleInputKeyPress = event => {
        const {
            target: { value }
        } = event;
        if (event.key === "Enter") { // 엔터키 입력
            console.log(value);
            
            /* (...) 구문은 'spread operator' 라고 한다.
            state.todoList를 복제한 후 복제한 배열 뒤에 value 추가하여 배열로 리턴한다. */
            /* state 객체를 매개변수로 넣지 않고 '=>'를 이용하여 사용하였는데
            기존 state에 있는 값을 사용할 경우 해당 방식으로 이용하는 것이 안전하다. */
            this.setState(
                state => ({ todoList: [...state.todoList, value] }), 
                () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))  // localStorage에 저장 (localStorage는 HTML5가 제공하는 로컬 저장소)
            ); // state에 값 설정
            event.target.value = ""; // input 빈 값으로 초기화
        }
    };

    componentDidMount() {
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList")) || []
        });
    }
}

const Container = styled.div `
    margin-top: 44px;
    text-align: center;
`;

const Input = styled.input`
    width: 80%;
    height: 33px;
    padding: 7px;
    outline: none;
    border: 1px solid silver;
    border-radius: 11px;
    background: transparent;
    font-size: 22px;
    color: white;
`;


export default Todo;
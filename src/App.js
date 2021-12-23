import React from "react";
import styled from "styled-components";
import Content from "./Content";

class App extends React.Component {
  // state
  state = {
    query : '',
  };

  // 화면에 보여주는 부분
  render() {
    return ( 
      <Container query={this.state.query}>
        <Input placeholder="테마를 입력하세요" onKeyPress={this.handleInputKeyPress} />
        <Content />
      </Container>
    );
  }

  // 키 입력시 발생하는 이벤트 함수
  handleInputKeyPress = event => {
    // 엔터 키 입력시 동작
    if (event.key === "Enter") {
      this.setState({                 // this.state.query = event.target.value 형식으로 수정하면 react에서 감지를 못한다. 
        query : event.target.value    // state의 값을 설정할때는 setState를 사용해야 한다.
      });
      event.target.value = ''; // input에 남아있는 값은 지워줌
    }
  }
}

// 배경화면
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.1) 10%,
    rgba(20, 20, 20, 0.7) 70%,
    rgba(20, 20, 20, 1)
  ),
  url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
`;

// 테마 입력 input
const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;

export default App;
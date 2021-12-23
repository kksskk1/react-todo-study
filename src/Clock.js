import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
    state = {
        date : new Date(),
    };

    /*
        날짜함수
        getFullYear() - 현재 연도를 반환
        getMonth() - 월 반환(0:1월 ~ 11:12월)
        getDate() - 일 반환
        getDay() - 요일 반환(0:일요일 ~ 6: 토요일)
        getHours(), getMinutes() - 시, 분 반환
    */
    render() {
        const {date} = this.state; // ES6의 Destructing 문법, 이렇게하면 밑에서 해당 state에 접근할 때 앞에 this.state을 생략할 수 있습니다.
        return (
            <Container>
                <CurDate> {/* 날짜 */}
                    {date.getFullYear()}&nbsp;/&nbsp;
                    {date.getMonth() + 1}&nbsp;/&nbsp;
                    {date.getDate()}    
                </CurDate>
                <CurDay> {/* 요일 */}
                    {date.getDay() === 0 ? "Sunday"
                    : date.getDay() === 1 ? "Monday"
                    : date.getDay() === 2 ? "Tuesday"
                    : date.getDay() === 3 ? "wednesday"
                    : date.getDay() === 4 ? "Thursday"
                    : date.getDay() === 5 ? "Friday"
                    : "Saturday"}
                </CurDay>
                <CurTime> {/* 시간 */}
                    {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
                    &nbsp;:&nbsp;
                    {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
                </CurTime>
            </Container>
        );
    }
    
    // 현재 날짜를 가져오는 함수
    getDate = () => {
        this.setState({
            date: new Date()
        });
    };

    // 컴포넌트의 실행흐름에 따라 자동으로 실행되는 Life cycle method
    // 컴포넌트가 화면에 전부 그려졌을 때 실행된다.
    // 주로 API를 통해 데이터를 불러오거나 setTImeout, setInterval등을 설정
    componentDidMount() {
        this.oneMinuteCall = setInterval(() => this.getDate(), 60000); // 1분마다 getDate() 실행
    }

    // 화면에 그려진 컴포넌트가 사라지기 직전에 호출
    componentWillUnmount() {
        clearInterval(this.oneMinuteCall); // 화면이 사라진 이후에는 동작되지 않음
    }
}

const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
  color: white;
`;

const CurDate = styled.div`
  font-size: 24px;
`;

const CurDay = styled.div`
  font-style: italic;
`;

const CurTime = styled.div`
  font-size: 55px;
  font-weight: 600;
`;



export default Clock;
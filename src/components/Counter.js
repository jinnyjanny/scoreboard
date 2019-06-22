import React from "react";

export class Counter extends React.Component {

    //속성 초기화 방법 1
    // state = {
    //     score: 0
    // };

    //속성 초기화 방법 2
    constructor() {
        //exteds의 constructor를 반드시 선언 후 사용해야함
        super();
        this.state = {
            score: 0,
            time: 10
        };

        //incrementScroe 메소드 안의 this는 constructor의 this와 달라서 사용할 수 있도록 권한줌
        //this.incrementScore =  this.incrementScore.bind(this);
    }

    //애로우펑션안의 this는 lexical this로써 자기자신을 가리킬게 된다.
    handleScore = (delta) => {

        //this.state.score += 1;
        //setState를 호출용해야만 화면상에도 UI렌더링이 적용된다. //setState는 비동기 호출임.
        this.setState(prevState => {
            return {score: prevState.score + delta}
        });

    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.handleScore(-1)}>-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.handleScore(1)}>+</button>
            </div>
        )
    }
}
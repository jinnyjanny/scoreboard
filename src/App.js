import React from 'react';
import './App.css';


/** 애로우 function **/
const Header = (props) => {
  console.log(props);

  //★ destruct assignment
  const {title, totalPlayers} = props;


  return (
      <header className="header">
        <h1 className="h1">{title}</h1>
        <span className="stats">Players: {totalPlayers}</span>
      </header>
  )
}


const Player = (props) => (
    <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
          {props.name}
        </span>
      <Counter score={props.score}/>
    </div>
)

class Counter extends React.Component {

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


class App extends React.Component {

  state = {
    players: [
      {name: "Jinny", id: 1},
      {name: "Jinny2", id: 2},
      {name: "Jinny3", id: 3},
      {name: "Jinny4", id: 4},
      {name: "Jinny5", id: 5}
    ]
  }


  handleRemovePlayer = (id) => {
    this.setState(prevState =>({
      players: prevState.players.filter(item => item.id != id)
    }));
  }

  render() {
    return (
        <div className="scoreboard">
          <Header title="My Scoreboard" totalPlayers={13}/>
          {
            //Return
            this.state.players.map(player => (
                <Player key={player.id} name={player.name} id={player.id}
                        removePlayer={this.handleRemovePlayer}/>
            ))
          }
        </div>
    )
  }


}

export default App;

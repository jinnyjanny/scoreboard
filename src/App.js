import React from 'react';
import {Header} from './components/Header';
import {Player} from './components/Player';
import './App.css';


class App extends React.Component {

  state = {
    players: [
      {name: "Jinny", id: 1, score: 0},
      {name: "Jinny2", id: 2, score: 0},
      {name: "Jinny3", id: 3, score: 0},
      {name: "Jinny4", id: 4, score: 0},
      {name: "Jinny5", id: 5, score: 0}
    ]
  }


  handleRemovePlayer = (id) => {
    this.setState(prevState =>({
      players: prevState.players.filter(item => item.id != id)
    }));
  }

    /**
     * 스코어를 변경시키는 함수
     * @param id : 플레이어 Id
     * @param delta : 증가 1, 감소 -1
     */
  handleChangeScore(id, delta){
      console.log('change score', id, delta);
  }

  render() {
    return (
        <div className="scoreboard">
          <Header title="My Scoreboard" totalPlayers={13}/>
          {
            //Return
            this.state.players.map(player => (
                <Player key={player.id} name={player.name} id={player.id} score={player.score}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleChangeScore}/>
            ))
          }
        </div>
    )
  }


}

export default App;

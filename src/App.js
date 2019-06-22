import React from 'react';
import {Header} from './components/Header';
import {Player} from './components/Player';
import './App.css';


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

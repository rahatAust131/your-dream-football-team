import './App.css';
import React, { useEffect, useState } from 'react';
import Player from './components/Players/Player';
import playersData from './fakeData/PlayerData.json';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';
function App() {

  const [players, setPlayer] = useState([]);

  useEffect(() => {
    setPlayer(playersData);
  }, []);

  const [selectedPlayers, setSelectedPlayer] = useState([]);

  const handleAddPlayer = (player) => {
    const newPlayer = [...selectedPlayers, player];
    setSelectedPlayer(newPlayer);
  };

  return (
    <div className="side-space">
      <h3>Total Player : {players.length}</h3>
      <div className="row g-2 p-2">
        <div className="col-md-6">
          {
            players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id} ></Player>)
          }
        </div>
        <div className="col-md-6">
          <SelectedPlayer selectedPlayers={selectedPlayers}></SelectedPlayer>
        </div>
      </div>
    </div>
  );
}
export default App;

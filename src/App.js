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
    <div className="main container">
      <h1 className="title">Total Player :  {players.length}</h1>
      <div>
        {
          players.map(player => <Player player = {player} handleAddPlayer = {handleAddPlayer} key = {player.id} ></Player>)
        }
      </div>
      <div >
        <SelectedPlayer selectedPlayers = {selectedPlayers}></SelectedPlayer>
      </div>  
    </div>
  );
}
export default App;

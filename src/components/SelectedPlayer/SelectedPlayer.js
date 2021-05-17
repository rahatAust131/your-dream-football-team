import React from 'react';
import './SelectedPlayer.css';

const SelectedPlayer = (props) => {
    const selected = props.selectedPlayers;
    let salary = '';
    let totalBudget = 0;
    let playerName = [];

    for (let i = 0; i < selected.length; i++) {
        const player = selected[i];
        playerName += player.first_name + " " + player.last_name + ', ';
        salary = salary + ' ' + player.salary;
        totalBudget = totalBudget + parseInt(player.salary.substring(1));
    }
    
    return (
        <div className="selected-container card">
            <div className='card-body'>
                <h4 className="card-title" style={{color : 'tomato'}}>
                    Choose Your Desired Player
                </h4>    
                <p className="card-text">
                    Total Selected : <span style={{color : 'darkblue'}}>
                        {selected.length}
                    </span>
                </p>   
                <p className="card-text">Name : {playerName} </p>
                <p className="card-text">Salary : <span style={{textAlign:'center'}}>{salary}</span> </p>
                <p className="card-text">Total Budget : <small>$</small> <span style={{textAlign:'center'}}>{totalBudget}</span></p>
            </div>
        </div>
    );
}

export default SelectedPlayer;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import './Player.css';
const Player = (props) => {
    const { first_name, last_name, gender, salary, image } = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className="player-container">
            <div className="card player-info">
                <img className="card-img-top player-img" src={image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Player Name : {first_name + " " + last_name}</h5>
                    <p className="card-text">Gender : {gender}</p>
                    <p className="card-text">Salary : {salary}</p>
                </div>
                <div className="card-footer player-footer">
                    <button className="btn btn-primary" onClick={() => handleAddPlayer(props.player)}>
                        <FontAwesomeIcon icon={faFutbol} /> Add Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;
import { useState } from "react";
import Log from "../LogComponent/Log";

const PlayerInfo = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  //to get the input value. use "parameter.target.event" but make sure add onChange in input element with that function

  function editMode() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let showEditMode = isEditing ? (
    <input
      placeholder="Player Name"
      required
      value={playerName}
      onChange={handleChange} //make sure to call the function handleChange with parameter
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );
  let btnText = isEditing ? "Save" : "Edit";

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {showEditMode}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editMode}>{btnText}</button>
    </li>
  );
};
export default PlayerInfo;

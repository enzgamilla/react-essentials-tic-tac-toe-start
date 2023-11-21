import { useState } from "react";

const PlayerInfo = ({ playerName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);

  //to get the input value. use "parameter.target.event" but make sure add onChange in input element with that function
  function onChangeName(nameValue) {
    setName(nameValue.target.value);
  }

  function editMode() {
    setIsEditing((editing) => !editing);
  }

  let showEditMode = isEditing ? (
    <input
      placeholder="Player Name"
      required
      value={name}
      onChange={onChangeName} //make sure to call the function onChangeName with parameter
    />
  ) : (
    <span className="player-name">{name}</span>
  );
  let btnText = isEditing ? "Save" : "Edit";

  return (
    <li>
      <span className="player">
        {showEditMode}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editMode}>{btnText}</button>
    </li>
  );
};
export default PlayerInfo;
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function playerClickHandler(e) {
    setIsEditing((prev) => !prev);
  }

  function inputChangeHandler(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={inputChangeHandler} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={playerClickHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

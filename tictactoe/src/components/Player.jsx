import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setISEditing] = useState(false);
  function handleEditing() {
    setISEditing(editing => !editing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let playerTab = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerTab = <input type="text" required value={playerName} onChange={handleChange}/>;
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerTab}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

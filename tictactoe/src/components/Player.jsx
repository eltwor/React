import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setISEditing] = useState(false);
  function handleEditing() {
    setISEditing(editing => !editing);
  }
  let playerTab = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerTab = <input type="text" required value={name} />;
  }
  return (
    <li>
      <span className="player">
        {playerTab}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

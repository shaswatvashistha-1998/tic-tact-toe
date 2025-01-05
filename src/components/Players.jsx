import { useState } from "react";
import "./players.css";

export default function Players({ initalname, symbol, isActive }) {
  const [isediting, setisediting] = useState(false);
  const [playername, setplayernamestate] = useState(initalname);
  function changeeditingvalue() {
    setisediting((isediting) => !isediting);
  }
  function changeplayername(event) {
    setplayernamestate(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isediting ? (
          <input
            type="text"
            defaultValue={playername}
            onChange={changeplayername}
            className="player-name"
          />
        ) : (
          <span className="player-name">{playername}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeeditingvalue}>
        {!isediting ? <p>Edit</p> : <p>Save</p>}
      </button>
    </li>
  );
}

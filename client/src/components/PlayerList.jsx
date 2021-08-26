import React from 'react';
import $ from 'jquery';

const PlayerList = (props) => {
  const header = [];
  const players = [];

  function handleChange() {
    let tempList = [];
    for (let i = 1; i <= props.players; i++) {
      tempList.push($(`#player-${i}`).val());
    }
    props.setPlayerList(tempList);
  }

  if (props.players > 0) {
    header.push(<tr key="header"><th>Player #</th><th>Name</th></tr>);
  }

  for (let i = 1; i <= props.players; i++) {
    players.push(<tr key={i}><td>{i}</td><td><input type="text" id={"player-" + i} defaultValue={props.par} onChange={handleChange} /></td></tr>);
  }

  return (
    <div>
      <table border="1">
        <thead>
          {header}
        </thead>
        <tbody>
          {players}
        </tbody>
      </table>
    </div>
  )
}

export default PlayerList

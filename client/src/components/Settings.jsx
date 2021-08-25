import React, { useState } from 'react';
import HoleList from './HoleList';
import PlayerList from './PlayerList';
import $ from 'jquery';

const Main = () => {
  const [holes, setHoles] = useState(0);
  const [players, setPlayers] = useState(0);
  const [startPar, setStartPar] = useState(0);


  function handleNextScreen() {
    setHoles($("#holes").val());
    setPlayers($("#players").val());
    setStartPar($("#startPar").val());
    $("#holes").prop('disabled', true);
    $("#players").prop('disabled', true);
    $("#startPar").prop('disabled', true);
  }

  return (
    <div>
      <p><label htmlFor="holes"># of Holes: </label>
        <input type="number" name="holes" id="holes" defaultValue="18" min="1" max="36"></input></p>
      <p><label htmlFor="players"># of Players: </label>
        <input type="number" name="players" id="players" defaultValue="2" min="1" max="6"></input></p>
      <p><label htmlFor="startPar">Default Par: </label>
        <input type="number" name="startPar" id="startPar" defaultValue="3" min="1" max="9"></input></p>
      <p><button id="next" name="next" onClick={handleNextScreen}>Go to Descriptions</button></p>
      <HoleList holes={holes} par={startPar}></HoleList>
      <PlayerList players={players}></PlayerList>
    </div>
  )
}

export default Main

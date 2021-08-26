import './App.css';
import React, { useState } from 'react';
import $ from 'jquery';
import Settings from './components/Settings';
import HoleList from './components/HoleList';
import PlayerList from './components/PlayerList';
import Scorecard from './components/Scorecard';

function App() {
  const [holes, setHoles] = useState(0);
  const [players, setPlayers] = useState(0);
  const [startPar, setStartPar] = useState(0);
  const [holeList, setHoleList] = useState([]);
  const [playerList, setPlayerList] = useState([]);
  const [showSettings, setShowSettings] = useState(true);
  const [showHoleList, setShowHoleList] = useState(false);
  const [showPlayerList, setShowPlayerList] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);
  const [scores, setScores] = useState([]);
  const [totals, setTotals] = useState([]);

  function startGame() {
    console.log(holeList);
    console.log(playerList);
    setShowHoleList(false);
    setShowPlayerList(false);
    setShowScorecard(true);
  }

  function handleNextScreen() {
    setHoles($("#holes").val());
    setPlayers($("#players").val());
    setStartPar($("#startPar").val());
    $("#holes").prop('disabled', true);
    $("#players").prop('disabled', true);
    $("#startPar").prop('disabled', true);
    setShowSettings(false);
    setShowHoleList(true);
    setShowPlayerList(true);
  }

  return (
    <div className="App">
      {showSettings && <Settings setHoles={setHoles} setPlayers={setPlayers} setStartPar={setStartPar} handleNextScreen={handleNextScreen} />}
      {showHoleList && <HoleList holes={holes} par={startPar} setHoleList={setHoleList}></HoleList>}
      {showPlayerList && <PlayerList players={players} setPlayerList={setPlayerList}></PlayerList>}
      {showScorecard && <Scorecard holes={holes} players={players} holeList={holeList} playerList={playerList}
        scores={scores} setScores={setScores} totals={totals} setTotals={setTotals} />}
      {showHoleList && showPlayerList && <p><button id="start" name="start" onClick={startGame}>Start Game</button></p>}
    </div>
  );
}

export default App;

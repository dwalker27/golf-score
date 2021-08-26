import React, { useEffect } from 'react';
import $ from 'jquery';

const Scorecard = (props) => {
  const header = [];
  const scores = [];


  function showCurrentScores() {
    let parScores = [];
    let totals = [];
    let totalList = [];
    for (let i = 0; i < props.players; i++) {
      totals.push(0);
      parScores.push(0);
    }

    for (let hole in props.scores) {
      for (let player in props.scores[hole]) {
        if (props.scores[hole][player] !== "") {
          totals[player] += parseInt(props.scores[hole][player]);
          parScores[player] += props.holeList[hole];
        }
      }
    }

    for (let i = 0; i < totals.length; i++) {
      totals[i] = totals[i] - parScores[i];
      totalList.push(<th>{totals[i] === 0 ? "E" : totals[i] > 0 ? "+" + totals[i] : totals[i]}</th>)
    }

    return (totalList);
  }

  function showGrandTotals() {
    let totals = [];
    let totalList = [];
    for (let i = 0; i < props.players; i++) {
      totals.push(0);
    }

    for (let hole of props.scores) {
      for (let player in hole) {
        if (hole[player] !== "") {
          totals[player] += parseInt(hole[player]);
        }
      }
    }

    for (let i = 0; i < totals.length; i++) {
      totalList.push(<th>{totals[i]}</th>);
    }

    return (totalList);
  }

  function handleChange() {
    let tempList = [];
    for (let i in props.holeList) {
      let tempCols = [];
      for (let j in props.playerList) {
        tempCols.push($("#score" + j + "-" + i).val());
      }
      tempList.push(tempCols);
    }
    props.setScores(tempList);
  }

  if (props.holes > 0) {
    for (let i = 0; i < props.players; i++) {
      header.push(<th>{props.playerList[i]}</th>)
    }
  }

  let tempList = [];
  for (let i in props.holeList) {
    scores.push([<td>{parseInt(i) + 1}</td>, <td>{props.holeList[i]}</td>]);
    let tempCols = [];
    for (let j in props.playerList) {
      scores[i].push(<td key={i + "-" + j}><input type="number" id={"score" + parseInt(j) + "-" + parseInt(i)} min="1" max="99" defaultValue="" onChange={handleChange}></input></td>)
      tempCols.push("");
    }
    tempList.push(tempCols);
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr><th colspan="2"></th>{header}</tr>
          <tr><th>Hole</th><th>Par</th>{showCurrentScores()}</tr>
        </thead>
        <tbody>
          {scores.map((key) => {
            return (<tr>{key}</tr>);
          })}
        </tbody>
        <tfoot>
          <tr><th colspan="2">Total</th>{showGrandTotals()}</tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Scorecard

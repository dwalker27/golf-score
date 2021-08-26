import React from 'react'

const Scorecard = (props) => {
  const header = [];
  const scores = [];
  const totals = [];

  function showCurrentScores() {

  }

  function handleChange() {

  }

  if (props.holes > 0) {
    for (let i = 0; i < props.players; i++) {
      header.push(<th>{props.playerList[i]}</th>)
    }
  }

  for (let i in props.holeList) {
    scores.push([<td>{parseInt(i) + 1}</td>, <td>{props.holeList[i]}</td>]);
    for (let j in props.playerList) {
      scores[i].push(<td><input type="number" min="0" max="12" defaultValue="" onChange={handleChange}></input></td>)
    }
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

        </tfoot>
      </table>
    </div>
  )
}

export default Scorecard

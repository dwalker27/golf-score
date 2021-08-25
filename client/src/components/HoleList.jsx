import React from 'react'
import $ from 'jquery';

const HoleList = (props) => {

  const header = [];
  const holes = [];
  const totals = [];
  let parTotal = props.par * props.holes;

  const handleChange = () => {
    parTotal = 0;
    for (let i = 1; i <= props.holes; i++) {
      parTotal += parseInt($(`#${i}`).val());
    }
    $("#total").html(parTotal)
  }

  if (props.holes > 0) {
    header.push(<tr key="header"><th>Hole #</th><th>Par</th></tr>);
    totals.push(<tr key="footer"><th>Total Par</th><th id="total">{parTotal}</th></tr>)
  }

  for (let i = 1; i <= props.holes; i++) {
    holes.push(<tr key={i}><td>{i}</td><td><input type="number" id={i} defaultValue={props.par} onChange={handleChange} min="1" max="9" /></td></tr>);

  }
  console.log(holes);

  return (
    <div>
      <table border="1">
        <thead>
          {header}
        </thead>
        <tbody>
          {holes}
        </tbody>
        <tfoot>
          {totals}
        </tfoot>
      </table>
    </div>
  )
}

export default HoleList

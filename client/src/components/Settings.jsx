import React from 'react';

const Settings = (props) => {
  return (
    <div>
      <p><label htmlFor="holes"># of Holes: </label>
        <input type="number" name="holes" id="holes" defaultValue="18" min="1" max="36"></input></p>
      <p><label htmlFor="players"># of Players: </label>
        <input type="number" name="players" id="players" defaultValue="2" min="1" max="6"></input></p>
      <p><label htmlFor="startPar">Default Par: </label>
        <input type="number" name="startPar" id="startPar" defaultValue="3" min="1" max="9"></input></p>
      <p><button id="next" name="next" onClick={props.handleNextScreen}>Go to Descriptions</button></p>
    </div>
  )
}

export default Settings

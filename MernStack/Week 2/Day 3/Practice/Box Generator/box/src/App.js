import React, { useState } from "react"
import Form from "./components/form"
import Display from "./components/display"
import NinjaForm from "./components/ninjaform"
import NinjaDisplay from "./components/ninjadisplay"

function App () {
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>Standard assingment</h1>
      <Form boxColorArray = {boxColorArray} setBoxColorArray = {setBoxColorArray} />
      <Display boxColorArray = {boxColorArray} />
      <hr />
      <h1>Ninja Assingment</h1>
      <NinjaForm ninjaBoxArray = {ninjaBoxArray} setBoxColorArray = {setBoxColorArray} />
      <NinjaDisplay ninjaBoxArray = {ninjaBoxArray} />
    </div>
  )

}

export default App;

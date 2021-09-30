import Counter from "@libz/Counter"
import { Internal } from "./Internal"
import Switch from "./Switch"
import "./App.css"
import React from "react"

//previously had some issue with babel helpers. Seems resolved now.
import { createUseStyles } from "react-jss"

let useAppStyles = createUseStyles({
  root: {
    backgroundColor: "green"
  }
})

let styles = {
  root: {
    backgroundColor: "orange"
  }
}

let App = () => {
  let classes = useAppStyles()
  return (
    <div className="App">
      <h1 className={classes.root}>Hello World JSS</h1>
      <h1 style={styles.root}>Hello World</h1>
      <Internal />
      <Counter />
      <Switch />
    </div>
  )
}

export default App

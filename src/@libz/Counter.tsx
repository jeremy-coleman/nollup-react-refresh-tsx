import React from "react"
import "./Counter.css"
import { useInterval } from "./useInterval"

function Counter(props) {
  const [value, setValue] = React.useState(0)
  useInterval(() => {
    let newValue = value + 1
    setValue(newValue)
  }, 200)

  return <div className="Counter">Counter: {value}</div>
}

export default Counter

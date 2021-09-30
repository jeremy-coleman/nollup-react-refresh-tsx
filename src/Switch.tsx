import React from "react"
import "./Switch.css"

function Switch(props) {
  const [value, setValue] = React.useState(true)
  const toggleValue = () => {
    setValue(!value)
  }

  return (
    <div className="Switch" data-active={value} onClick={toggleValue}>
      {value ? "On" : "Off"}
    </div>
  )
}

export default Switch

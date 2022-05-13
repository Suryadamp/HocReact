import React from 'react'

const  ClickCounter=(props)=>{

  return(
    <div>
    <button onClick={props.increment}>{props.name}Clicked{props.count}Times</button>
    <input></input>
    </div>
  )
}
export default ClickCounter;
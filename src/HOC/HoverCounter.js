import React from 'react'

const  HoverCounter=(props)=>{

  return(
    <h2 onMouseOver={props.increment}>{props.name}Hover  {props.count}times

    </h2>
  )
}
export default HoverCounter;
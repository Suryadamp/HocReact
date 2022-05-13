import React,{useState} from 'react'

const  updateComponent=OrginalComponent =>{
  function NewComponent(props){
    const [count,setCount]=useState(0);
    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
      setOpen(true)
    }
    const handleClose=()=>{
      setOpen(false)
    }

    const increment=()=>{
      setCount(count +1)
    }
    return(
      <OrginalComponent count={count} increment={increment} open={open} handleOpen={handleOpen} handleClose={handleClose} {...props}/>
    )
 
  }

  return NewComponent
}
export default updateComponent;
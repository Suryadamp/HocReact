
import React from "react";
import HocCounter from './HOC/HocCounter'
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import OpenDialog from './HOC/OpenDialog'

const UpdatedClickCounter=HocCounter(ClickCounter)
const UpdatedHoverCounter=HocCounter(HoverCounter)
const UpdatedOpenDialog=HocCounter(OpenDialog)

export default function App() {
  return (
    <div>
    
      <UpdatedClickCounter  />
      <UpdatedHoverCounter/>
      <UpdatedOpenDialog />
    </div>
  );
}


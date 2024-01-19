import React, { useState } from 'react'

const Toggle = () => {

  const[ toggle, setToggle] = useState(true);

  return (
    <div style={{backgroundColor:"green", color:"white", textAlign:"center"}}>
        {toggle && <p>Cillum in ipsum aliqua consequat sit cupidatat. Adipisicing in Lorem occaecat qui excepteur magna minim. Incididunt nulla consequat mollit ea anim minim non excepteur deserunt quis magna.
      Cillum in ipsum aliqua consequat sit cupidatat. Adipisicing in Lorem occaecat qui excepteur magna minim. Incididunt nulla consequat mollit ea anim minim non excepteur deserunt quis magna.
      </p> }
      
      <div style={{textAlign:'center'}}>
        <button onClick={()=>setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
      </div>
    </div>
  )
}

export default Toggle;

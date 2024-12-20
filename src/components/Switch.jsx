import React, { useState } from "react";

function Switch() {
   const [value, setVlaue] = useState(0);
   const [color, setColor] = useState('white');

   return(
    <div style={{ background : color, width : '100px'}}>

        <button onClick={() => {
            setVlaue( value + 1);
        }}>Increament</button>

        <button onClick={() => {
            setColor('red')
        }}>RED</button>

        <div><h2>{value}</h2></div>

        <button onClick={() => {
            setVlaue( value - 1);
        }}>Decreament</button>

        <button onClick={() => {
            setColor('green')
        }}>GREEN</button>

    </div>
  
   )
}



export default Switch;
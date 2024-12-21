import React, { useState, useEffect } from "react";

function Switch() {
   const [value, setVlaue] = useState(0);
   const [color, setColor] = useState('white');
   const [boom, setBoom] = useState(false);

    useEffect(() => {
        setBoom(false);
       const id = setTimeout(() => {
            setBoom(true)
        }, value * 1000);
        return(() => {
            clearTimeout(id);
            
        })
        
    }, [value])

   return(
    <div className="usage">
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
    <div>
        {
            boom && value ? (
                <div>
                    <span>
                        BOOM
                    </span>
                </div>
            ) : null
        }
    </div>
    </div>  

   );
};



export default Switch;
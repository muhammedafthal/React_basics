import React, { useState } from "react";

function Toggle(){
    const [toggleOn, setToggleOn] = useState(true);

    const handleOn =() => {
        setToggleOn(false)
    };

    const handleOff = () => {
        setToggleOn(true)
    };

    let button;

    if(toggleOn) {
        button = <HandleOnCLick onClick={handleOn} />
    } else {
        button = <HandleOffClick onClick={handleOff} />
    }

    return(
        <>
        <h2>This Is Toggle Using useState.</h2>
        <div>{button}</div>
        </>
    )
    

}

function HandleOnCLick(Props) {
    return <button onClick={Props.onClick}>ON</button>
}
function HandleOffClick(Props) {
    return <button onClick={Props.onClick}>OFF</button>
}

export default Toggle;
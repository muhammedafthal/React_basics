import React from "react";

function ArrayProps(props){
    return(
        <div>
            <h3>Fruit List</h3>
            <ul>
                {props.fruitList.map((fruit, index) => {
                    return <li key={index}>{fruit}</li>
                })}
            </ul>
        </div>
    )
}

export default ArrayProps;
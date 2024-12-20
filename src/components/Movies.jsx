import React from "react";

function Movies(props) {
    return(
        <div>
            <h2>Latest Movies</h2>
            <ul>
               {props.list.map((item) => {
                   return <li>{item}</li>
               })}
            </ul>
            
        </div>
    )
}

export default Movies;
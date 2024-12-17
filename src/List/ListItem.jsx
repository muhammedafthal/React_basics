import React from "react";
import Label from "./Label"
import "./ListItem.css"


//FUNCTION COMPONENT
function ListItem(props) {
    //De-Structuring Props
    const { title, descr, isActive } = props;
    console.log(props);
    
    return(
        <div className="list-item">
            <hr />
            <div className="list-title">
                <h4>{title}</h4>
            </div>
            <div className="list-descr">
               {descr}
            </div>
            <div className="list-label">
                <Label isActive={isActive}/>
            </div>
            <hr />
        </div>
    )
}

export default ListItem;
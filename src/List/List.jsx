import React from "react";
import ListItem from "./ListItem";

const arr = [
    {
        title: "Appointment for october",
        descr: "The patient is resheduled to october",
        isActive: true
    },
    {
        title: "Appointment for november",
        descr: "The patient is resheduled to november",
        isActive: false
    },
    {
        title: "Appointment for december",
        descr: "The patient is resheduled to december",
        isActive: true
    }
];


//CLASS COMPONENT
class List extends React.Component {
    render() {
        return(
            <div className="app-list">
                {
                    arr.map((obj) => {
                       return <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
                    })
                }
        </div>
        );
    }
};

export default List;
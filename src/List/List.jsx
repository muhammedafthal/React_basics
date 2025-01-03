import React from "react";
import ListItem from "./ListItem";
import Tools from "../components/Tools";

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

const MyContext = React.createContext();

//CLASS COMPONENT
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: arr,
            showLabel : true
        }
    };

    onListChange = (e) => {
        console.log(e.target.value);
        const value = e.target.value;
        const newList = arr.filter((item) => {
            if(value === 'all') {
                return true;
            }
            if(value === 'active') {
                return item.isActive === true;
            }
            if(value === 'non-active') {
                return item.isActive === false;
            }
            return false;
        });
        console.log(newList);
        // arr = newList;
        this.setState({
            data: newList
        });
    }

    handleShowLAbel = (e) => {
        this.setState({
            showLabel : e.target.checked
        });
    }

    render() {      
        return(
        <div>
            <input checked={this.state.showLabel} onChange={this.handleShowLAbel} type="checkbox"></input>ShowLabel
        <MyContext.Provider value={this.state.showLabel}>
        <Tools onAction={this.onListChange}>
            <div className="app-list">
                {
                    this.state.data.map((obj) => {
                       return <ListItem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
                    })
                }
            </div>
        </Tools>
        </MyContext.Provider>
        </div>
        );
    }
};

export default List;

export { MyContext };
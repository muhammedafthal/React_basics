import React from "react";

class AddNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titleInput : ""
        }
    }

    handleChange = (e) => {
        
        const value = e.target.value;
        this.setState({
            titleInput: value
        });
        e.preventDefault()
    };

    handleClick = () => {
        console.log(this.state.titleInput)
    };

    render() {
        return (
            <div className="add-new">
                <input value={this.state.titleInput} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default AddNew;
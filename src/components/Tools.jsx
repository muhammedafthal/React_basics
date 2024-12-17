import React from "react";
import './Tools.css';

class Tools extends React.Component {
    render() {
        const {
            children
        } = this.props;

        const onlyChild = React.Children.only(children);
        const count = React.Children.count(onlyChild.props.children);

        return(
            <div>
                <div className="list-header">
                    <select name="status">
                        <option value='all'>All</option>
                        <option value='active'>Active</option>
                        <option value='non-active'>Non Active</option>
                    </select>
                </div>
                {children}
                <div className="list-footer">
                    Total {count} Items
                </div>
            </div>
        );
    }
};

export default Tools;
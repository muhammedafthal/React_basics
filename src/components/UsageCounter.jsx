import React, { useState } from "react";

function UsageCounter() {
    const [value, setVlaue] = useState(0);

    return(
        <div className="usage">
            <div className="usage-item">
                <button onClick={() => {
                    setVlaue(value + 1)
                }}>Increment</button>
                <label>{value}</label>
                <button onClick={() => {
                    setVlaue(value - 1)
                }}>Decrement</button>
            </div>
        </div>
    )
}

export default UsageCounter;
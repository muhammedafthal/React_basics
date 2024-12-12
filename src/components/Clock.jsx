import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toString());
    const [flag, setFlag] = useState(true);
    
    useEffect(() => {
        console.log("Component Is Updated")
        const interval = setInterval(showDate, 1000)
        return () => {
            console.log("Cleanup Interval")
            clearInterval(interval)
        }
    }, [time])

    const showDate = () => {
        // console.log(new Date().toString());
        setTime(new Date().toString())
    }
    return <div>{time}</div>
}

export default Clock;
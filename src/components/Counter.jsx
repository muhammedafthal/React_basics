import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <ButtonIncrease label="Increment" onClick={() => setCount(count + 1)} />
        <ButtonDecrease label="Decrement" onClick={() => setCount(count - 1)} />
      </div>
    );
  }
  
  function ButtonDecrease(props){
    return <button onClick={props.onClick}>{props.label}</button>;
  };

  function ButtonIncrease(props) {
    return <button onClick={props.onClick}>{props.label}</button>;
  };

  export default Counter;

  
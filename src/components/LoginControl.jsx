import { useState } from "react";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const HandleLoginClick = () => {
        setIsLoggedIn(false);
    };
    const HandleLogoutClick = () => {
        setIsLoggedIn(true);
    };

    let button;
    if(isLoggedIn) {
        button = <LoginButton onClick={HandleLoginClick} />
    } else {
        button = <LogoutButton onClick={HandleLogoutClick} />
    }
    return (
        <>
        <h1>This Is An Contitional Rendering In React</h1>
        <div>{button}</div>
        </>
    )
}
function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>
    
}
function LogoutButton(props) {
    return <button onClick={props.onClick}>LogOut</button>
    
}

export default LoginControl;
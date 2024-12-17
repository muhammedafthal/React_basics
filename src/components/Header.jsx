import React from "react";
import "./Header.css"


//FUNCTION COMPONENT
function Header() {
    return(
        <>
        <div className="app-header">
        <span className="header-title">React Practice</span>
            <span>Home</span>
            <span>Usage</span>
            <span>Setting</span>
            <span>Loggout</span>
        </div>
        </>
    );
    
};

export default Header;
import React from "react";
import "./Header.css";

//FUNCTION COMPONENT
function Header() {
  return (
    <>
      <div className="app-header">
        <span className="header-title">React Practice</span>
        <nav>
          <ul>Home About Contact Settings</ul>
        </nav>
      </div>
    </>
  );
}

export default Header;

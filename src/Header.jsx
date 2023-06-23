import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(<>
    <ul>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Service</Link>
    </ul>
    </>)
}
export default Header;
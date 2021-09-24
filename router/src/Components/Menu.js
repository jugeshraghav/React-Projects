import React from "react";
import {NavLink} from "react-router-dom";
import "../index.css";

const Menu = ()=>{
    return (
        <>
        <NavLink to="/" exact activeClassName="active">About</NavLink>
        <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
        </>
    )
}

export default Menu; 
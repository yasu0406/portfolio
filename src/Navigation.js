import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/works">Works</NavLink></li>
            </ul>
        );
    }
}

export default Navigation;
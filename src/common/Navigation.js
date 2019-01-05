import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }

    toggle() {
        this.setState({addClass: !this.state.addClass});
    }

    remove() {
        if(this.state.addClass == true) {
            this.setState({addClass: false});
        }
    }

    render() {
        let activeNav = 'button_container ';
        let openNav = 'overlay ';
        if(this.state.addClass == true) {
            activeNav += 'active'
            openNav += 'open'
        }
        return (
            <div onClick={this.remove.bind(this)}>
                <div className={activeNav} id="toggle" onClick={this.toggle.bind(this)}>
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </div>
                <div className={openNav} id="overlay">
                    <nav class="overlay-menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/works">Works</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Navigation;
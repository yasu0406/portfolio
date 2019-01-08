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
        if(this.state.addClass) {
            this.setState({addClass: false});
        }
    }

    render() {
        let activeNav = 'button_container ';
        let openNav = 'overlay ';
        if(this.state.addClass) {
            activeNav += 'active';
            openNav += 'open';
        }
        return (
            <div onClick={this.remove.bind(this)}>
                <div className={activeNav} id="toggle" onClick={this.toggle.bind(this)}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                </div>
                <div className={openNav} id="overlay">
                    <nav className="overlay-menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/works">Works</NavLink></li>
                            <li>
                                <ul className="sns">
                                    <li><a href="https://www.linkedin.com/in/yasuhiro-katayama-118423160/" target="_blank" className="fa fa-linkedin"></a></li>
                                    <li><a href="https://github.com/yasu0406" target="_blank" className="fa fa-github"></a></li>
                                    <li><a href="https://www.facebook.com/yasuhiro.katayama2" target="_blank" className="fa fa-facebook"></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navigation;

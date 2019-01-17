import React, { Component } from "react";

import {
    NavLink,
} from "react-router-dom";
import './home.css';
import delighters from '../common/delighters';
class Home extends Component {
    componentDidMount() {
        delighters.init();
    }

    render() {
        return (
            <div className="home">
                <section>
                    <ul className="main-visual">
                        <li className="left">
                            <ul data-delighter>
                                <li><h1>Hello World</h1></li>
                                <li>I’m Yasuhiro.<br/>Welcome to my website.</li>
                                <li>I’m Front End developer.<span>I love creative</span></li>
                                <li>
                                    <ul className="sns">
                                        <li><a href="https://www.linkedin.com/in/yasuhiro-katayama-118423160/" target="_blank" className="fa fa-linkedin"></a></li>
                                        <li><a href="https://github.com/yasu0406" target="_blank" className="fa fa-github"></a></li>
                                        <li><a href="https://www.facebook.com/yasuhiro.katayama2" target="_blank" className="fa fa-facebook"></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="right">

                        </li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li>
                            <ul className="container" data-delighter>
                                <li>
                                    <ul>
                                        <li>Android App</li>
                                        <li><h2>Project Name</h2></li>
                                        <li><NavLink to="/worksDetail" className="btn">View Project</NavLink></li>
                                    </ul>
                                </li>
                                <li><img src="/img/img-works-01.png" alt=""/></li>
                                <li>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</li>
                            </ul>
                            <div className="color-box"></div>
                        </li>
                        <li data-delighter="start:0.25">
                            <ul className="container" data-delighter>
                                <li>
                                    <ul>
                                        <li>Android App</li>
                                        <li><h2>Project Name</h2></li>
                                        <li><NavLink to="/worksDetail" className="btn">View Project</NavLink></li>
                                    </ul>
                                </li>
                                <li><img src="/img/img-works-01.png" alt=""/></li>
                                <li>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</li>
                            </ul>
                            <div className="color-box"></div>
                        </li>
                        <li data-delighter="start:0.25">
                            <ul className="container" data-delighter>
                                <li>
                                    <ul>
                                        <li>Android App</li>
                                        <li><h2>Project Name</h2></li>
                                        <li><NavLink to="/worksDetail" className="btn">View Project</NavLink></li>
                                    </ul>
                                </li>
                                <li><img src="/img/img-works-01.png" alt=""/></li>
                                <li>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</li>
                            </ul>
                            <div className="color-box"></div>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Home;

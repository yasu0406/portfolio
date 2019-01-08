import React, { Component } from "react";
import Anime from 'react-anime';
import {
    NavLink,
} from "react-router-dom";
import './home.css';
class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="main-visual">
                    <Anime easing="easeInOutQuad"
                           duration={1000}
                           direction="delay"
                           delay={100}
                           opacity={[0,1]}
                           translateX={['-500%',0]}>
                        <div className="left">
                            <div>
                                <Anime easing="easeInOutQuad"
                                       duration={1000}
                                       direction="delay"
                                       delay={500}
                                       translateX={['-500%',0]}>
                                    <h1>HELLO</h1>
                                </Anime>
                                <ul>
                                    <Anime easing="easeInOutQuad"
                                           duration={1000}
                                           direction="delay"
                                           delay={1000}
                                           translateX={['-500%',0]}>
                                        <li>I’m Yasuhiro.<br/>Welcome to my website.</li>
                                        <li>I’m Front End developer.<span>I love creative</span></li>
                                    </Anime>
                                    <li>
                                        <Anime easing="easeInOutQuad"
                                               duration={1000}
                                               direction="delay"
                                               delay={1500}
                                               translateX={['-500%',0]}>
                                            <ul className="sns">
                                              <li><a href="https://www.linkedin.com/in/yasuhiro-katayama-118423160/" target="_blank" className="fa fa-linkedin"></a></li>
                                              <li><a href="https://github.com/yasu0406" target="_blank" className="fa fa-github"></a></li>
                                              <li><a href="https://www.facebook.com/yasuhiro.katayama2" target="_blank" className="fa fa-facebook"></a></li>
                                            </ul>
                                        </Anime>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Anime>

                    <Anime easing="easeInOutQuad"
                           duration={1000}
                           direction="delay"
                           delay={100}
                           translateX={['500%',0]}>
                        <div className="right">
                        </div>
                    </Anime>
                </div>
                <section>
                    <ul>
                        <li>
                            <ul className="container">
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
                        <li>
                            <ul className="container">
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
                        <li>
                            <ul className="container">
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

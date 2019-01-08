import React, { Component } from "react";
import Anime from 'react-anime';
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
                    <div className="left">
                        <div>
                            <Anime easing="easeOutElastic"
                                   duration={1000}
                                   direction="delay"
                                   delay={500}
                                   translateX={['-500%',0]}>
                                <h1>HELLO</h1>
                            </Anime>
                            <ul>
                                <Anime easing="easeOutElastic"
                                       duration={1000}
                                       direction="delay"
                                       delay={1000}
                                       translateX={['-500%',0]}>
                                    <li>I’m Yasuhiro.<br/>Welcome to my website.</li>
                                    <li>I’m Front End developer.<span>I love creative</span></li>
                                </Anime>
                                <li>
                                    <Anime easing="easeOutElastic"
                                           duration={1000}
                                           direction="delay"
                                           delay={1500}
                                           translateX={['-500%',0]}>
                                        <ul className="sns">
                                            <li><a href="" className="fa fa-linkedin"></a></li>
                                            <li><a href="" className="fa fa-github"></a></li>
                                            <li><a href="" className="fa fa-facebook"></a></li>
                                        </ul>
                                    </Anime>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
                <section>
                    <ul>
                        <li>
                            <ul className="container">
                                <li>
                                    <ul>
                                        <li>Android App</li>
                                        <li><h2>Project Name</h2></li>
                                        <li><button className="btn">View Project</button></li>
                                    </ul>
                                </li>
                                <li><img src="/img/img-works-01.png" alt=""/></li>
                                <li>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="container">
                                <li>
                                    <ul>
                                        <li>Android App</li>
                                        <li><h2>Project Name</h2></li>
                                        <li><button className="btn">View Project</button></li>
                                    </ul>
                                </li>
                                <li><img src="/img/img-works-01.png" alt=""/></li>
                                <li>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="container">
                                <li>
                                    <ul>
                                        <li>Android App</li>
                                        <li><h2>Project Name</h2></li>
                                        <li><button className="btn">View Project</button></li>
                                    </ul>
                                </li>
                                <li><img src="/img/img-works-01.png" alt=""/></li>
                                <li>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Home;
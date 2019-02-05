import React, { Component } from "react";

import {
    NavLink,
} from "react-router-dom";
import './home.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import delighters from '../common/delighters';


class Home extends React.Component {
    componentDidMount() {
        delighters.init();
    }
    render() {
        const Fullpage = () => (
            <ReactFullpage
                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                            <section className="home">
                                <section className="section">
                                    <ul className="main-visual">
                                        <li className="left">
                                            <ul>
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
                                    </ul>
                                </section>
                                <section className="section work-box">
                                    <ul>
                                        <li>01</li>
                                        <li><span>01 Freelance job</span>Website</li>
                                    </ul>
                                    <div>
                                        <NavLink to="/worksDetail"><img src="/img/img-works-01.png" alt=""/></NavLink>
                                        <h2><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2>
                                    </div>
                                    <p><NavLink to="/works">Work List</NavLink></p>
                                </section>
                                <section className="section work-box">
                                    <ul>
                                        <li>02</li>
                                        <li><span>01 Freelance job</span>Website</li>
                                    </ul>
                                    <div>
                                        <NavLink to="/worksDetail"><img src="/img/img-works-02.png" alt=""/></NavLink>
                                        <h2><NavLink to="/worksDetail">HIRATA TAKAAKI</NavLink></h2>
                                    </div>
                                    <p><NavLink to="/works">Work List</NavLink></p>
                                </section>
                                <section className="section work-box">
                                    <ul>
                                        <li>03</li>
                                        <li><span>01 Freelance job</span>Website</li>
                                    </ul>
                                    <div>
                                        <NavLink to="/worksDetail"><img src="/img/img-works-03.png" alt=""/></NavLink>
                                        <h2><NavLink to="/worksDetail">CHAPETR DEUX</NavLink></h2>
                                    </div>
                                    <p><NavLink to="/works">Work List</NavLink></p>
                                </section>
                            </section>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
        return (
          Fullpage()
        );
    }
}

export default Home;

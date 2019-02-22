import React, { Component } from "react";
import './about.scss'
import delighters from "../common/delighters";
import ReactFullpage from "@fullpage/react-fullpage";
import {NavLink} from "react-router-dom";

class About extends Component {
    componentDidMount() {
        delighters.init();
    }
    render() {
        const Fullpage = () => (
            <ReactFullpage
                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                        <section className="about">
                            <section className="my-name section container section">
                                <div className="left">
                                    <h1>Yasuhiro<span className="sp-line-break">Katayama.</span><span className="line-break">Front End developer.</span></h1>
                                </div>
                                <div className="right">
                                    <img src="/img/img-profile.png" alt=""/>
                                </div>
                            </section>

                            <section className="about-me section">
                                <div className="container">
                                    <div>
                                        <div className="left">
                                            <h2>I am a…</h2>
                                        </div>
                                        <div className="right">
                                            <p>I am currently studying at Cornerstone International Community College of Canada (CICCC) for Web and Mobile Development program.
                    In Japan, I worked as a frontend engineer for two years and backend engineer for one year and 6 months. I am looking for work experience in Canada so I would be happy just to work as an intern or volunteer. I love programming and would like to learn new skills.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="left">
                                            <h2>My skills</h2>
                                        </div>
                                        <div className="right">
                                            <ul>
                                                <li>
                                                    <ul>
                                                        <li><h3>Programing</h3></li>
                                                        <li>- Javascript</li>
                                                        <li>- React & React Native</li>
                                                        <li>- WordPress</li>
                                                        <li>- Java</li>
                                                        <li>- Firebase</li>
                                                        <li>- MySQL</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><h3>Design</h3></li>
                                                        <li>- Sketch</li>
                                                        <li>- XD</li>
                                                        <li>- Photoshop</li>
                                                        <li>- Illustrator</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="container section">
                                <div className="left">
                                    <h2>Discography</h2>
                                </div>
                                <div className="right">

                                </div>
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

export default About;

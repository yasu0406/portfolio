import React, { Component } from "react";
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
                        <div className="about">
                            <section className="my-name section container">
                                <div className="left">
                                    <h1>Yasuhiro<span className="sp-line-break title-span">Katayama.</span><span className="line-break">Front End developer.</span></h1>
                                </div>
                                <div className="right">
                                    <img src="/img/img-profile.png" alt=""/>
                                </div>
                            </section>

                            <section className="skill section">
                                <div className="container">
                                    <div>
                                        <div className="left">
                                            <h2>Skills</h2>
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
                                    <div>
                                        <div className="left">
                                            <h2>Policy</h2>
                                        </div>
                                        <div className="right">
                                            <p>I am currently studying at Cornerstone International Community College of Canada (CICCC) for Web and Mobile Development program.
                                                In Japan, I worked as a frontend engineer for two years and backend engineer for one year and 6 months. I am working volunteer at the web company and a freelance job.</p>
                                        </div>
                                    </div>
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
                                                In Japan, I worked as a frontend engineer for two years and backend engineer for one year and 6 months. I am working volunteer at the web company and a freelance job.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="left">
                                            <h2>Discography</h2>
                                        </div>
                                        <div className="right">
                                            <dl>
                                                <dt>2016-2017</dt>
                                                <dd>AGENTGROW Inc in Tokyo</dd>
                                                <dt>2015-2016</dt>
                                                <dd>PENSEUR Inc in Osaka</dd>
                                                <dt>2014-2015</dt>
                                                <dd>MITELI Ltd in Osaka</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
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

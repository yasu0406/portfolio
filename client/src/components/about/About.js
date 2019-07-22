import React, { Component } from "react";
import delighters from "../common/delighters";

class About extends Component {
    componentDidMount() {
        delighters.init();
    }

    render() {
        return (
                <div className="about">
                    <section className="my-name container">
                        <div className="left" data-delighter>
                            <h1 className="fade-up">Yasuhiro<span className="sp-line-break title-span">Katayama.</span><span className="line-break fade-up">Front End Developer.</span></h1>
                        </div>
                        <div className="right">
                            <img src="/img/img-profile.jpg" alt="yasuhiro's picture"/>
                            <div className="blue" data-delighter></div>
                        </div>
                    </section>

                    <section className="skill">
                        <div className="container">
                            <div data-delighter>
                                <div className="left fade-up">
                                    <h2>Skills</h2>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li>
                                            <ul className="fade-up-in" data-delighter>
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
                                            <ul className="fade-up-in" data-delighter>
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
                    <section className="about-me">
                        <div className="container">
                            <div data-delighter>
                                <div className="left fade-up">
                                    <h2>I am a…</h2>
                                </div>
                                <div className="right" data-delighter>
                                    <p>I am currently studying at Cornerstone International Community College of Canada (CICCC) for Web and Mobile Development program.
                                        In Japan, I worked as a frontend engineer for two years and backend engineer for one year and 6 months. I am working volunteer at the web company and a freelance job.<br/><br/>Love create web apps and mobile apps with React, soccer.</p>
                                </div>
                            </div>
                            <div data-delighter>
                                <div className="left fade-up">
                                    <h2>Work <span className="sp-line-break">Experiences</span></h2>
                                </div>
                                <div className="right">
                                    <dl data-delighter>
                                        <dt className="fade-up">2016-2017</dt>
                                        <dd className="fade-up"><a className="square-btn" href={"https://www.agent-grow.com/"} target="_blank">Frontend developer and Backend developer at AGENTGROW Inc</a></dd>
                                        <dt className="fade-up">2015-2016</dt>
                                        <dd className="fade-up"><a className="square-btn" href={"https://www.penseur.co.jp/"} target="_blank">Frontend developer at PENSEUR Inc</a></dd>
                                        <dt className="fade-up">2014-2015</dt>
                                        <dd className="fade-up"><a className="square-btn" href={"http://www.miteli.co.jp/"} target="_blank">Frontend developer at MITELI Ltd</a></dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ul className="load-overlay" data-delighter>
                        <li className="fade-out-up"></li>
                        <li className="fade-out-up"></li>
                        <li className="fade-out-up"></li>
                        <li className="fade-out-up"></li>
                        <li className="fade-out-up"></li>
                    </ul>
                </div>
        );
    }
}

export default About;

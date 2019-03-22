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
                            <h1 className="fade-up">Yasuhiro<span className="sp-line-break title-span">Katayama.</span><span className="line-break fade-up">Front End developer.</span></h1>
                        </div>
                        <div className="right">
                            <img src="/img/img-profile.png" alt=""/>
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
                                            <ul data-delighter>
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
                                            <ul data-delighter>
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
                            <div  data-delighter>
                                <div className="left fade-up">
                                    <h2>Policy</h2>
                                </div>
                                <div className="right" data-delighter>
                                    <p>I am currently studying at Cornerstone International Community College of Canada (CICCC) for Web and Mobile Development program.
                                        In Japan, I worked as a frontend engineer for two years and backend engineer for one year and 6 months. I am working volunteer at the web company and a freelance job.</p>
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
                                        In Japan, I worked as a frontend engineer for two years and backend engineer for one year and 6 months. I am working volunteer at the web company and a freelance job.</p>
                                </div>
                            </div>
                            <div data-delighter>
                                <div className="left fade-up">
                                    <h2>Discography</h2>
                                </div>
                                <div className="right">
                                    <dl data-delighter>
                                        <dt className="fade-up">2016-2017</dt>
                                        <dd className="fade-up">AGENTGROW Inc in Tokyo<a href="https://www.agent-grow.com/"></a></dd>
                                        <dt className="fade-up">2015-2016</dt>
                                        <dd className="fade-up">PENSEUR Inc in Osaka<a href="https://www.penseur.co.jp/"></a></dd>
                                        <dt className="fade-up">2014-2015</dt>
                                        <dd className="fade-up">MITELI Ltd in Osaka<a href="http://www.miteli.co.jp/"></a></dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        );
    }
}

export default About;

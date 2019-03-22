import React, { Component } from "react";

import {
    NavLink,
} from "react-router-dom";
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
                                <ul className="demo" data-delighter>
                                    <li><h1>Hello, I’m Yasuhiro.</h1></li>
                                    <li><p>Front End developer.</p></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className="work-box">
                        <div className="left">
                            <NavLink to="/worksDetail"><img src="/img/img-works-01.png" alt=""/></NavLink>
                            <div className="blue" data-delighter></div>
                        </div>
                        <ul className="demo" data-delighter>
                            <li><h2><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2></li>
                            <li>Freelance job / Website</li>
                            <li><NavLink className="btn" to="/worksDetail">Detail →</NavLink></li>
                        </ul>
                    </section>
                    <section className="work-box">
                        <div className="left">
                            <NavLink to="/worksDetail"><img src="/img/img-works-02.png" alt=""/></NavLink>
                            <div className="blue" data-delighter></div>
                        </div>
                        <ul data-delighter>
                            <li><h2><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2></li>
                            <li>Freelance job / Website</li>
                            <li><NavLink className="btn" to="/worksDetail">Detail →</NavLink></li>
                        </ul>
                    </section>
                </div>
        );
    }
}

export default Home;

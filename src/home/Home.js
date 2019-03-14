import React, { Component } from "react";

import {
    NavLink,
} from "react-router-dom";
import delighters from '../common/delighters';


class Home extends React.Component {
    componentDidMount() {
        delighters.init();
    }
    render() {
        return (
                <div className="home">
                    <section>
                        <ul className="main-visual demo" data-delighter>
                            <li className="left">
                                <ul>
                                    <li><h1>Hello, I’m Yasuhiro.</h1></li>
                                    <li><p>Front End developer.</p></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className="work-box">
                        <div className="left" data-delighter>
                            <NavLink to="/worksDetail"><img src="/img/img-works-01.png" alt=""/></NavLink>
                        </div>
                        <ul className="demo" data-delighter>
                            <li><h2><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2></li>
                            <li>Freelance job / Website</li>
                            <li><NavLink to="/worksDetail">View →</NavLink></li>
                        </ul>
                    </section>
                    <section className="work-box">
                        <div className="left" data-delighter>
                            <NavLink to="/worksDetail"><img src="/img/img-works-02.png" alt=""/></NavLink>
                        </div>
                        <ul data-delighter>
                            <li><h2><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2></li>
                            <li>Freelance job / Website</li>
                            <li><NavLink to="/worksDetail">View →</NavLink></li>
                        </ul>
                    </section>
                </div>
        );
    }
}

export default Home;

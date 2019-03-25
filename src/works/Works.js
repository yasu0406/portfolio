import React, { Component } from "react";
import {
    NavLink,
} from "react-router-dom";
import delighters from "../common/delighters";

class Works extends Component {
    componentDidMount() {
        delighters.init();
    }
    render() {
        return (
            <div className="works container">
                <ul>
                    <li data-delighter>
                        <NavLink to="/worksDetail">
                            <img src="/img/img-works-01.png" alt=""/>
                            <h2 className="fade-up"><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2>
                            <p className="fade-up">Freelance job / Website</p>
                            <div className="blue" data-delighter></div>
                            <div className="pop-up"><h3><a href="">View</a></h3></div>
                        </NavLink>
                    </li>
                    <li data-delighter>
                        <NavLink to="/worksDetail">
                            <img src="/img/img-works-01.png" alt=""/>
                            <h2 className="fade-up"><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2>
                            <p className="fade-up">Freelance job / Website</p>
                            <div className="blue" data-delighter></div>
                            <div className="pop-up"><h3><a href="">View</a></h3></div>
                        </NavLink>
                    </li>
                    <li data-delighter>
                        <NavLink to="/worksDetail">
                            <img src="/img/img-works-01.png" alt=""/>
                            <h2 className="fade-up"><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2>
                            <p className="fade-up">Freelance job / Website</p>
                            <div className="blue" data-delighter></div>
                            <div className="pop-up"><h3><a href="">View</a></h3></div>
                        </NavLink>
                    </li>
                    <li data-delighter>
                        <NavLink to="/worksDetail">
                            <img src="/img/img-works-01.png" alt=""/>
                            <h2 className="fade-up"><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2>
                            <p className="fade-up">Freelance job / Website</p>
                            <div className="blue" data-delighter></div>
                            <div className="pop-up"><h3><a href="">View</a></h3></div>
                        </NavLink>
                    </li>
                    <li data-delighter>
                        <NavLink to="/worksDetail">
                            <img src="/img/img-works-01.png" alt=""/>
                            <h2 className="fade-up"><NavLink to="/worksDetail">METAL REVISION.INC</NavLink></h2>
                            <p className="fade-up">Freelance job / Website</p>
                            <div className="blue" data-delighter></div>
                            <div className="pop-up"><h3><a href="">View</a></h3></div>
                        </NavLink>
                    </li>
                </ul>
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

export default Works;

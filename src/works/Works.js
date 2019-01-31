import React, { Component } from "react";
import {
    NavLink,
} from "react-router-dom";
import './works.scss';
import delighters from "../common/delighters";

class Works extends Component {
    componentDidMount() {
        delighters.init();
    }
    render() {
        return (
            <div className="works container">
                <ul>
                    <li>
                        <h2>01</h2>
                        <NavLink to="/worksDetail"><img src="/img/thumnail-works-01.png" alt=""/></NavLink>
                    </li>
                    <li>
                        <h2>02</h2>
                        <NavLink to="/worksDetail"><img src="/img/thumnail-works-01.png" alt=""/></NavLink>
                    </li>
                    <li>
                        <h2>03</h2>
                        <NavLink to="/worksDetail"><img src="/img/thumnail-works-01.png" alt=""/></NavLink>
                    </li>
                    <li>
                        <h2>04</h2>
                        <NavLink to="/worksDetail"><img src="/img/thumnail-works-01.png" alt=""/></NavLink>
                    </li>
                    <li>
                        <h2>05</h2>
                        <NavLink to="/worksDetail"><img src="/img/thumnail-works-01.png" alt=""/></NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Works;

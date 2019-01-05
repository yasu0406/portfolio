import React, { Component } from "react";
import {
    Route,
    NavLink,
    BrowserRouter,
} from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Works from "./works/Works";
import Navigation from "./common/Navigation";
import './common/reset.css';
import './common/common.css';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/works" component={Works}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
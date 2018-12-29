import React, { Component } from "react";
import {
    Route,
    NavLink,
    BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Navigation from "./Navigation";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Single Page Application</h1>
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
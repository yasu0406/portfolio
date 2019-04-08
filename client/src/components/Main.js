import React, { Component } from "react";
import {
    Route,
    BrowserRouter,
} from "react-router-dom";
import ScrollToTop from './common/ScrollToTop';
import WorksDetail from "./worksDetail/WorksDetail";
import Navigation from "./common/Navigation";
import './common/reset.css';
import './common/common.scss';
import './common/base.scss';
import './common/delighter.css';
import Home from "./home/Home";
import About from "./about/About";
import Works from "./works/Works";
import delighters from "./common/delighters";

class Main extends Component {
    componentDidMount() {
        delighters.init();
    }

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                <div>
                    <Navigation />
                    <div className="content">
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/works" exact component={Works}/>
                        <Route path="/works-detail/:id" exact component={WorksDetail}/>
                    </div>
                </div>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default Main;

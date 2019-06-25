import React, { Component } from "react";
import {
    Route,
    BrowserRouter,
    Switch,
    Link
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
    Page404 = () => (
        <div className="error-page container">
            <p>This is not the page looking for</p>
            <h2>404</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/works">Works</Link></li>
            </ul>
        </div>
    );
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                <div>
                    <Navigation />
                    <div className="content">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" exact component={About}/>
                            <Route path="/works" exact component={Works}/>
                            <Route path="/works-detail/:slug" exact component={WorksDetail} />
                            <Route component={this.Page404} />
                        </Switch>
                    </div>
                </div>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default Main;

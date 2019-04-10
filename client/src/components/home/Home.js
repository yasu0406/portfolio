import React, { Component } from "react";
import {connect} from "react-redux";
import {
    Link,
} from "react-router-dom";
import { fetchWorks } from "../../actions";
import delighters from '../common/delighters';

class Home extends Component {
    componentDidMount() {
        const promise = new Promise((resolve) => {
            resolve(this.props.fetchWorks());
        });
        promise.then(() =>
            delighters.init()
        );
    }

    renderList () {
        return this.props.works.map((work, index)  => {
            return (
                <>
                    <section className="work-box container" key={index}>
                        <div>
                            <div>
                                <Link to={`/works-detail/${work.id}`}><img src={`/img/${work.thumbnail}`} alt={work.title}/></Link>
                                <div className="blue" data-delighter></div>
                            </div>
                        </div>
                        <ul className="fade-up-in" data-delighter>
                            <li><h2><Link to={`/works-detail/${work.id}`}>{work.title}</Link></h2></li>
                            <li>{`${work.typeOfJob} / ${work.category}`}</li>
                            <li><Link className="btn" to={`/works-detail/${work.id}`}>Detail →</Link></li>
                        </ul>
                    </section>
                </>
            )
        })
    }
    render() {
        return (
                <div className="home">
                    <section>
                        <ul className="main-visual">
                            <li className="left">
                                <ul className="demo fade-up-in" data-delighter>
                                    <li><h1>Front End developer.</h1></li>
                                    <li><p>Hello, I’m Yasuhiro.</p></li>
                                    <li></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    {this.renderList()}
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

const mapStateToProps = (state) => {
    return {
        works: Object.values(state.works)
    }
};

export default connect(
    mapStateToProps,
    { fetchWorks }
)(Home);

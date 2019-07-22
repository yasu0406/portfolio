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
        return this.props.works.map((work) => {
            return (
                <>
                    <section className="work-box container" key={work.slug}>
                        <div>
                            <div className="work-list">
                                <Link to={`/works-detail/${work.slug}`}>
                                    <img src={work.jetpack_featured_media_url} alt={work.title.rendered}/>
                                    <div className="pop-up"></div>
                                </Link>
                                <div className="blue" data-delighter></div>
                            </div>
                        </div>
                        <ul className="fade-up-in" data-delighter>
                            <li><h2><Link to={`/works-detail/${work.slug}`}>{work.title.rendered}</Link></h2></li>
                            <li>{`${work.acf.typeofjob} / ${work.acf.category}`}</li>
                            <li><Link className="btn" to={`/works-detail/${work.slug}`}>Detail →</Link></li>
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
                        <div className="main-visual">
                            <h1 className="knockout">Y / <span className="blue title-span">K</span></h1>
                            <div className="scroll">
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                                <span className="text">Scroll down</span>
                            </div>
                            <div className="about-me">
                                <h2>Front-EndDeveloper</h2>
                                <p>My name is Yasu<span>I have 4+ years of experience.</span> Specialized in React and Word Press</p>
                            </div> 
                        </div>    
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

import React, { Component } from "react";
import { connect } from "react-redux";
import delighters from "../common/delighters";
import { fetchWork, fetchWorks } from "../../actions";
import {Link} from "react-router-dom";

class WorksDetail extends Component {
    componentDidMount() {
        const promise = new Promise((resolve) => {
            resolve(this.props.fetchWork(this.props.match.params.slug, this.props.fetchWorks()));
        });
        promise.then(() =>
            delighters.init()
        );
    }
    handler() {
        var overlay = document.querySelector("#load-overlay");
        const promise = new Promise((resolve) => {
            resolve(
                overlay.classList.remove("started")
            )
        });
        promise.then(() =>
            delighters.init()
        )
    }
    renderNext() {
        var nextId = 0;
        for(var i = 0; i < this.props.works.length; i++) {
            if(this.props.works[i].slug == this.props.match.params.slug) {
                nextId = i + 1;
            }
        }
        if(this.props.works.length !== nextId) {
            return (
                <>
                    <section className="next-project box" data-delighter>
                        <div className="box" data-delighter>
                            <h2><Link onClick={this.handler} to={`/works-detail/${this.props.works[nextId].slug}`}>Next Work</Link></h2>
                        </div>
                    </section>
                </>
            )
        }
    }
    renderList() {
        return this.props.works.map((work)  => {
            if(work.slug != this.props.match.params.slug) {
                return (
                    <>
                        <li key={work.slug} className="fade-up">
                            <div>
                                <Link to={`/works-detail/${work.slug}`} onClick={this.handler}>
                                    <img src={work.jetpack_featured_media_url} alt={work.title.rendered}/>
                                    <div className="pop-up"><h3>{work.title.rendered}</h3></div>
                                </Link>
                            </div>
                        </li>
                    </>
                )
            }
        })
    }
    renderFourth(imgDetailSecond, title) {
        if (!imgDetailSecond) {
            return (
                <>
                    <section className="fourth-content">
                        <div className="container scale-up" data-delighter>
                            <img src={`/img/${imgDetailSecond}`} alt={title} />
                        </div>
                    </section>
                </>
            )
        }
    }
    page404() {
        var loadBox = document.querySelector("#load-box");
        var errorPage = document.querySelector("#error-page");
        if(loadBox != null) {
            loadBox.classList.add("hide");
        }
        if(errorPage != null) {
            errorPage.classList.remove("hide");
        }
    }
    projectUri(stillwork, projecturl) {

        if(stillwork.value === "false") {
            return (
                <span className="coming-text">Coming soon...</span>
            );
        } else {
            return(
                <a className="btn" href={projecturl} target="_blank">View</a>
            )
        }
    }
    renderThird(title, acf) {
        if(acf.secondimg) {
            return(
                <>
                <section className="third-content">
                    <div>
                        <img src={acf.secondimg} alt={title.rendered} />
                        <div className="blue" data-delighter></div>
                    </div>
                </section>
                </>
            )       
        }
    }
    render() {
        if (!this.props.work) {
            return (
                <>
                <div id="load-box" onLoadStart={setTimeout(this.page404, 5000)}>
                    <h2>Loading...</h2>
                </div>
                <div id="error-page" className="error-page container hide">
                    <p>This is not the page looking for</p>
                    <h2>404</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/works">Works</Link></li>
                    </ul>
                    <ul id="load-overlay" className="load-overlay" data-delighter>
                        <li className="fade-out-up"></li>
                        <li className="fade-out-up"></li>
                        <li className="fade-out-up"></li>
                        <li className="fade-out-up"></li>
                        <li className="fade-out-up"></li>
                    </ul>
                </div>
                </>
            );
        }
        const {title, content, jetpack_featured_media_url, acf } = this.props.work
        return (
            <div className="work-detail">
                <section className="first-content" style={{background: `url(${jetpack_featured_media_url}) center no-repeat`}}>
                        <h1>{title.rendered}</h1>
                </section>
                <section className="second-content">
                    <div className="container">
                        <ul className="fade-up-in" data-delighter>
                            <li dangerouslySetInnerHTML={{ __html: content.rendered }}></li>
                            <li>
                                <ul>
                                    <li>Date - {acf.workdate}</li>
                                    <li>Category - {acf.category}</li>
                                    <li>
                                        <ul>
                                        </ul>
                                    </li>
                                    <li>
                                        {this.projectUri(acf.stillwork, acf.projecturl)}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
                {this.renderThird(title, acf)}
                {this.renderNext()}
                 <section className="all-project container">
                    <div data-delighter>
                        <h2 className="fade-up">All Works</h2>
                    </div>
                    <ul className="work-list" data-delighter>
                        {this.renderList()}
                    </ul>
                </section>
                <ul id="load-overlay" className="load-overlay" data-delighter>
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

const mapStateToProps = (state, ownProps) => {
    return {
        work: state.works[ownProps.match.params.slug],
        works: Object.values(state.works)
    };
};

export default connect(
    mapStateToProps,
    { fetchWork, fetchWorks }
)(WorksDetail);

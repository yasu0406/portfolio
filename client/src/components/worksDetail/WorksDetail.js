import React, { Component } from "react";
import { connect } from "react-redux";
import delighters from "../common/delighters";
import { fetchWork, fetchWorks } from "../../actions";
import {Link} from "react-router-dom";

class WorksDetail extends Component {
    state = {
        nextId: 1
    };
    componentDidMount() {
        const promise = new Promise((resolve) => {
            resolve(this.props.fetchWork(this.props.match.params.id, this.props.fetchWorks()));
        });
        promise.then(() =>
            delighters.init()
        );
    }
    renderSkills(skillWord) {
        return skillWord.map((skill, index) => {
            return <li key={index}>{skill}</li>
        })
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
        this.state.nextId =+ this.props.match.params.id + 1;
        if(this.props.works.length != this.props.match.params.id) {
            return (
                <>
                    <section className="next-project box" data-delighter>
                        <div className="box" data-delighter>
                            <h2><Link onClick={this.handler} to={`/works-detail/${this.state.nextId}`}>Next Work</Link></h2>
                        </div>
                    </section>
                </>
            )
        }
    }
    renderList() {
        return this.props.works.map((work)  => {
            if(work.id != this.props.match.params.id) {
                return (
                    <>
                        <li key={work.id}>
                            <div data-delighter>
                                <Link to={`/works-detail/${work.id}`} onClick={this.handler}>
                                    <img src={`/img/${work.thumbnail}`} alt={work.title}/>
                                    <div className="pop-up"><h3>{work.title}</h3></div>
                                    <div className="blue" data-delighter></div>
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
        const {title, description, thumbnail, date, category, skills, projectUrl, imgDetailFirst, imgDetailSecond } = this.props.work;
        let skillWord = skills.split(',');
        return (
            <div className="work-detail">
                <section className="first-content">
                    <h1>{title}</h1>
                    <p><img src={`/img/${thumbnail}`} alt={title} /></p>
                </section>
                <section className="second-content">
                    <div className="container">
                        <ul className="fade-up-in" data-delighter>
                            <li>{description}</li>
                            <li>
                                <ul>
                                    <li>Date - {date}</li>
                                    <li>Category - {category}</li>
                                    <li>
                                        <ul>
                                            {this.renderSkills(skillWord)}
                                        </ul>
                                    </li>
                                    <li><a className="btn" href={projectUrl} target="_blank">View</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </section>
                <section className="third-content">
                    <div>
                        <img src={`/img/${imgDetailFirst}`} alt={title} />
                        <div className="blue" data-delighter></div>
                    </div>
                </section>
                {this.renderFourth(imgDetailSecond, title)}
                {this.renderNext()}
                <section className="all-project container">
                    <div data-delighter>
                        <h2 className="fade-up">All Works</h2>
                    </div>
                    <ul className="work-list">
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
        work: state.works[ownProps.match.params.id],
        works: Object.values(state.works)
    };
};

export default connect(
    mapStateToProps,
    { fetchWork, fetchWorks }
)(WorksDetail);

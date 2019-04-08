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
        return skillWord.map((skill) => {
            return <li>{skill}</li>
        })
    }
    handler() {
        var overlay = document.querySelector("#load-overlay")
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
                    <section className="next-project">
                        <h2><Link onClick={this.handler} to={`/works-detail/${this.state.nextId}`}>Next Project</Link></h2>
                    </section>
                </>
            )
        }
    }
    renderList() {
        return this.props.works.map((work)  => {
            return (
                <>
                    <li key={work.id} data-delighter>
                        <div>
                            <Link to={`/works-detail/${work.id}`}><img src={`/img/${work.thumbnail}`} alt={work.title}/></Link>
                            <div className="pop-up"><h3><Link onClick={this.handler}  to={`/works-detail/${work.id}`}>View</Link></h3></div>
                        </div>
                        <div className="blue" data-delighter></div>
                    </li>
                </>
            )
        })
    }
    render() {
        if (!this.props.work) {
            return <div>Loading...</div>
        }
        const {id, title, description, thumbnail, date, category, skills, projectUrl, imgDetailFirst, imgDetailSecond } = this.props.work;
        var skillWord = skills.split(',');
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
                <section className="fourth-content">
                    <div className="container scale-up" data-delighter>
                        <img src={`/img/${imgDetailSecond}`} alt={title} />
                    </div>
                </section>
                <section>
                    {this.renderNext()}
                </section>
                <section className="all-project container">
                    <h2>All Project</h2>
                    <ul key={id}>
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
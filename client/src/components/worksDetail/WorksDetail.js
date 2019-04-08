import React, { Component } from "react";
import { connect } from "react-redux";
import delighters from "../common/delighters";
import { fetchWork } from "../../actions";

class WorksDetail extends Component {
    componentDidMount() {
        this.props.fetchWork(this.props.match.params.id);
        const promise = new Promise((resolve) => {
            resolve(this.props.fetchWork(this.props.match.params.id));
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
    render() {
        if (!this.props.work) {
            return <div>Loading...</div>
        }
        const { title, description, thumbnail, date, category, skills, projectUrl, imgDetailFirst, imgDetailSecond } = this.props.work;
        var skillWord = skills.split(',');
        return (
            <div className="work-detail">
                <section className="first-content">
                    <h1>{title}</h1>
                    <p className="scale-up" data-delighter><img src={`/img/${thumbnail}`} alt={title} /></p>
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
                <section className="work-list">
                    <div className="container">
                        <ul>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>
                </section>
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

const mapStateToProps = (state, ownProps) => {
    return {
        work: state.works[ownProps.match.params.id]
    };
};

export default connect(
    mapStateToProps,
    { fetchWork }
)(WorksDetail);

import React, { Component } from "react";
import { connect } from "react-redux"
import {
    Link,
} from "react-router-dom";
import { fetchWorks } from "../../actions";
import delighters from "../common/delighters";

class Works extends Component {
    componentDidMount() {
        const promise = new Promise((resolve) => {
            resolve(this.props.fetchWorks());
        });
        promise.then(() =>
            delighters.init()
        );
    }

    renderList() {
        return this.props.works.map((work, index) => {
                return (
                    <>
                        <li data-delighter key={index}>
                            <div>
                                <Link to={`/works-detail/${work.id}`}><img src={`/img/${work.thumbnail}`} alt={work.title}/></Link>
                                <div className="pop-up"><h3><Link to={`/works-detail/${work.id}`}>View</Link></h3></div>
                            </div>
                            <h2 className="fade-up"><Link to={`/works-detail/${work.id}`}>{work.title}</Link></h2>
                            <p className="fade-up">{`${work.typeOfJob} / ${work.category}`}</p>
                            <div className="blue" data-delighter></div>
                        </li>
                    </>
                )
            }
        )
    }

    render() {
        return (
            <div className="works container">
                <ul>
                    {this.renderList()}
                </ul>
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
)(Works);

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
        return this.props.works.map((work) => {
                return (
                    <>
                        <li data-delighter key={work.id}>
                            <div>
                                <Link to={`/works-detail/${work.slug}`}>
                                    <img src={work.jetpack_featured_media_url} alt={work.title.rendered}/>
                                    <div className="pop-up">
                                        <h3>{work.title.rendered}</h3>
                                    </div>
                                </Link>
                                <div className="blue" data-delighter></div>
                            </div>
                            {/*<h2 className="fade-up"><Link to={`/works-detail/${work.id}`}>{work.title}</Link></h2>*/}
                            {/*<p className="fade-up">{`${work.typeOfJob} / ${work.category}`}</p>*/}
                        </li>
                    </>
                )
            }
        )
    }

    render() {
        return (
            <div className="works container">
                <ul className="work-list">
                    {this.renderList()}
                </ul>
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

const mapStateToProps = (state) => {
    return {
        works: Object.values(state.works)
    }
};

export default connect(
    mapStateToProps,
    { fetchWorks }
)(Works);

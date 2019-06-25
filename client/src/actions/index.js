import works from '../api/works';
import {
    FETCH_WORKS,
    FETCH_WORK
} from './types';

export const fetchWorks = () => async dispatch => {
    const response = await works.get('/wp-json/wp/v2/posts/');
    dispatch({ type: FETCH_WORKS, payload: response.data});
};

export const fetchWork = slug => async dispatch => {
    const response = await works.get(`/wp-json/wp/v2/posts?slug=${slug}`);
    dispatch({ type: FETCH_WORK, payload: response.data[0] });
};
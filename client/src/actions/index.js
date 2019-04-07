import works from '../api/works';
import {
    FETCH_WORKS,
    FETCH_WORK
} from './types';

export const fetchWorks = () => async dispatch => {
    const response = await works.get('/works');

    dispatch({ type: FETCH_WORKS, payload: response.data });
};

export const fetchWork = id => async dispatch => {
    const response = await works.get(`/works/${id}`);

    dispatch({ type: FETCH_WORK, payload: response.data });
};
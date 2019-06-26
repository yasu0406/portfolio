import _ from "lodash";
import {
    FETCH_WORK,
    FETCH_WORKS
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_WORKS:
            return {...state, ..._.mapKeys(action.payload, 'slug')};
        case FETCH_WORK:
        return {...state, [action.payload.slug]: action.payload};
        default:
            return state;
    }
}
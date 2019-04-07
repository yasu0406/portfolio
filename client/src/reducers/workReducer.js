import _ from "lodash";
import {
    FETCH_WORK,
    FETCH_WORKS
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_WORK:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_WORKS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}
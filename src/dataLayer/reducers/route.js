import {ROUTE} from '../actions/route';
import initialState from '../initialState/route'

// @todo review need to have initial route state params as null
export default function (state = initialState, action) {
    if (action.type === ROUTE) {
        return {
            ...action.route
        }
    } else {
        return state;
    }
}

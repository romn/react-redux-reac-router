import initialState from "../initialState/notebook";

export default function (state = initialState, action) {
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    } else {
        return state // In case an action is passed in we don't understand
    }
}

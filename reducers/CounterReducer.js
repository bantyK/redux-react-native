import { ACTION_INCREMENT, ACTION_DECREMENT } from "../actions/CounterActions";

const initialState = {
    count: 0
}

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_INCREMENT:
            return {
                count: state.count + 1
            }
        case ACTION_DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}
import * as actionTypes from '../actions';

const counterState = {
    counter: 0
};

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }

        default:
            return state;
    }
};

export default counterReducer;
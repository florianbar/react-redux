import * as actionTypes from '../actions';

const resultsState = {
    results: []
};

const resultsReducer = (state = resultsState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.counter })
            }

        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.results.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultId);
            return {
                ...state,
                results: updatedArray
            }

        default:
            return state;
    }
};

export default resultsReducer;
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const resultsState = {
    results: []
};

const resultsReducer = (state = resultsState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(
                state, 
                { results: state.results.concat({ id: new Date(), value: action.result }) }
            );

        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.results.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultId);
            return updateObject(
                state, 
                { results: updatedArray }
            );

        default:
            return state;
    }
};

export default resultsReducer;
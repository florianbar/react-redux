import * as actionTypes from './actionTypes';

// Action Creators

const storeResultData = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(storeResultData(result));
        }, 2000);
    };
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resultId
    };
};
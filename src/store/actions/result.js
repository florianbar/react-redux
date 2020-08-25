import * as actionTypes from './actionTypes';

// Action Creators

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionTypes.STORE_RESULT,
                result: result
            });
        }, 2000);
    };
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resultId
    };
};
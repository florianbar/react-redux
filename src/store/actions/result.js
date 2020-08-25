import * as actionTypes from './actionTypes';

// Action Creators

const storeResultData = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            //const oldCounter = getState().ctr.counter;
            //console.log("[oldCounter]", oldCounter);
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
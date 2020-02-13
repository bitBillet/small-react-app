import { combineReducers } from 'redux';

function items (state = [], action) {
    if (action.type === 'FETCH_DATA_SUCCESS') {
        return action.payload
    }
    return state
}

function itemsIsLoading (isLoad = false, action) {
    if (action.type === 'ITEMS_IS_LOADING') {
        return action.payload
    }
    return isLoad
}

export default combineReducers({
    items,
    itemsIsLoading
});

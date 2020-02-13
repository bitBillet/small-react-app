export function itemsFetchData (url) {
    return async (dispatch) => {
        const response = await fetch(url)
        response.json()
        .then(json => {
            dispatch({
                type: 'FETCH_DATA_SUCCESS',
                payload: json
            })
            dispatch({
                type: 'ITEMS_IS_LOADING',
                payload: true
            })
        })
    }
}
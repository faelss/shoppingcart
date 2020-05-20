const getFeatureToggle = name => async dispatch => {
    dispatch({type: "FETCH_FEATURE_TOGGLE"});

    const response = await fetch(`/features/${name}`);
    try {
        const json = await response.json();
        
        dispatch({
            type: "FETCH_FEATURE_TOGGLE_SUCCESS",
            payload: json,
        });
    } catch (e) {
        dispatch({
            type: "FETCH_FEATURE_TOGGLE_ERROR",
            error: JSON.stringify(e),
        });
    }
};

const getAllFeatureToggle = () => async dispatch => {
    dispatch({type: "FETCH_FEATURE_TOGGLE"});
    
    const response = await fetch(`/features/`);
    try {
        const json = await response.json();
        dispatch({
            type: "FETCH_FEATURE_TOGGLE_SUCCESS",
            payload: json,
        });
    } catch (e) {
        dispatch({
            type: "FETCH_FEATURE_TOGGLE_ERROR",
            error: JSON.stringify(e),
        });
    }
};

export {
    getAllFeatureToggle,
    getFeatureToggle,
}

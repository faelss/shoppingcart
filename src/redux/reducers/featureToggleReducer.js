const initialState = {
    features: [],
    loading: true,
    error: null,
}

const featureToggleReducer = (state = initialState, action) => {

    switch(action.type) {
        case "FETCH_FEATURE_TOGGLE":
            return {
                ...state,
                loading: true,
            };

        case "FETCH_FEATURE_TOGGLE_SUCCESS":
            return {
                ...state,
                loading: false,
                features: [
                    ...state.features.filter(feature => feature.name !== action.payload.name),
                    action.payload,
                ],
            };
            
        case "FETCH_FEATURE_TOGGLE_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        
        default: return state;
    }

};
  
export default featureToggleReducer;
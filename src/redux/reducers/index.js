import { combineReducers } from 'redux'
import products from './productsReducer';
import features from './featureToggleReducer';

export default combineReducers({
    products: products,
    features: features,
});
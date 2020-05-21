import React, { useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFeatureToggle } from '../../redux/actions/featureToggle';

const FeatureToggleContext = createContext();

function useFeatureToggleContext() {
    const context = React.useContext(FeatureToggleContext);

    if (!context) {
        throw new Error(
            'You cannot render this component outside FeatureToggleComponent!'
        );
    }

    return context;
}

function FeatureToggleComponent({ children, isLoadingFeature, features, getFeatureToggle, featureName }) {

    const currentFeature = features.find(feature => feature.name === featureName);

    useEffect(() => {
        getFeatureToggle(featureName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //still needs to fix variant per component
    if (isLoadingFeature) {
        return null;
    }

    return (
        <FeatureToggleContext.Provider value={currentFeature}>
            {children}
        </FeatureToggleContext.Provider>
    );
}

const ToggleComponent = ({ children }) => {
    const currentFeature = useFeatureToggleContext();
    
    if (currentFeature?.enabled) {
        return React.Children.map(children, child => React.cloneElement(child, {...currentFeature.props}));
    }
    return null;
};

const FallbackComponent = ({ children }) => {
    const currentFeature = useFeatureToggleContext();

    if (!currentFeature?.enabled) {
        return children;
    }
    return null;
};

FeatureToggleComponent.ToggleComponent = ToggleComponent;
FeatureToggleComponent.FallbackComponent = FallbackComponent;

FeatureToggleComponent.propTypes = {
    fallbackComponent: PropTypes.element,
    children: PropTypes.element.isRequired,
    featureName: PropTypes.string.isRequired,
};

FeatureToggleComponent.defaultProps = {
    featureName: ''
};

const mapStateToProps = ({ features }) => {
    return {
        features: features.features,
        isLoadingFeature: features.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFeatureToggle: featureName => dispatch(getFeatureToggle(featureName)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FeatureToggleComponent);
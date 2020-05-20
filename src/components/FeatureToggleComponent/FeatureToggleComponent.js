import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFeatureToggle } from '../../redux/actions/featureToggle';

function FeatureToggleComponent({ children, isLoadingFeature, features, getFeatureToggle, featureName, fallbackComponent }) {

    const currentFeature = features.find(feature => feature.name === featureName);

    useLayoutEffect(() => {
        getFeatureToggle(featureName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //still needs to fix variant per component
    if (currentFeature?.enabled) {
        return React.Children.map(children, child => React.cloneElement(child, {...currentFeature.props}));
    }

    if (isLoadingFeature) {
        return null;
    }

    return fallbackComponent || null;
}

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
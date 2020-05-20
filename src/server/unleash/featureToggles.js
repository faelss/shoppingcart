const config = require("config");
const { isEnabled } = require("unleash-client");

function getFeatureToggle(context) {
  return (obj, feature) => {
    obj[feature] = { isEnabled: isEnabled(feature, context) };
    return obj;
  };
}

module.exports = function getAllFeatureToggles(context) {
  // const allFeatureToggles = config.get("feature_toggles");
  return getFeatureToggle(context);
};

module.exports = function setUnleashContext (sessionId) {
  const context = {
    sessionId: sessionId
  }
  return context
}

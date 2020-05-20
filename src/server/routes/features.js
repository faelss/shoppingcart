const express = require("express");
const router = express.Router();
const {
  isEnabled,
  getVariant,
  getFeatureToggleDefinition,
  getFeatureToggleDefinitions,
} = require("unleash-client");

router.get("/:name", (req, res) => {
  //some context like session id
  const context = {
    userId: "2",
    sessionId: "some-session-id",
    remoteAddress: "127.0.0.1",
  };

  let featureResponse = {};

  const { payload, enabled } = getVariant(req.params.name, context);

  if (enabled) {
    featureResponse = {
      props: JSON.parse(payload.value)
    }
  }

  featureResponse = { 
    ...featureResponse,
    name: req.params.name,
    enabled: isEnabled(req.params.name, context) 
  };

  

  res.json(featureResponse);
});

module.exports = router;

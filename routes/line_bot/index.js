const path = require('path');
const root = path.parse(process.mainModule.filename).dir;
const express = require('express');
const router = express.Router({ mergeParams: true });

const handler = {
    linewebhook: require("./handlers/linewebhook").linewebhook,
    push_message: require("./handlers/push_message").push_message
};

router.route("/linewebhook").post(handler.linewebhook);
router.route("/push_message").post(handler.push_message);

module.exports = router;
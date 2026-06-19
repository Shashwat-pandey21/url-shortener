const express = require("express");
const{ handleGenerateNewShortURL, handelGetAnalytics } = require("../controller/url");

const router = express.Router();

router.post('/', handleGenerateNewShortURL);

router.get("/analytics/:shortId",handelGetAnalytics);

module.exports = router;
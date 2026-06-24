const express = require("express");

const {handelUserSignup, handelUserLogin} = require("../controller/auth")

const router = express.Router();

router.post('/',handelUserSignup);
router.post('/login',handelUserLogin);

module.exports = router;
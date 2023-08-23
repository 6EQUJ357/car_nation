let express = require("express");
let router = express.Router();

//controllers
const  googleAUTH = require("../controller/googleAUTH");



//signin user (post)
router.post("/google-auth", googleAUTH.googleAUTH)


module.exports = router; 
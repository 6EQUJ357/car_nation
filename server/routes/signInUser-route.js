let express = require("express");
let router = express.Router();


//controllers
const signInUserControllerPost = require("../controller/signInUser-controller")



//signin user (post)
router.post("/signin", signInUserControllerPost.signInUserControllerPost)


module.exports = router; 
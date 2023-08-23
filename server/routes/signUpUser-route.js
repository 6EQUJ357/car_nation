let express = require("express");
let router = express.Router();

//controllers
const signUpUserController = require("../controller/signUpUser-controller")



//signup user (post)
router.post("/signup",signUpUserController.signUpUserControllerPost)


//signup user (get)
router.get('/getsignupuserdetails',signUpUserController.signUpUserControllerGet)



module.exports = router; 
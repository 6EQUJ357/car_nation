let express = require("express");
let mongoose = require("mongoose");
require("dotenv").config();
let cors = require("cors")
let jwt = require("jsonwebtoken");
const multer = require('multer');
let path = require("path")

//.ENV
const port = process.env.PORT || 5050;
const DB_connection = process.env.DB_CONNECTION;  

//controllers
const signUpAdminControllerPost = require("./controller/signUpAdmin-controller");
const signUpUserController = require("./controller/signUpUser-controller");
const signInUserController = require("./controller/signInUser-controller");
const protect_router_myaccount = require("./controller/protected-route-controller");

const EditAdminAccount = require("./controller/adminAPI-controller");

//middleware

let middleware = require("./controller/jwtTokenMiddleware-controller")

//inpsection report

let inspectionReportController = require("./controller/inspectionReport-controller")


//initializing express  
let app = express();

app.use(cors({origin : "*"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//DB connection 
mongoose.connect(DB_connection, {   
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log("DB connection established...")).catch(err=>console.log(err)); 



//home route
app.get("/", (req, res) => {
    
    return res.send("<h1>Welcome to our API</h1>");
}) 
 
 
//signup routes

app.post("/adminsignup", signUpAdminControllerPost.signUpAdminControllerPost)

app.post("/signup", signUpUserController.signUpUserControllerPost) 

app.get("/getsignupuserdetails", signUpUserController.signUpUserControllerGet)
 

 

//signin routes
 
app.post("/signin", signInUserController.signInUserControllerPost) 


 
// all protected route
app.get(["/adminaccount", "/editmechanic", "/edituser"], middleware, protect_router_myaccount.protect_myaccount)

//edit admin account
app.put("/editadmin/:id", EditAdminAccount.EditAdminAccountPut)
app.put("/editmechanic/:id", EditAdminAccount.EditMechanicAccountPut)
app.put("/edituser/:id", EditAdminAccount.EditUserAccountPut)

app.delete("/deletemechanic/:id", EditAdminAccount.signUpUserControllerDeleteMechanic)
app.delete("/deleteuser/:id", EditAdminAccount.signUpUserControllerDeleteUser)


//inspection report

app.use("/Captureimg", express.static("Captureimg"))

const captureimgStore = multer.diskStorage({
    destination: (req, file, cb)=> {
      cb(null, 'Captureimg'); 
    },
    filename: (req, file, cb)=> {
        
      cb(null, Date.now() + path.extname(file.originalname)); 
    } 
  });  


  //image file type  check
  const captureimgFilter = (req, file, cb) => { 
    if ( 
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, "Only image files are allowed");
    }
  };
  
  const captureimgUpload = multer({ storage: captureimgStore, filefilter: captureimgFilter });
  //multer image store in a images file end
app.post("/inspectionreport",  captureimgUpload.single("capturingVehicleImg"), inspectionReportController.inspectionReport);
app.get("/getinspectionreport", inspectionReportController.getInspectionreport)



 

 app.listen(port, ()=> console.log(`server running at port : ${port}...`)) 


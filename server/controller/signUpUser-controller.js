const signUpUserSchema = require("../db Models/signUpUser-model");
const bcrypt = require("bcrypt");



//signup post request
const signUpUserControllerPost= async(req,res)=>{
    try{
        const {adduserName, addemail, addmobileNO, adduserType, addpassword, addconfirmPassword }= req.body;   

        //all fields validation
        if(!adduserName || !addemail || !addmobileNO || !adduserType || !addpassword || !addconfirmPassword ){
            return res.json({status : 400, response : false, message : "Fill The Fields"});
        }

        // email validation regular expression
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        // Validate email
        if (!addemail || !emailRegex.test(addemail)) {
            return res.json({status : 400, response : false, message: 'Invalid email' });
        }

         // Mobile number validation regular expression
        const mobileNumberRegex = /^\d+$/;

        if (!addmobileNO || !mobileNumberRegex.test(addmobileNO)) {
            return res.json({status : 400, response : false, message: 'Invalid mobile number' });
        }


        // Validate password
        if (!addpassword || addpassword.length < 6 || addpassword.length > 16) {
            return res.json({status : 400, response : false, message: 'Password must be  6-16 characters long' });
        }

        // Validate confirm password
        // if (password !== confirmPassword) {
        //     return res.json({ message: 'Passwords do not match' });
        // }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Generate bcrypt password hash
        const hashedPassword = await bcrypt.hash(addpassword, salt);
        
        // Compare bcrypt hash of password and confirm password
        const passwordMatch = await bcrypt.compare(addconfirmPassword, hashedPassword);
        if (!passwordMatch) {
        return res.json({status : 400, response : false, message: 'Passwords do not match' });
        }

        //check exist based on email
        let existEmail = await signUpUserSchema.findOne({email : addemail});
        if(existEmail){
            return res.json({status : 400, response : false, message : "User Already Exist.."})
        }

        const saveUser = new signUpUserSchema({userName : adduserName, email : addemail, mobileNO : addmobileNO, password : hashedPassword, userType : adduserType});

        await saveUser.save();

        res.status(200).json({status : 200, response : true, message: 'User registered successfully' });
    }
    catch (error) {
        console.log("Error in Signup User", error);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    }
}

//get signup user details
const signUpUserControllerGet = async(req,res)=>{
    try{
        await signUpUserSchema.find().select('-password').exec()
        .then(users => {
          return res.json(users);
        })
        .catch(err => {
          return res.json({status : 400, response : false, message : "error occured while getting user without password field"})
        });
    }
    catch(err){
        console.log("getting user details error", err);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    }
}




module.exports = {
    signUpUserControllerPost,
    signUpUserControllerGet
   
}

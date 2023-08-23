const signUpUserSchema = require("../db Models/signUpUser-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


let signInUserControllerPost = async(req,res)=>{
    try{
        const {email, password} = req.body;

        //all fields validation
        if(!email || !password) {
            return res.json({status : 400, response : false, message:"Please Fill the Fields..."})
        }

        // email validation regular expression
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        // Validate email
        if (!email || !emailRegex.test(email)) {
            return res.json({status : 400, response : false, message: 'Invalid email' });
        }

        //check the email
        let existEmail = await signUpUserSchema.findOne({email:email});

        if(!existEmail){
            return  res.json({status : 400, response : false, message : "User Not Found..."})
        } 
        
        // Compare bcrypt hash of password and signin password
        const passwordMatch = await bcrypt.compare(password, existEmail.password);

        if (!passwordMatch) {
            return res.json({status : 400, response : false, message: 'Invalid Password Credential' }); //Passwords do not match
            }
        
        //payload
        let payload = {
            user : {
                id : existEmail._id
            }
        }

        //jwt token
        jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn:"1h"},  (err,token)=>{ 
            if(err) {
                console.log(err);
                return res.json({status : 400, response : false, message :"Error while generating JWT"})
            }
            return res.json({token:token, status : 200, response : true, message:"login successfully.."}) //send token

        })

    
    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


module.exports = {
    signInUserControllerPost
}
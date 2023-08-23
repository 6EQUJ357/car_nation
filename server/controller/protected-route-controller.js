
const signUpUserSchema = require("../db Models/signUpUser-model");

//protected dashboard

const protect_myaccount = async(req,res)=>{
    try{
        let exist = await signUpUserSchema.findById(req.user.id)
        if(!exist){ 
            return res.json({status:400, response : false, message:"user not found"})
        }

        // Exclude the password field from the user object
        const userWithoutPassword = { ...exist.toObject() };
        delete userWithoutPassword.password;

        return res.json({status : 200, response : true, data : userWithoutPassword})
     }
     catch(err){
         console.log(err)
         return res.json({status:400, response : false, message : "internal server error..."})
     }
    

}

module.exports = {
    protect_myaccount
}
const signUpUserSchema = require("../db Models/signUpUser-model");
const bcrypt = require("bcrypt");



//edit admin account

const EditAdminAccountPut = async(req, res)=>{
    try{
        const {userName, email, mobileNO, password} = req.body; 
       
        console.log("first", userName, email, mobileNO, password);

        if(!password){
            return res.json({status:400, response:false, message:"Enter Password"})
        }

        let exist = signUpUserSchema.findOne({email : email});


        if(!exist){
            return res.json({status : 400, response : false, message : "admin not found"});
        }
        else{
            // Generate a salt
            const salt = await bcrypt.genSalt(10);

            // Generate bcrypt password hash
            const hashedPassword = await bcrypt.hash(password, salt);

            await signUpUserSchema.findByIdAndUpdate(req.params.id, {userName, email, mobileNO, password : hashedPassword}, {new : true})

            return res.json({status:200, response:true, message:"Account Update Successfully..."})
        }
    }
    catch(err){
        console.log("Error in Signup User", err);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    }
}



const EditMechanicAccountPut = async(req, res)=>{
    try{
        const {editMechanicName, editMechanicemail, editMechanicmobileNO, editMechanicpassword} = req.body; 
       
        //console.log("first", userName, email, mobileNO, password);

        if(!editMechanicpassword){
            return res.json({status:400, response:false, message:"Enter Password"})
        }

        let exist = signUpUserSchema.findOne({email : editMechanicemail});


        if(!exist){
            return res.json({status : 400, response : false, message : "mechanic not found"});
        }
        else{
            // Generate a salt
            const salt = await bcrypt.genSalt(10);

            // Generate bcrypt password hash
            const hashedPassword = await bcrypt.hash(editMechanicpassword, salt);

            await signUpUserSchema.findByIdAndUpdate(req.params.id, {userName : editMechanicName, email : editMechanicemail, mobileNO : editMechanicmobileNO, password : hashedPassword}, {new : true})

            return res.json({status:200, response:true, message:"Account Update Successfully..."})
        }
    }
    catch(err){
        console.log("Error in Signup User", err);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    }
}


const EditUserAccountPut = async(req, res)=>{
    try{
        const {editUserName, editUseremail, editUsermobileNO, editUserpassword} = req.body; 
       

        if(!editUserpassword){
            return res.json({status:400, response:false, message:"Enter Password"})
        }

        let exist = signUpUserSchema.findOne({email : editUseremail});


        if(!exist){
            return res.json({status : 400, response : false, message : "mechanic not found"});
        }
        else{
            // Generate a salt
            const salt = await bcrypt.genSalt(10);

            // Generate bcrypt password hash
            const hashedPassword = await bcrypt.hash(editUserpassword, salt);

            await signUpUserSchema.findByIdAndUpdate(req.params.id, {userName : editUserName, email : editUseremail, mobileNO : editUsermobileNO, password : hashedPassword}, {new : true})

            return res.json({status:200, response:true, message:"Account Update Successfully..."})
        }
    }
    catch(err){
        console.log("Error in Signup User", err);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    }
}


//delete mechanic
const signUpUserControllerDeleteMechanic = async(req,res)=>{
    try{
        await signUpUserSchema.findByIdAndDelete(req.params.id);
        return res.json(await signUpUserSchema.find().select('-password').exec());
    }
    catch(err){
        console.log("getting user details error", err);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    }
}


//delete mechanic
const signUpUserControllerDeleteUser = async(req,res)=>{
    try{
        await signUpUserSchema.findByIdAndDelete(req.params.id);
        return res.json(await signUpUserSchema.find().select('-password').exec());
    }
    catch(err){
        console.log("getting user details error", err);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    }
}



module.exports = {
    EditAdminAccountPut,
    EditMechanicAccountPut,
    EditUserAccountPut,
    signUpUserControllerDeleteMechanic,
    signUpUserControllerDeleteUser
}
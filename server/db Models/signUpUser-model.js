let mongoose = require("mongoose");

const signUpUserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        unique : true,
        require : true,
        trim : true
    },
    mobileNO : {
        type: String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    // checkbox : {
    //     type : Boolean,
    //     require : true
    // },
    userType : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : Date.now() 
    }
});


module.exports = mongoose.model("signUpUserSchema", signUpUserSchema);





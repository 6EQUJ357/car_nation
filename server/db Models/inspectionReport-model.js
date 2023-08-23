let mongoose = require("mongoose");

let inspectionReportModel = new mongoose.Schema({
    vehicleName : {
        type : String,
        required : true
    }, 
    vehicleNumber : {
        type : String,
        require : true
    }, 
    modelNumber : {
        type : String,
        require : true
    }, 
    contactNumber : {
        type : String,
        require : true
    }, 
    readings : {
        type : String,
        require : true
    }, 
    capturingVehicleImg : {
        type : String,
        require : true
    },
    remarks : {
        type : String,
        require : true
    },
    date : {
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model("inspectionReportModel", inspectionReportModel)
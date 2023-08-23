const inspectionReportModel = require("../db Models/inspectionReport-model")






const inspectionReport = async(req, res)=>{
    try{
        const {vehicleName, vehicleNumber, modelNumber, contactNumber, readings, remarks } = req.body;

        let images =req.protocol + '://' + req.get('host') + '/Captureimg/' + req.file.filename; 

        const saveInspection= new inspectionReportModel({vehicleName, vehicleNumber, modelNumber, contactNumber, readings, capturingVehicleImg : images, remarks});

        await saveInspection.save();

        res.json({status : 200, response : true, message: 'Inspection report Added...' });


 

    }
    catch(err){
        console.log("Error in Signup User", err);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    }
}


const getInspectionreport = async(req, res)=>{
    try{
        return res.json(await inspectionReportModel.find());
    }
    catch(err){
        console.log("Error in Signup User", err);
        return res.json({status : 500, response : false, message: "Internal Server Error" });
    
    }
}

module.exports = {
    inspectionReport,
    getInspectionreport
}
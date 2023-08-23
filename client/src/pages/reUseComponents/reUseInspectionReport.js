import React, {useRef, useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import Webcam from 'react-webcam';
 
import server_access_point from '../components/config'
 


const ReUseInspectionReport = () => {

    const webcamRef =useRef(null); 

    const [capturedImage, Setcapturedimage]= useState(null);
    const [cameraOn, setCameraOn] = useState(false);
  
    const retakePhoto = () => {
      Setcapturedimage(null); 
           setCameraOn(true);
         };
      


    //form validaqtion using formik edit admin
    const formik = useFormik({
        initialValues: {
            vehicleName : "",
            vehicleNumber :"", 
            modelNumber : "", 
            contactNumber : "",
            readings : "",
            capturingVehicleImg : null,
            remarks : ""
            },

        // validationSchema:Yup.object().shape({

        //     // email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),

        //     //  mobileNO : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits'),

        //     password : Yup.string().min(6, 'Password must be at least six characters long.').max(16,'Maximum of sixteen character allowed!').required("Password Required"),

        //     }),

        onSubmit: async(values, {resetForm})=>{
            //console.log("inspection report", values);

            const formData = new FormData();
            formData.append('capturingVehicleImg', values.capturingVehicleImg);

            formData.append("vehicleName",values.vehicleName)
            formData.append("vehicleNumber",values.vehicleNumber)
            formData.append("modelNumber", values.modelNumber)
            formData.append("contactNumber",values.contactNumber)
            formData.append("readings", values.readings)
            formData.append("remarks", values.remarks)
           
            await axios.post(`${server_access_point}/inspectionreport`, formData).then(res=>
            {
                alert(res.data.message); 

                resetForm({values : ""});

                 //navigate to signin page
                // if(res.data.status === 200 && res.data.response === true){
                //     navigate("/signin");
                // }
            }).catch(err=>console.log(err));
            
        }               

    })
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formik.setFieldValue(name, value.trim());
      };


      const capturePhoto = () => {
        const photoSrc = webcamRef.current.getScreenshot();
        formik.setFieldValue('capturingVehicleImg', dataURLtoFile(photoSrc, 'photo.jpg'));
        Setcapturedimage(photoSrc);
        setCameraOn(false);
      };
    
      // Helper function to convert data URL to a File object
      const dataURLtoFile = (dataURL, fileName) => {  
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], fileName, { type: mime });
      };



  return (
    <div className="ltn__myaccount-tab-content-inner">
        <p>Inspection Report</p>

        <div className="ltn__form-box">

            <form onSubmit={formik.handleSubmit}>
                <div className="row mb-50">

                    <div className="col-md-6">
                        <label>Vehicle Name:</label>

                        <input type="text" name="vehicleName" placeholder="vehicle Name*" value={formik.values.vehicleName} onChange={handleInputChange}/>

                    </div>

                    <div className="col-md-6">
                        <label>Vehicle Number:</label>

                        <input type="text" name="vehicleNumber" placeholder="vehicle Number*"  value={formik.values.vehicleNumber} onChange={handleInputChange}/>
                
                    </div>

                    <div className="col-md-6">
                        <label>model Number:</label> 

                        <input type="text" name="modelNumber" placeholder="Model No..." value={formik.values.modelNumber} onChange={handleInputChange} />

                    </div>

                    <div className="col-md-6">
                        <label>Contact Number:</label> 

                        <input type="text" inputMode="numeric" pattern="[0-9]*" name="contactNumber" placeholder="Contact No..." value={formik.values.contactNumber} onChange={handleInputChange} />

                    </div>

                    <div className="col-md-6">
                        <label>Readings:</label>

                        <input type="text" name="readings" placeholder="readings*"  value={formik.values.readings} onChange={handleInputChange} />

                        {/* {(formik.touched.readings && formik.errors.readings) && <small style={{color:"red"}}>{formik.errors.readings}</small>} */}

                    </div>

                    <div className="col-md-6">
                        <label>Remarks:</label>

                        <input type="text" name="remarks" placeholder="remarks*"  value={formik.values.remarks} onChange={handleInputChange} />
 
                        {/* {(formik.touched.readings && formik.errors.readings) && <small style={{color:"red"}}>{formik.errors.readings}</small>} */}

                    </div>

                    <div className="col-md-6">
                        <label>Capturing Vehicle Img:</label> 

                        {/* <input type="file" name="capturingVehicleImg" placeholder="capturingVehicleImg" value={formik.values.capturingVehicleImg} onChange={formik.handleChange} /> */}

                        
                        {cameraOn ? 
                            <div>
                            <Webcam audio={false} ref={webcamRef} imageSmoothing = {true} screenshotFormat="image/jpeg"  style={{border:"2px solid black", borderRadius:"10px", width:"30rem"}}/>
                                {formik.touched.capturingVehicleImg && formik.errors.capturingVehicleImg && (
                                <div>{formik.errors.capturingVehicleImg}</div>
                                )}

                                <br />
                                <button type="button" onClick={capturePhoto} className='btn btn-primary'>
                                Capture Photo
                                </button>
                            </div>
                            :

                            <div className='container mt-5'>
                                {capturedImage ?
                                <>
                                    <h1>Preview Image</h1>
                                    <img src={capturedImage} alt="Captured"  style={{border:"2px solid black", borderRadius:"10px", width:"30rem"}}/>
                                    <br /> <br />

                                    <button onClick={retakePhoto} className='btn btn-danger'>Re Capture</button>
                                </>
                                :
                                <button onClick={retakePhoto} className='btn btn-danger'>Capture</button>
                                }                                  

                                   
                            </div>
                        }


                    </div>
                    
                </div>


                <div className="btn-wrapper">
                    <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ReUseInspectionReport
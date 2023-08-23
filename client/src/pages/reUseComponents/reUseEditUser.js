import React, {useEffect} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import {useLocation, Link } from 'react-router-dom'


import server_access_point from '../components/config'



const ReUseEditUser = () => {

    const location = useLocation();
    const data = location.state;

    useEffect(()=>{ 
        axios.get(`${server_access_point}/edituser`, {
            headers :{
                "x-access-token" : localStorage.getItem("token")
            }
        }).catch(err => console.log(err))  
    },[]) 
    
    
         //form validaqtion using formik edit mechanic


         const formikEditUser = useFormik({
            initialValues: {
                editUserName : data.userName,
                editUseremail : data.email,
                editUsermobileNO : data.mobileNO, 
                editUserpassword : ""
                },
    
            validationSchema:Yup.object().shape({
    
                editUserpassword : Yup.string().min(6, 'Password must be at least six characters long.').max(16,'Maximum of sixteen character allowed!').required("Password Required")
    
                }),
    
            onSubmit: async(values, {resetForm})=>{
    
                //console.log("addudser", values);
               
                await axios.put(`${server_access_point}/edituser/${data._id}`, values).then(res=>
                {
                    alert(res.data.message); 
    
                }).catch(err=>console.log(err));
    
                     resetForm({values : ""});
     
                
                
            }               
    
        })


  return (

          
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-4 pb-0">
                            <h5 className="modal-title" id="createMemberLabel">Edit Mechanic</h5>
                           
                        </div>
                        <div className="modal-body p-4">

                            <form autocomplete="on" id="memberlist-form" className="needs-validation" onSubmit={formikEditUser.handleSubmit} >
                                <div className="row">
                                    <div className="col-lg-12">
                                        
                                        <div className="mb-3 mt-4">
                                            <label htmlFor="teammembersName" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="teammembersName" placeholder="Enter name" name='editUserName' value={formikEditUser.values.editUserName} onChange={formikEditUser.handleChange} />
                                            <div className="invalid-feedback">Please Enter a member name.</div>
                                        </div>
                                        

                                        <div className="mb-3">
                                            <label htmlFor="teammembersEmail" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="teammembersEmail" placeholder="Enter email" name='editUseremail' value={formikEditUser.values.editUseremail}  readOnly/>
                                            <div className="invalid-feedback">Please Enter a member Email.</div>
                                        </div>
                                       

                                        <div className="mb-3">
                                            <label htmlFor="teammembersnumbrs" className="form-label">Mobile Number</label>
                                            <input type="text" className="form-control" id="teammembersnumbers" placeholder="Enter Mobile Number" name='editUsermobileNO' value={formikEditUser.values.editUsermobileNO} onChange={formikEditUser.handleChange} />
                                            <div className="invalid-feedback">Please Enter a member conform Password.</div>
                                        </div>
                                        

                                        <div className="mb-3">
                                            <label htmlFor="teammembersnumber" className="form-label">New Password</label>
                                            <input type="text" className="form-control" id="teammembersnumber" inputMode="numeric" pattern="[0-9]*" placeholder="Enter New Password" name='editUserpassword' value={formikEditUser.values.editUserpassword} onChange={formikEditUser.handleChange} />
                                            <div className="invalid-feedback">Please Enter a member Password.</div>
                                        </div>
                                        {(formikEditUser.touched.editUserpassword && formikEditUser.errors.editUserpassword) ? <small style={{color:"red"}}>{formikEditUser.errors.editUserpassword}</small> : null}

                                        
                                    
                                       
                                        <div className="hstack gap-2 justify-content-end">
                                            <Link to="/adminaccount" className="btn btn-light" >Back To Dashboard</Link>
                                            <button type="submit" className="btn btn-success" id="addNewMember">Update User</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                {/*end modal-content*/}
                </div>
      
           
             
  )
}

export default ReUseEditUser
import React, {useEffect, useState} from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import ReUseAdminAccount from '../reUseComponents/reUseAdminAccount';
import ReUseMechanicAccount from '../reUseComponents/reUseMechanicAccount';
import ReUseUserAccount from '../reUseComponents/reUseUserAccount';

import server_access_point from './config';



const Adminaccount = () => {

    const [resdata, setresdata] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{ 
        axios.get(`${server_access_point}/adminaccount`, {
            headers :{
                "x-access-token" : localStorage.getItem("token")
            }
        }).then(res => setresdata(res.data.data)).catch(err => console.log(err))  
    },[]) 
    

    if(!localStorage.getItem("token")){
        return <Navigate to="/signin" /> 
    }
  
    const signuphandle = ()=>{
        let userResponse = window.confirm("you want to logged out...")
        if(userResponse){
            //setToken(null)
            localStorage.clear();
            navigate("/signin");
        }
    }

  return (
    <div>
        
        {(resdata.userType === "admin") && <ReUseAdminAccount value1={resdata} value2  = {signuphandle} />}
        

        {(resdata.userType === "mechanic") && <ReUseMechanicAccount value1={resdata} value2  = {signuphandle} /> 
        }

        {(resdata.userType === "user") && <ReUseUserAccount value1={resdata} value2  = {signuphandle} />
        }

    </div>
  )
}

export default Adminaccount
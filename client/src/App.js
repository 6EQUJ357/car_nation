import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"


//import pages/Components
import Signin from './pages/components/signin'
import Signup from './pages/components/signup'

import Adminaccount from './pages/components/adminAccount'
import ReUseEditMechanic from './pages/reUseComponents/reUseEditMechanic'
import ReUseEditUser from './pages/reUseComponents/reUseEditUser'





//import pages/reUseComponents 
import ReUseHome from './pages/reUseComponents/reUseHome'
import ReUseAboutPage from './pages/reUseComponents/reUseAboutPage'

//services details
import ReUseService from './pages/reUseComponents/reUseService'
import ReUseExhaustSystemRepairs from './pages/reUseComponents/serviceDetails/reUSeExhaust-ststem-repairs'
import ReUseDiagnosticsTroubleShooting from "./pages/reUseComponents/serviceDetails/reUSeDiagnostics-troubleshooting"
import ReUseWheelTireServices from "./pages/reUseComponents/serviceDetails/reUseWheel-tire-services"
import ReUsetransmissionServices from './pages/reUseComponents/serviceDetails/reUSeTransmission-services'
import ReUseSuspensionSteering from "./pages/reUseComponents/serviceDetails/reUseSuspension-steering"
import ReUseHeatingCoolingSystem from './pages/reUseComponents/serviceDetails/reUseHeating-cooling-systems'
import ReUseElectricalSystemRepairs from './pages/reUseComponents/serviceDetails/reUseElectrical-system-repairs'
import ReUseEngineRepairs from './pages/reUseComponents/serviceDetails/reUseEngine-repairs'
import ReUseBreakServices from './pages/reUseComponents/serviceDetails/reUseBrake-services'
import ReUseGeneralMaintenance from './pages/reUseComponents/serviceDetails/reUseGeneral-maintenance'
// import ReUseServiceDetails from './pages/reUseComponents/reUseServiceDetails'

import ReUsePortfolio from './pages/reUseComponents/reUsePortfolio'
import ReUseTeam from './pages/reUseComponents/reUseTeam'
import ReUseMapLocation from './pages/reUseComponents/reUseMapLocation'
import ReUseContact from './pages/reUseComponents/reUseContact'
import ReUseAppointment from './pages/reUseComponents/reUseAppointment'
import ReUseWishList from './pages/reUseComponents/reUseWishList'
import ReUseCart from './pages/reUseComponents/reUseCart'
import ReUseShop from './pages/reUseComponents/reUseShop'
import ReUseCheckOut from './pages/reUseComponents/reUseCheckOut'
import ReUseProductDetails from './pages/reUseComponents/reUseProductDetails'

//price details
import ReUSePriceDetails from './pages/reUseComponents/reUSePrice-details'

//user page
// import ReUseMyAccount from './pages/reUseComponents/reUseMyAccount'


//demo test
import Test from './pages/reUseComponents/text/test'
import Abouttest from './pages/reUseComponents/text/abouttest'




const App = () => {


  return (
    <div>

        <BrowserRouter>
            <Routes>

            {/* import pages/Components */}
                <Route path='/signin' element={<Signin /> }/>
                <Route path='/signup' element={<Signup /> }/>
                
                <Route path='/adminaccount' element={<Adminaccount />}/>
                <Route path='/editmechanic' element={<ReUseEditMechanic />}/>
                <Route path='/edituser' element ={<ReUseEditUser />}/>

                
              {/* import pages/reUseComponents */}
                <Route path='/' element={<ReUseHome /> } />
                <Route path='/about' element={<ReUseAboutPage /> }/>

                {/* services details */}
                <Route path='/service' element={<ReUseService /> }/>
                <Route path='/exhaustsystemrepairs' element={<ReUseExhaustSystemRepairs />}/>
                <Route path='/diagnosticsTroubleShooting' element={<ReUseDiagnosticsTroubleShooting />}/>
                <Route path='/wheeltireservices' element={<ReUseWheelTireServices />}/>
                <Route path='/transmissionservices' element={<ReUsetransmissionServices />}/>
                <Route path='/suspensionsteering' element={<ReUseSuspensionSteering />}/>
                <Route path='/heatingcoolingsystem' element={<ReUseHeatingCoolingSystem />}/>
                <Route path='/electricalsystemrepairs' element={<ReUseElectricalSystemRepairs />}/>
                <Route path='/enginerepairs' element={<ReUseEngineRepairs />}/>
                <Route path='/breakingservices' element={<ReUseBreakServices />}/>
                <Route path='/generalmaintenance' element={<ReUseGeneralMaintenance />}/>


               {/*  <Route path='/servicedetails' element={<ReUseServiceDetails /> }/> */}
                <Route path='/portfolio' element={<ReUsePortfolio /> }/> 
                <Route path='/team' element={<ReUseTeam />}/>
                <Route path='/maplocation' element={<ReUseMapLocation />}/>
                <Route path='/contact' element={<ReUseContact />}/>
                <Route path='/appointment' element={<ReUseAppointment />}/>
                <Route path='/wishlist' element={<ReUseWishList />}/>
                <Route path='/cart' element={<ReUseCart />}/>
                <Route path='/shop' element={<ReUseShop />}/>
                <Route path='/checkout' element={<ReUseCheckOut />}/>
                <Route path='/productdetails' element={<ReUseProductDetails />}/>

                {/* price details */}
                <Route path='/pricedetails' element={<ReUSePriceDetails />}/>


                {/* user pages */}
                {/* <Route path='/myaccount' element={<ReUseMyAccount />}/> */}



                {/* test page */}
                <Route path='/test' element={<Test/>}></Route>
                <Route path='/abouttest' element = {<Abouttest />}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
 


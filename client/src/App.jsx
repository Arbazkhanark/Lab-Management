import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Labs from './pages/lab/Labs'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import EmailVerification from './components/EmailVerification'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userAuth } from './redux/action/userAction'
import axios from 'axios'
import ComplaintForm from './components/ComplaintForm'
import LabDescription from './components/LabDescription'
import AdminHome from './pages/admin/AdminHome'
import AdminLogin from './pages/admin/AdminLogin'
import Complains from './pages/admin/complaints/Complains'
import Users from './pages/admin/users/Users'
import Lab from './pages/admin/labs/Lab'
import { adminAuth } from './redux/action/adminAction'
import PageNotFound from './pages/admin/PageNotFound'
import PageNotAccess from './pages/PageNotAccess'
import Worker from './pages/admin/workers/Worker'
import UpdateProfile from './pages/user/UpdateProfile'
import ChangePassword from './pages/user/ChangePassword'
import ResetPassword from './pages/user/ResetPassword'
import Forget from './pages/user/Forget'
import UserAccess from './pages/user/UserAccess'


axios.defaults.withCredentials = true;

const App = () => {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(userAuth())
  },[dispatch])
  const isLogIn=useSelector((state)=>state.userReducers.user)
  console.log("User App",isLogIn);

  const isAccessAllowed=useSelector((state)=>state.userReducers.user?.adminAllowed
  );
  
  console.log("Acc",isAccessAllowed);

  useEffect(()=>{
    dispatch(adminAuth())
  },[dispatch])
  const admin=useSelector((state)=>state.adminReducers.admin)
  console.log(",ADMIN h",admin)

  return (
    <BrowserRouter>
    <ToastContainer />
    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/labs' element={isAccessAllowed ? <Labs /> :<UserAccess/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/account-verification' element={<EmailVerification/>} />
        <Route path="/complain" element={isAccessAllowed ? <ComplaintForm/>: <UserAccess/>} />
        <Route path='/labDescription' element={<LabDescription/>} />
        <Route path='/updateProfile' element={<UpdateProfile/>}/>
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/forgetPassword' element={<Forget/>}/>
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound/>}/>

        <Route path="/admin" element={admin?<AdminHome/>:<PageNotAccess/>}/>
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/complaints' element={admin ? <Complains/>: <PageNotAccess/>}/>
        <Route path='/admin/users' element={admin ? <Users />: <PageNotAccess/>} />
        <Route path='/admin/labs' element={admin ? <Lab />: <PageNotAccess/>}/>
        <Route path='/admin/unauthorized' element={<PageNotAccess/>}/>
        <Route path="/admin/workers" element={admin ? <Worker/>:<PageNotAccess/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  
  )
}

export default App
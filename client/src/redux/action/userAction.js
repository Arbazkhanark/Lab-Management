import axios from "axios"

export const USER_REGISTER_REQUEST="USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS="USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED="USER_REGISTER_FAILED";

export const VERIFY_OTP_REQUEST="VERIFY_OTP_REQUEST";
export const VERIFY_OTP_SUCCESS="VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_FAIL="VERIFY_OTP_FAIL"


export const USER_LOGIN_REQUEST="USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS="USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED="USER_LOGIN_FAILED";


export const USER_AUTHENTICATION_VERIFICATION_REQUEST="USER_AUTHENTICATION_VERIFICATION_REQUEST"
export const USER_AUTHENTICATION_VERIFICATION_SUCCESS="USER_AUTHENTICATION_VERIFICATION_SUCCESS";
export const USER_AUTHENTICATION_VERIFICATION_FAIL="USER_AUTHENTICATION_VERIFICATION_FAIL";


export const COMPLAIN_REGISTER_REQUEST="COMPLAIN_REGISTER_REQUEST";
export const COMPLAIN_REGISTER_SUCCESS="COMPLAIN_REGISTER_SUCCESS";
export const COMPLAIN_REGISTER_FAIL="COMPLAIN_REGISTER_FAIL";


export const GET_SINGLE_LAB_REQUEST="GET_SINGLE_LAB_REQUEST";
export const GET_SINGLE_LAB_SUCCESS="GET_SINGLE_LAB_SUCCESS";
export const GET_SINGLE_LAB_FAIL="GET_SINGLE_LAB_FAIL";


export const USER_LOGOUT_REQUEST="USER_LOGOUT_REQUEST";
export const USER_LOGOUT_SUCCESS="USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAIL="USER_LOGOUT_FAIL";


export const CONTACT_REQUEST="CONTACT_REQUEST";
export const CONTACT_SUCCESS="CONTACT_SUCCESS";
export const CONTACT_FAIL="CONTACT_FAIL";

export const UPDATE_PROFILE_REQUEST="UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS="UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAIL="UPDATE_PROFILE_FAIL";


export const CHANGE_PASSWORD_REQUEST="CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS="CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAIL="CHANGE_PASSWORD_FAIL";


export const FORGET_PASSWORD_REQUEST="FORGET_PASSWORD_REQUEST";
export const FORGET_PASSWORD_SUCCESS="FORGET_PASSWORD_SUCCESS";
export const FORGET_PASSWORD_FAIL="FORGET_PASSWORD_FAIL";

export const RESET_PASSWORD_REQUEST="RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS="RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL="RESET_PASSWORD_FAIL";

export const userRegisterationAction=(user,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:USER_REGISTER_REQUEST})
        const response=await axios.post("http://localhost:4000/register",user)
        console.log(response.data);
        if(response.data.success){
            dispatch({type:USER_REGISTER_SUCCESS,payload:response})
            navigate("/account-verification")
        }
    } catch (error) {
        console.log(error)
        dispatch({type:USER_REGISTER_FAILED,payload:error.response})
    }
}



export const verifyOtp=(data,navigate)=>async(dispatch)=>{

    try {
        dispatch({type:VERIFY_OTP_REQUEST})
        const response=await axios.post("http://localhost:4000/account-verification",{email:data.email,otp:parseInt(data.otp)});
        console.log(response);
        if(response.data.success){
            dispatch({type:VERIFY_OTP_SUCCESS,payload:response})
            navigate("/login");
        }
    } catch (error) {
        console.log(error);
        dispatch({type:VERIFY_OTP_FAIL,error:error.response.data.error})
    }
} 


export const logIn=(data,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const response=await axios.post("http://localhost:4000/login",data);
        console.log("login",response.data);
        if(response.data.success){
            navigate("/")
            dispatch({type:USER_LOGIN_SUCCESS,payload:response.data.login})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:USER_LOGIN_FAILED,payload:error.response.data.error})
    }
}


export const userAuth=()=>async(dispatch)=>{
    try {
        dispatch({type:USER_AUTHENTICATION_VERIFICATION_REQUEST})
        const response = await axios.get("http://localhost:4000/verifyingUser");
        console.log("Auth",response.data);
        if(response.data.success){
            dispatch({type:USER_AUTHENTICATION_VERIFICATION_SUCCESS,payload:response})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:USER_AUTHENTICATION_VERIFICATION_FAIL,payload:error.response.data.error})
    }
}


export const registerComplain=(complain)=>async(dispatch)=>{
    try {
        dispatch({type:COMPLAIN_REGISTER_REQUEST})
        const response=await axios.post("http://localhost:4000/register-complain",complain);
        console.log(response)
        if(response.data.success){
            dispatch({type:COMPLAIN_REGISTER_SUCCESS,payload:response})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:COMPLAIN_REGISTER_FAIL,payload:error.response.data.error})
    }
}



export const getSingleLab=(id,navigate)=>async(dispatch)=>{
    try{
        dispatch({type:GET_SINGLE_LAB_REQUEST});
        const response=await axios.get(`http://localhost:4000/singleLab/${id}`);
        if(response.data.success){
            dispatch({type:GET_SINGLE_LAB_SUCCESS,payload:response.data.lab})
            localStorage.setItem("single",response.data.lab._id)
            navigate("/labDescription")
        }
    }catch(error){
        console.log(error);
        dispatch({type:GET_SINGLE_LAB_FAIL,payload:error})
    }
}



export const contactUs=(data)=>async(dispatch)=>{
    try{
        dispatch({type:CONTACT_REQUEST});
        const response=await axios.post("http://localhost:4000/contactUs",data)
        console.log(response)
        if(response.data.success){
            dispatch({type:CONTACT_SUCCESS,payload:response})
        }
    }catch(error){
        console.log(error)
        dispatch({type:CONTACT_FAIL,payload:error.response.data.error})
    }
}


export const updateProfile=(data)=>async(dispatch)=>{
    try {
        dispatch({type:UPDATE_PROFILE_REQUEST})
        const response=await axios.post("http://localhost:4000/updateProfile",data);
        if(response.data.success){
            const response = await axios.get("http://localhost:4000/verifyingUser");
            console.log("Auth",response.data);
            if(response.data.success){
                dispatch({type:USER_AUTHENTICATION_VERIFICATION_SUCCESS,payload:response})
            }
            dispatch({type:UPDATE_PROFILE_SUCCESS,payload:response})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:UPDATE_PROFILE_FAIL,payload:error.response.data.error})
    }
}


export const  changePassword=(data)=>async(dispatch)=>{
    try {
        dispatch({type:CHANGE_PASSWORD_REQUEST})
        const response=await axios.put("http://localhost:4000/changePassword",data)
        if(response.data.success){
            dispatch({type:CHANGE_PASSWORD_SUCCESS,payload:response})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:CHANGE_PASSWORD_FAIL,payload:error.response.data.error})
    }
}

export const forgetPassword=(email)=>async(dispatch)=>{
    try{
        dispatch({type:FORGET_PASSWORD_REQUEST})
        const response=await axios.post("http://localhost:4000/forget-password",email);
        console.log(response)
        if(response.data.success){
            dispatch({type:FORGET_PASSWORD_SUCCESS,payload:response.data.message})
        }
    }catch(error){
        console.log(error);
        dispatch({type:FORGET_PASSWORD_FAIL,payload:error.response.data.error})
    }
}


export const resetPassword=(data)=>async(dispatch)=>{
    try{
        dispatch({type:RESET_PASSWORD_REQUEST})
        const response=await axios.post("http://localhost:4000/reset-password?token=",data)
        if(response.data.success){
            dispatch({type:RESET_PASSWORD_SUCCESS,payload:response.data})
        }
    }catch(error){
        console.log(error);
        dispatch({type:RESET_PASSWORD_FAIL,payload:error.response.data.error})
    }
}


export const logoutUser=()=>async(dispatch)=>{
    try {
        dispatch({type:USER_LOGOUT_REQUEST})
        const response=await axios.get("http://localhost:4000/logout");
        if(response.data.success){
            dispatch({type:USER_LOGIN_SUCCESS,payload:response})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:USER_LOGOUT_FAIL,payload:error.response.data.error})
    }
}
import { toast } from "react-toastify"
import { CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CONTACT_FAIL, CONTACT_REQUEST, CONTACT_SUCCESS, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS, GET_SINGLE_LAB_FAIL, GET_SINGLE_LAB_REQUEST, GET_SINGLE_LAB_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, USER_AUTHENTICATION_VERIFICATION_FAIL, USER_AUTHENTICATION_VERIFICATION_REQUEST, USER_AUTHENTICATION_VERIFICATION_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, VERIFY_OTP_FAIL, VERIFY_OTP_REQUEST, VERIFY_OTP_SUCCESS } from "../action/userAction"
import { UPDATE_COMPLAIN_STATUS_FAIL } from "../action/adminAction";

const initailState={
    user:null,
    singleLab:null,
    isLoading:false,
    error:"",
    success:""
}



export const userReducer=(state=initailState,action)=>{
    switch (action.type) {
        case USER_REGISTER_REQUEST:
        return { ...state, isLoading: true };
      case USER_REGISTER_SUCCESS:
        toast.success("OTP Sent to your mail successfully ...", {
          position: "bottom-right",
        });
        return { ...state, isLoading: false, success: action.payload };
        case USER_REGISTER_FAILED:
        toast.error(action.payload, {
            position: "bottom-right",
        });
        return { ...state, isLoading: true, error: action.payload };
        
      case VERIFY_OTP_REQUEST:
            return { ...state, isLoading: true };
      case VERIFY_OTP_SUCCESS:
        toast.success(action.payload, {
          position: "bottom-right",
        });
        return { ...state, isLoading: false };
      case VERIFY_OTP_FAIL:
        toast.error(action.payload, {
          position: "bottom-right",
        });
          return { ...state, isLoading: true, error: action.payload };
          
          case USER_LOGIN_REQUEST:
              return { ...state, isLoading: true };
              case USER_LOGIN_SUCCESS:
                toast.success("Log In Successfully", {
                  position: "bottom-right",
                });
        return {
          ...state,
          isLoading: false,
          user: action.payload.data.login,
          success: action.payload.data.login
        };
      case USER_LOGIN_FAILED:
        toast.error(action.payload, {
          position: "bottom-right",
        });
        return { ...state, isLoading: true, error: action.payload };

      case USER_AUTHENTICATION_VERIFICATION_REQUEST:
        return { ...state, isLoading: true };
      case USER_AUTHENTICATION_VERIFICATION_SUCCESS:
        return { ...state, isLoading: false, user: action.payload.data.user };
      case USER_AUTHENTICATION_VERIFICATION_FAIL:
        return { ...state, isLoading: true, error: action.payload };

      case GET_SINGLE_LAB_REQUEST:
        return {...state,isLoading:true}
      case GET_SINGLE_LAB_SUCCESS:
        return {...state,isLoading:false,singleLab:action.payload}
      case GET_SINGLE_LAB_FAIL:
        return {...state,isLoading:true,error:action.payload}

      case CONTACT_REQUEST:
        return {...state,isLoading:true};
      case CONTACT_SUCCESS:
        toast.success("Message Sent..", {
          position: "bottom-right",
        });
        return {...state,isLoading:false,success:action.payload}
      case CONTACT_FAIL:
        toast.error(action.payload, {
          position: "bottom-right",
        });
        return {...state,isLoading:true,error:action.payload}


      case UPDATE_PROFILE_REQUEST:
        return {...state,isLoading:true}
      case UPDATE_PROFILE_SUCCESS:
        toast.success("Profile Updated", {
          position: "bottom-right",
        });
        return {...state,isLoading:false,success:action.payload}
      case UPDATE_COMPLAIN_STATUS_FAIL:
        toast.error(action.payload, {
          position: "bottom-right",
        });
        return {...state,isLoading:true,error:action.payload}

      case CHANGE_PASSWORD_REQUEST:
        return {...state,isLoading:true}
      case CHANGE_PASSWORD_SUCCESS:
        toast.success("Password Updated", {
          position: "bottom-right",
        });
        return {...state,isLoading:false,success:action.payload}
      case CHANGE_PASSWORD_FAIL:
        toast.error(action.payload, {
          position: "bottom-right",
        });
        return {...state,isLoading:true,error:action.payload}


      case USER_LOGOUT_REQUEST:
        return {...state,isLoading:true}
      case USER_LOGOUT_SUCCESS:
        toast.success("Logout Successfully", {
          position: "bottom-right",
        });
        return {...state,isLoading:false,user:null,success:action.payload}
      case USER_LOGOUT_FAIL:
        toast.error(action.payload, {
          position: "bottom-right",
        });
        return {...state,isLoading:true,error:action.payload}

      case FORGET_PASSWORD_REQUEST:
        return {...state,isLoading:true}
      case FORGET_PASSWORD_SUCCESS:
        toast.success(action.payload, {
          position: "bottom-right",
        });
        return {...state,isLoading:false,success:action.payload}
      case FORGET_PASSWORD_FAIL:
        toast.error(action.payload, {
          position: "bottom-right",
        });
        return {...state,isLoading:true,error:action.payload}

      case RESET_PASSWORD_REQUEST:
        return {...state,isLoading:true}
      case RESET_PASSWORD_SUCCESS:
        toast.success(action.payload, {
          position: "bottom-right",
        });
        return {...state,isLoading:false,success:action.payload}
      case RESET_PASSWORD_FAIL:
        toast.error(action.payload, {
          position: "bottom-right",
        });
        return {...state,isLoading:true,error:action.payload}


      default:
        return state;
    }
}
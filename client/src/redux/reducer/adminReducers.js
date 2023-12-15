import { toast } from "react-toastify"
import { ADD_LAB_FAIL, ADD_LAB_REQUEST, ADD_LAB_SUCCESS, ADD_WORKER_FAIL, ADD_WORKER_REQUEST, ADD_WORKER_SUCCESS, ADMIN_AUTHENTICATION_VERIFICATION_FAIL, ADMIN_AUTHENTICATION_VERIFICATION_REQUEST, ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGIN_SUCCESS, ALLOW_ACCESS_TO_USER_FAIL, ALLOW_ACCESS_TO_USER_REQUEST, ALLOW_ACCESS_TO_USER_SUCCESS, ASSIGNED_COMPLAINT_FAIL, ASSIGNED_COMPLAINT_REQUEST, ASSIGNED_COMPLAINT_SUCCESS, DELETE_LAB_FAIL, DELETE_LAB_REQUEST, DELETE_LAB_SUCCESS, DELETE_WORKER_FAIL, DELETE_WORKER_REQUEST, DELETE_WORKER_SUCCESS, GET_ALL_COMPLAINS_FAIL, GET_ALL_COMPLAINS_REQUEST, GET_ALL_COMPLAINS_SUCCESS, GET_ALL_LABS_FAIL, GET_ALL_LABS_REQUEST, GET_ALL_LABS_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, GET_WORKERS_FAIL, GET_WORKERS_REQUEST, GET_WORKERS_SUCCESS, REPORT_USER_FAIL, REPORT_USER_REQUEST, REPORT_USER_SUCCESS, REQUEST_TO_LOGIN_ADMIN, UPDATE_COMPLAIN_STATUS_FAIL, UPDATE_COMPLAIN_STATUS_REQUEST, UPDATE_COMPLAIN_STATUS_SUCCESS, UPDATE_LAB_FAIL, UPDATE_LAB_REQUEST, UPDATE_LAB_SUCCESS, UPDATE_WORKER_FAIL, UPDATE_WORKER_REQUEST, UPDATE_WORKER_SUCCESS } from "../action/adminAction"
import { COMPLAIN_REGISTER_FAIL, COMPLAIN_REGISTER_REQUEST, COMPLAIN_REGISTER_SUCCESS } from "../action/userAction"

const initailState={
    admin:null,
    labs:[],
    users:[],
    workers:[],
    complains:[],
    isLoading:false,
    success:"",
    error:""
}


export const adminReducer=(state=initailState,action)=>{
    switch(action.type){
        case REQUEST_TO_LOGIN_ADMIN:
            return {...state,isLoading:true}
        case ADMIN_LOGIN_SUCCESS:
            toast.success("Log In Successfully",{
                position: "bottom-right",
              })
            return {...state,isLoading:false,admin:action.payload}
        case ADMIN_LOGIN_FAIL:
            return {...state,isLoading:true,error:action.payload}



        case ADMIN_AUTHENTICATION_VERIFICATION_REQUEST:
            return {...state,isLoading:true}
        case ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS:
            return {...state,admin:action.payload,isLoading:false}
        case ADMIN_AUTHENTICATION_VERIFICATION_FAIL:
            return {...state,isLoading:true,error:action.payload}
        
        case ADD_LAB_REQUEST:
            return {...state,isLoading:true}
        case ADD_LAB_SUCCESS:
            toast.success("Lab Added Successfully",{
                position: "bottom-right",
              })
            return {...state,isLoading:false,success:action.payload}
        case ADD_LAB_FAIL:
            return {...state,isLoading:true,error:action.payload}

        case GET_ALL_LABS_REQUEST:
            return {...state,isLoading:true}
        case GET_ALL_LABS_SUCCESS:
            return {...state,isLoading:false,labs:action.payload}
        case GET_ALL_LABS_FAIL:
            return {...state,isLoading:true,error:action.payload}

        case UPDATE_LAB_REQUEST:
            return {...state,isLoading:true}
        case UPDATE_LAB_SUCCESS:
            toast.success("Updated Successfully",{
                position: "bottom-right",
              })
            return {...state,isLoading:false,success:action.payload}
        case UPDATE_LAB_FAIL:
            return {...state,isLoading:true,error:action.payload}

        case DELETE_LAB_REQUEST:
            return {...state,isLoading:true}
        case DELETE_LAB_SUCCESS:
            toast.success("Deleted Successfully",{
                position: "bottom-right",
              },)
            return {...state,isLoading:false,success:action.payload}
        case DELETE_LAB_FAIL:
            return {...state,isLoading:true,error:action.payload}
        
        case GET_USER_REQUEST:
            return {...state,isLoading:true}
        case GET_USER_SUCCESS:
            return {...state,isLoading:false,users:action.payload}
        case GET_USER_FAIL:
            return {...state,isLoading:true,error:action.payload}

        case GET_ALL_COMPLAINS_REQUEST:
            return {...state,isLoading:true};
        case GET_ALL_COMPLAINS_SUCCESS:
            return {...state,isLoading:false,complains:action.payload}
        case GET_ALL_COMPLAINS_FAIL:
            return {...state,isLoading:true,error:action.payload}

        case UPDATE_COMPLAIN_STATUS_REQUEST:
            return {...state,isLoading:true}
        case UPDATE_COMPLAIN_STATUS_SUCCESS:
            toast.success("Status Updated",{
                position: "bottom-right",
              });
            return {...state,isLoading:false,success:action.payload}
        case UPDATE_COMPLAIN_STATUS_FAIL:
            toast.error(action.payload,{
                position: "bottom-right",
              });
            return {...state,isLoading:true,error:action.payload}


        case COMPLAIN_REGISTER_REQUEST:
            return {...state,isLoading:true}
        case COMPLAIN_REGISTER_SUCCESS:
            toast.success("Complaint Registered Successfully",{
                position: "bottom-right",
              });
            return {...state,isLaoding:false,success:action.payload}
        case COMPLAIN_REGISTER_FAIL:
            toast.error(action.payload,{
                position: "bottom-right",
              });
            return {...state,isLaoding:true,error:action.payload}

        case ADD_WORKER_REQUEST:
            return {...state,isLoading:true};
        case ADD_WORKER_SUCCESS:
            toast.success("Worker Added Successfully",{
                position: "bottom-right",
              });
              return {...state,isLoading:false,success:action.payload}
        case ADD_WORKER_FAIL:
            return {...state,isLoading:true,error:action.payload}


        case GET_WORKERS_REQUEST:
            return {...state,isLoading:true}
        case GET_WORKERS_SUCCESS:
            return {...state,isLoading:false,workers:action.payload}
        case GET_WORKERS_FAIL:
            return {...state,isLoading:true,error:action.payload}

            
        case DELETE_WORKER_REQUEST:
            return {...state,isLoading:true}
        case DELETE_WORKER_SUCCESS:
            toast.success("Deleted Successfully",{
                position: "bottom-right",
              },)
            return {...state,isLoading:false,success:action.payload}
        case DELETE_WORKER_FAIL:
            return {...state,isLoading:true,error:action.payload}

        case UPDATE_WORKER_REQUEST:
            return {...state,isLoading:true};
        case UPDATE_WORKER_SUCCESS:
            toast.success("Updated Successfully",{
                position: "bottom-right",
              },)
              return {...state,isLoading:false,success:action.payload}
        case UPDATE_WORKER_FAIL:
            return {...state,isLoading:true,error:action.payload}
        
        case ALLOW_ACCESS_TO_USER_REQUEST:
            return {...state,isLoading:true}
        case ALLOW_ACCESS_TO_USER_SUCCESS:
            toast.success("User Can Access Now",{
                position: "bottom-right",
              },)
            return{...state,success:action.payload,isLoading:false}
        case ALLOW_ACCESS_TO_USER_FAIL:
            toast.error(action.payload,{
                position: "bottom-right",
            },)
          return {...state,isLaoding:true,error:action.payload}


        case REPORT_USER_REQUEST:
            return {...state,isLoading:true}
        case REPORT_USER_SUCCESS:
            toast.success("User Can't Access Now",{
                position: "bottom-right",
              },)
            return{...state,success:action.payload,isLoading:false}
        case REPORT_USER_FAIL:
            toast.error(action.payload,{
                position: "bottom-right",
            },)
          return {...state,isLaoding:true,error:action.payload}

        case ASSIGNED_COMPLAINT_REQUEST:
            return {...state,isLoading:true}
        case ASSIGNED_COMPLAINT_SUCCESS:
            toast.success("COMPLAINT ASSIGNED",{
                position: "bottom-right",
              },)
              return {...state,isLoading:false,success:action.payload}
        case ASSIGNED_COMPLAINT_FAIL:
            toast.error(action.payload,{
                position: "bottom-right",
              },)
            return {...state,isLoading:true,error:action.payload}

        default:
            return state    
    }
}
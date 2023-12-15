import axios from "axios";

export const REQUEST_TO_LOGIN_ADMIN="REQUEST_TO_LOGIN_ADMIN";
export const ADMIN_LOGIN_SUCCESS="ADMIN_LOGIN_SUCCESS";
export const ADMIN_LOGIN_FAIL="ADMIN_LOGIN_FAIL";


export const ADMIN_AUTHENTICATION_VERIFICATION_REQUEST="ADMIN_AUTHENTICATION_VERIFICATION_REQUEST";
export const ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS="ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS";
export const ADMIN_AUTHENTICATION_VERIFICATION_FAIL="ADMIN_AUTHENTICATION_VERIFICATION_FAIL";

export const ADD_LAB_REQUEST="ADD_LAB_REQUEST";
export const ADD_LAB_SUCCESS="ADD_LAB_SUCCESS";
export const ADD_LAB_FAIL="ADD_LAB_FAIL";


export const GET_ALL_LABS_REQUEST="GET_ALL_LABS_REQUEST";
export const GET_ALL_LABS_SUCCESS="GET_ALL_LABS_SUCCESS";
export const GET_ALL_LABS_FAIL="GET_ALL_LABS_FAIL";


export const UPDATE_LAB_REQUEST="UPDATE_LAB_REQUEST";
export const UPDATE_LAB_SUCCESS="UPDATE_LAB_SUCCESS";
export const UPDATE_LAB_FAIL="UPDATE_LAB_FAIL";


export const DELETE_LAB_REQUEST="DELETE_LAB_REQUEST";
export const DELETE_LAB_SUCCESS="DELETE_LAB_SUCCESS";
export const DELETE_LAB_FAIL="DELETE_LAB_FAIL";


export const GET_USER_REQUEST="GET_USER_REQUEST";
export const GET_USER_SUCCESS="GET_USER_SUCCESS"
export const GET_USER_FAIL="GET_USER_FAIL";


export const GET_ALL_COMPLAINS_REQUEST="GET_ALL_COMPLAINS_REQUEST";
export const GET_ALL_COMPLAINS_SUCCESS="GET_ALL_COMPLAINS_SUCCESS";
export const GET_ALL_COMPLAINS_FAIL="GET_ALL_COMPLAINS_FAIL";


export const UPDATE_COMPLAIN_STATUS_REQUEST="UPDATE_COMPLAIN_STATUS_REQUEST";
export const UPDATE_COMPLAIN_STATUS_SUCCESS="UPDATE_COMPLAIN_STATUS_SUCCESS";
export const UPDATE_COMPLAIN_STATUS_FAIL="UPDATE_COMPLAIN_STATUS_FAIL";

export const GET_WORKERS_REQUEST="GET_WORKERS_REQUEST";
export const GET_WORKERS_SUCCESS="GET_WORKERS_SUCCESS";
export const GET_WORKERS_FAIL="GET_WORKERS_FAIL";


export const ADD_WORKER_REQUEST="ADD_WORKER_REQUEST";
export const ADD_WORKER_SUCCESS="ADD_WORKER_SUCCESS";
export const ADD_WORKER_FAIL="ADD_WORKER_FAIL";


export const DELETE_WORKER_REQUEST="DELETE_WORKER_REQUEST";
export const DELETE_WORKER_SUCCESS="DELETE_WORKER_SUCCESS";
export const DELETE_WORKER_FAIL="DELETE_WORKER_FAIL";


export const UPDATE_WORKER_REQUEST="UPDATE_WORKER_REQUEST";
export const UPDATE_WORKER_SUCCESS="UPDATE_WORKER_SUCCESS";
export const UPDATE_WORKER_FAIL="UPDATE_WORKER_FAIL";


export const ALLOW_ACCESS_TO_USER_REQUEST="ALLOW_ACCESS_TO_USER_REQUEST";
export const ALLOW_ACCESS_TO_USER_SUCCESS="ALLOW_ACCESS_TO_USER_SUCCESS";
export const ALLOW_ACCESS_TO_USER_FAIL="ALLOW_ACCESS_TO_USER_FAIL";

export const REPORT_USER_REQUEST="REPORT_USER_REQUEST";
export const REPORT_USER_SUCCESS="REPORT_USER_SUCCESS";
export const REPORT_USER_FAIL="REPORT_USER_FAIL";

export const ASSIGNED_COMPLAINT_REQUEST="ASSIGNED_COMPLAINT_REQUEST";
export const ASSIGNED_COMPLAINT_SUCCESS="ASSIGNED_COMPLAINT_SUCCESS";
export const ASSIGNED_COMPLAINT_FAIL="ASSIGNED_COMPLAINT_FAIL";

export const loginAdmin=(data,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:REQUEST_TO_LOGIN_ADMIN})
        const response=await axios.post("http://localhost:4000/admin/login",data);
        console.log(response)
        if(response.data.success){
            dispatch({type:ADMIN_LOGIN_SUCCESS,payload:response.data.logIn})
            navigate("/admin")
        }
    } catch (error) {
        console.log(error);
        dispatch({type:ADMIN_LOGIN_FAIL,error:error})
    }
}


export const adminAuth=()=>async(dispatch)=>{
    try{
        dispatch({type:ADMIN_AUTHENTICATION_VERIFICATION_REQUEST})
        const response=await axios.get("http://localhost:4000/adminAuth")
        if(response.data.success){
            dispatch({type:ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS,payload:response.data})
        }
    }catch(error){
        console.log(error);
        dispatch({type:ADMIN_AUTHENTICATION_VERIFICATION_FAIL,error})
    }
}


export const addLab=(lab)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_LAB_REQUEST})
        const response=await axios.post("http://localhost:4000/add-lab",lab);
        console.log(response)
        if(response.data.success){
            const response=await axios.get("http://localhost:4000/all_Labs");
            if(response.data.success){
                dispatch({type:GET_ALL_LABS_SUCCESS,payload:response.data.allLabs})
            }
            dispatch({type:ADD_LAB_SUCCESS,payload:response.data})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:ADD_LAB_FAIL,payload:error})
    }
}

export const getAllLabs=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_LABS_REQUEST})
        const response=await axios.get("http://localhost:4000/all_Labs");
        if(response.data.success){
            dispatch({type:GET_ALL_LABS_SUCCESS,payload:response.data.allLabs})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:GET_ALL_LABS_FAIL})
    }
}


export const updateLabs=(id,lab)=>async(dispatch)=>{
    try {
        dispatch({type:UPDATE_LAB_REQUEST})
        const response=await axios.put(`http://localhost:4000/updateLab/${id}`,lab);
        console.log("UPDATE",response);
        if(response.data.success){
            const response=await axios.get("http://localhost:4000/all_Labs");
            if(response.data.success){
                dispatch({type:GET_ALL_LABS_SUCCESS,payload:response.data.allLabs})
            }
            dispatch({type:UPDATE_LAB_SUCCESS,payload:response})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:UPDATE_LAB_FAIL,payload:error})
    }
}


export const deleteLab=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_LAB_REQUEST})
        const response=await axios.delete(`http://localhost:4000/deleteLab/${id}`)
        console.log("DELETED",response)
        if(response.data.success){
            const response=await axios.get("http://localhost:4000/all_Labs");
            if(response.data.success){
                dispatch({type:GET_ALL_LABS_SUCCESS,payload:response.data.allLabs})
            }
            dispatch({type:DELETE_LAB_SUCCESS,payload:response.data})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:DELETE_LAB_FAIL,payload:error})
    }
}


export const getAllUsers=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_USER_REQUEST})
        const response=await axios.get("http://localhost:4000/allUsers")
        console.log("ALL USER",response)
        if(response.data.success){
            dispatch({type:GET_USER_SUCCESS,payload:response.data.users})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:GET_USER_FAIL,payload:error.message})
    }
}


export const giveAccessToUser=(id)=>async(dispatch)=>{
    const data={id}
    try{
        dispatch({type:ALLOW_ACCESS_TO_USER_REQUEST})
        const response=await axios.post("http://localhost:4000/userAccess",data);
        if(response.data.success){
            const response=await axios.get("http://localhost:4000/allUsers")
            if(response.data.success){
                dispatch({type:GET_USER_SUCCESS,payload:response.data.users})
            }
            dispatch({type:ALLOW_ACCESS_TO_USER_SUCCESS,payload:response.data})
        }
    }catch(error){
        console.log(error);
        dispatch({type:ALLOW_ACCESS_TO_USER_FAIL,payload:error.response.data.error})
    }
}



export const reportUser=(id)=>async(dispatch)=>{
    const data={id}
    try{
        dispatch({type:REPORT_USER_REQUEST})
        const response=await axios.post("http://localhost:4000/userReport",data);
        console.log(response)
        if(response.data.success){
            const response=await axios.get("http://localhost:4000/allUsers")
            if(response.data.success){
                dispatch({type:GET_USER_SUCCESS,payload:response.data.users})
            }
            dispatch({type:REPORT_USER_SUCCESS,payload:response.data})
        }
    }catch(error){
        console.log(error);
        dispatch({type:REPORT_USER_FAIL,payload:error.response.data.error})
    }
}



export const getComplains=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_COMPLAINS_REQUEST})
        const response=await axios.get("http://localhost:4000/admin/allComplains");
        console.log(response);
        if(response.data.success){
            dispatch({type:GET_ALL_COMPLAINS_SUCCESS,payload:response.data.complains})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:GET_ALL_COMPLAINS_FAIL,payload:error})
    }
}

export const assignedComplaint=(email,id)=>async(dispatch)=>{
    const data={email,complainId:id}
    try{
        dispatch({type:ASSIGNED_COMPLAINT_REQUEST})
        const response=await axios.post("http://localhost:4000/assignedWork",data)
        if(response.data.success){
            dispatch({type:ASSIGNED_COMPLAINT_SUCCESS,payload:response})
        }
    }catch(error){
        console.log(error)
        dispatch({type:ASSIGNED_COMPLAINT_FAIL,payload:error.response.data.error})
    }
}




export const updateComplainStatus=(id,newStatus)=>async(dispatch)=>{
    console.log("red",newStatus)
    const status={newStatus}
    try {
        dispatch({type:UPDATE_COMPLAIN_STATUS_REQUEST})
        const response=await axios.post(`http://localhost:4000/admin/complaintStatus/${id}`,status)
        console.log(response)
        if(response.data.success){
            // const response=await axios.get("http://localhost:4000/admin/allComplains");
            // console.log(response);
            // if(response.data.success){
            //     dispatch({type:GET_ALL_COMPLAINS_SUCCESS,payload:response.data.complains})
            // }
            dispatch({type:UPDATE_COMPLAIN_STATUS_SUCCESS,payload:response.data})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:UPDATE_COMPLAIN_STATUS_FAIL,payload:error.response.data.error})
    }

}


export const addWorkers=(worker)=>async(dispatch)=>{
    try{
        dispatch({type:ADD_WORKER_REQUEST})
        const response=await axios.post("http://localhost:4000/addWorker",worker)
        if(response.data.success){
            dispatch({type:GET_WORKERS_REQUEST})
            const response=await axios.get("http://localhost:4000/allWorkers");
            if(response.data.success){
                dispatch({type:GET_WORKERS_SUCCESS,payload:response.data.workers})
            }
            dispatch({type:ADD_WORKER_SUCCESS,payload:response.data})
        }
    }catch(error){
        console.log(error)
        dispatch({type:ADD_WORKER_FAIL,error:error})
    }
}

export const getWorkers=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_WORKERS_REQUEST})
        const response=await axios.get("http://localhost:4000/allWorkers");
        if(response.data.success){
            dispatch({type:GET_WORKERS_SUCCESS,payload:response.data.workers})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:GET_WORKERS_FAIL,payload:error})
    }
} 


export const updateWorker=(id,data)=>async(dispatch)=>{
    console.log("ID",id)
    try {
        dispatch({type:UPDATE_WORKER_REQUEST});
        const response=await axios.put(`http://localhost:4000/deleteWorker/${id}`,data)
        if(response.data.success){
            const response=await axios.get("http://localhost:4000/allWorkers");
            if(response.data.success){
                dispatch({type:GET_WORKERS_SUCCESS,payload:response.data.workers})
            }
            dispatch({type:UPDATE_WORKER_SUCCESS,payload:response.data})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:UPDATE_WORKER_FAIL,payload:error})
    }
}



export const deleteWorker =(id)=>async(dispatch)=>{
    try{
        dispatch({type:DELETE_LAB_REQUEST})
        const response=await axios.delete(`http://localhost:4000/deleteWorker/${id}`)
        if(response.data.success){
            const response=await axios.get("http://localhost:4000/allWorkers");
            if(response.data.success){
                dispatch({type:GET_WORKERS_SUCCESS,payload:response.data.workers})
            }
            dispatch({type:DELETE_WORKER_SUCCESS,payload:response.data})
        }
    }catch(error){
        console.log(error);
        dispatch({type:DELETE_WORKER_FAIL,payload:error})
    }
}


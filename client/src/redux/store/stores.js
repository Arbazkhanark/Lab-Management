import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "../reducer/userReducers";
import { adminReducer } from "../reducer/adminReducers";


export const myStore=configureStore({
    reducer:{
        userReducers:userReducer,
        adminReducers:adminReducer
    }
})
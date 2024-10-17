import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        
        login:(state,action)=>{
            state.status =true;
            state.userData = action.payload.userData
        },

        logout:(state)=>{
            state.status = false,
            state.userData = null;
        }

    }
})


export const {login,logout} = authSlice.actions;   
// action in above line is from in reducer login and logout are called actions

export default authSlice.reducer


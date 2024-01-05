import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action
// string => action type
// pending, resolve, reject, I will get them from here
export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users/").then(response=>response.data);
})

// step 1: initial state
const initialState = {
    loading: false,
    users: [],
    error: ''
}
// change state 
// step 2: create a slice ====> action, reducers
// pending, resolve, reject handle
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder=>{
        builder.addCase(fetchUsers.pending, state=>{
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading = false;
            state.users =action.payload; //response
            state.error = "";
        })
        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.loading = false;
            state.users = [];
            state.error = action.error.message;

        })
    }
})

export default userSlice.reducer
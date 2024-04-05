import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    code: null, // Initial value for code
    accessToken: null // Initial value for access token
  };

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setCode:(state , action) => {
            console.log("Payload received in setCode reducer:", action.payload);
            state.code = action.payload; // update the code in the store
        },
        setAccessToken:(state , action) => {
            console.log("Payload received in setAccessToken reducer:", action.payload);
            state.accessToken = action.payload  // Update the access token in the store
            localStorage.setItem('accessToken' , action.payload); // Store access token in local storage
        }
    }
})

export const {setAccessToken , setCode } = authSlice.actions

export default authSlice.reducer;
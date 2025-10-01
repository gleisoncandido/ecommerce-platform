import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info) =>{
        console.log(info)
    
        try {
            
        } catch (error) {
            
        }
    }
)

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage:'Ola',
        errorMessage:'',
        loader: false,
        userInfo:''
    },
    reducers:{

    },
    extraReducers: () => {

    }
})

export default authReducer.reducer;

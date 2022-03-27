import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'

export interface User{
  userInfo:{
    _id:string
    name:string;
    phone:string;
    email:string;
    password:string;    
  }    
  status: 'idle' | 'loading' | 'failed';
                                                

}

// export interface userState{
//     users:Array<user>;
//     status: 'idle' | 'loading' | 'failed';

// }
const initialState: User = {
    userInfo:{
      _id:'',
      name:'',
      phone:'',
      email:'',
      password:'' , 
    }  , 
    status: 'idle'
  }

  export const fetchUser = createAsyncThunk(
    'user/fetchUsers',
    async (obj:any ) => {
      const {email,password}=obj;
      try {
        const response = await axios.post('/user/login',{"email":email,"password":password})
        const data = response.data
        return data
  
      }
      catch (err: any) {
     console.log(err.message)
      }
  
    }
  );
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
     
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUser.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          if (action.payload.ok == true) {
          state.status = 'idle';
          state.userInfo = action.payload.user;
          }
         
        })
        
    }
  });
export const getUser = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'

export interface user{
    name:string;
    phone:string;
    location:string;

}

export interface userState{
    users:Array<user>;
    status: 'idle' | 'loading' | 'failed';

}
const initialState: userState = {
    users: [],
    status: 'idle'
  }

  export const getUserAsync = createAsyncThunk(
    'user/fetshUsers',
    async (_, thunkApi) => {
      try {
        const response = await axios.get('http://localhost:3004/userInfo')
        const data = response.data
        return data
  
      }
      catch (err: any) {
        thunkApi.rejectWithValue(err.response.data)
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
        .addCase(getUserAsync.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(getUserAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.users = action.payload;
        })
        
    }
  });
export const selectorders = (state: RootState) => state.user;

export default userSlice.reducer;
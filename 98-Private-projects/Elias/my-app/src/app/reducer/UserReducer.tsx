import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import axios from 'axios';



export interface UserInfo {
  userInfo: {
    Email: string;
    Fname: string;
    Lname: string
  }
  Islogin: boolean;
  status: 'idle' | 'loading' | 'failed';

}

const initialState: UserInfo = {
  userInfo: {
    Email: "",
    Fname: "",
    Lname: "",
  },
  Islogin: false,
  status: 'idle'
};

export const getUserInfoAsync = createAsyncThunk(
  'user/GetUserInfo',
  async (_, thunkAPI) => {
    try {
      console.log("try");
      const response = await axios.get('http://localhost:3004/Users/1')
      const data: any = response.data
      console.log(data);
      return data
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.response.data)
    }

  }
);


export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    // login :(state,action)=>{
    //   state.userInfo = action.payload;
    // }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo = action.payload;
      });
  },
});


//export const{login} =UserSlice.actions;
//export const{login} =UserSlice.actions;
//export const{getUserInfoAsync} =UserSlice.caseReducers;

export const GetUserinfo = (state: RootState) => state.User.userInfo;
export default UserSlice.reducer;

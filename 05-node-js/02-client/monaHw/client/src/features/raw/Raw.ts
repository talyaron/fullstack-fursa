import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'

interface Raw{
    name:string;
    imgurl:string;
    pricePerMeter:number;
}
export interface rawState{
    raws:Array<Raw>;
    status: 'idle' | 'loading' | 'failed';

}
const initialState: rawState = {
    raws: [],
    status: 'idle'
  }
  export const getRawAsync = createAsyncThunk(
    'raw/fetshRaws',
    async (_, thunkApi) => {
      try {
        const response = await axios.get('/get-raws')
        const data = response.data
        return data
  
      }
      catch (err: any) {
        thunkApi.rejectWithValue(err.response.data)
      }
  
    }
  );
  export const rawSlice = createSlice({
    name: 'raw',
    initialState,
    reducers: {
     
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(getRawAsync.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(getRawAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.raws = action.payload;
        })
        
    }
  });
export const selectRow = (state: RootState) => state.raw;

export default rawSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'

interface Raw{
    name:string;
    width:number;
    thick:number;
    lengths:Array<Number>;
    imageUrl:string;
    pricePerMeter:number;
    amount:number;
}
export interface rawState{
    raws:Array<Raw>;
    rawsBynName:string;
    status: 'idle' | 'loading' | 'failed';

}
const initialState: rawState = {
    raws: [],
    rawsBynName:'',
    status: 'idle'
  }
  export const getRawAsync = createAsyncThunk(
    'raw/fetshRaws',
    async (_, thunkApi) => {
      try {
        const response = await axios.get('/raw/get-Raw-Material')
        const data = response.data
        return data
  
      }
      catch (err: any) {
        thunkApi.rejectWithValue(err.response.data)
      }
  
    }
  );
  export const getRawByName= createAsyncThunk(
    'rawbyname/fetshRawsByName',
    async (obj:any) => {
      try {
        const {name}=obj;
        const response = await axios.post('/raw/get-Raw-Material-ByName',{name:name})
        const data = response.data
        return data
  
      }
      catch (err: any) {
        console.log(err.message)
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
        .addCase(getRawByName.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(getRawByName.fulfilled, (state, action) => {
          state.status = 'idle';
          state.raws = action.payload;
        })
        
    }
  });
export const selectRow = (state: RootState) => state.raw;
export const selectRawByName = (state: RootState) => state.raw.rawsBynName;

export default rawSlice.reducer;

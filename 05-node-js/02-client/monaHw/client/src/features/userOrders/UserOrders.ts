import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'

interface UserOrders{
    _id:string
    date:Date,
    paymentMethod:string,
    orderCollection:string,
    orderStatus:string,
    order:Array<any>
   
}

export interface UserOrdersState{
    orders:Array<UserOrders>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:UserOrdersState={
    orders:[],
    status:'idle'
}

export const fetchUserOrders = createAsyncThunk(
    'orders/fetchuserorders',
    async (_, thunkApi) => {
      try {
          
        const response = await axios.get('/order/get-checkout-orders')
        const data = response.data
        return data
  
      }
      catch (err: any) {
        thunkApi.rejectWithValue(err.response.data)
      }
  
    }
  );
  export const getAllCheckOutOrders = createAsyncThunk(
    'checkoutorders/fetchcheckoutorders',
    async (_, thunkApi) => {
      try {
          
        const response = await axios.get('/order/get-all-checkout-orders')
        const data = response.data
        return data
  
      }
      catch (err: any) {
        thunkApi.rejectWithValue(err.response.data)
      }
  
    }
  );
  export const userOrdersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
     
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserOrders.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(fetchUserOrders.fulfilled, (state, action) => {
          state.status = 'idle';
          state.orders = action.payload;
        })
        .addCase(getAllCheckOutOrders.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(getAllCheckOutOrders.fulfilled, (state, action) => {
          state.status = 'idle';
          state.orders = action.payload;
        })
        
    }
  });
export const userOrders = (state: RootState) => state.userOrders;

export default userOrdersSlice.reducer;

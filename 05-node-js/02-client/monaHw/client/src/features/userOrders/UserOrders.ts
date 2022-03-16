import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'

interface UserOrders{
    _id:string
    date:Date,
    cash:boolean,
    creditCard:boolean,
    delivery:boolean,
    pickUp:boolean,
}

export interface UserOrdersStae{
    orders:Array<UserOrders>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:UserOrdersStae={
    orders:[],
    status:'idle'
}

export const fetchUserOrders = createAsyncThunk(
    'orders/fetchuserorders',
    async (obj:any, thunkApi) => {
      try {
          const {userId}=obj
        const response = await axios.post('/order/get-checkout-orders',{userId:userId})
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
        
    }
  });
export const userOrders = (state: RootState) => state.userOrders;

export default userOrdersSlice.reducer;

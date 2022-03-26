import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'
export interface order {
  _id:string;
  woodName: string;
  woodlength: number;
  amount: number;
  price:number;
  color?:string;
  width?:number;
  thick?:number;
  doorType?:string;
  details?:string

}
export interface CartState {
  orders: Array<order>;
  status: 'idle' | 'loading' | 'failed';


}


const initialState: CartState = {
  orders: [],
  status: 'idle'
}

export const getCartAsync = createAsyncThunk(
  'order/fetshOrders',
  async (_, thunkApi) => {
    
    try {
      const response = await axios.get('/order/get-user-order')
      const data = response.data
      return data

    }
    catch (err: any) {
      thunkApi.rejectWithValue(err.response.data)
    }

  }
);
export const deleteCartAsync = createAsyncThunk(
  'deletrorder/deleteOrders',
  async (_, thunkApi) => {
    
    try {
      const response = await axios.post('/order/delete-all-user-orders')
      const data = response.data
      return data

    }
    catch (err: any) {
      thunkApi.rejectWithValue(err.response.data)
    }

  }
);

export const cartSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    update: (state, action) => {
      state.orders = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders = action.payload;
      })
      .addCase(deleteCartAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders = action.payload;
      })
      
      
  }

});

export const { update } = cartSlice.actions;
export const selectorders = (state: RootState) => state.cart;

export default cartSlice.reducer;

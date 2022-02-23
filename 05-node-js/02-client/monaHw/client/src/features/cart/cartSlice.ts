import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CartState {
    orders: Array<any>;
}


const initialState : CartState = {
    orders:[]
}


export const cartSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    update: (state, action) => {
      state.orders = action.payload;
    }
}
});

export const { update  } = cartSlice.actions;
export const selectorders = (state: RootState) => state.cart.orders;

export default cartSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CartState {
    text: string;
    img: string;
}


const initialState : CartState = {
    img : '',
    text : 'text',
}


export const cartSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    update: (state, action) => {
      state.text = action.payload;
    }
}
});

export const { update  } = cartSlice.actions;
export const selectText = (state: RootState) => state.text.text;

export default cartSlice.reducer;

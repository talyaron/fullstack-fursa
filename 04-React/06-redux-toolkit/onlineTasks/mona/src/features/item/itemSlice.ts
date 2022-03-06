import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface product{
    title:string;
    price:number;
    image:string;
}
const initialState:product={
    title:"",
    price:0,
    image:""


}
export const getProductAsync = createAsyncThunk(
    'text/fetchJoke',
    async () => {
      const response:string = await getProduct();
      return response;
    }
  );
  export const itemSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
      update: (state, action) => {
        state.title = action.payload.title;
        state.price=action.payload.price;
        state.image=action.payload.image;
      }
    },
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state) => {
        // state.status = 'loading';
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.title = action.payload;
        state.price = action.payload;
        state.image = action.payload;

      });
  },
});
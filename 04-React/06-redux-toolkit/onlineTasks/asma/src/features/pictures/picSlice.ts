import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios"

/*
export interface CounterState {
  pic: string;
  text:string;
 
}*/

export interface product{
  title:string;
  image:string;
  price:number;

}
export interface productsArr{
  products:Array<product>;
  status: 'idle' | 'loading' | 'failed';

}


const initialState:productsArr  = {
  products :[],
  status:'idle',
};

export const getProductsAsync = createAsyncThunk(
  'products/fetchProduct',
  async (_,thunkAPI) => {
    try {
     const data = await axios.get('https://fakestoreapi.com/products/')
     .then((response)=>response.data)
     return data;

    } catch (error) {
       thunkAPI.rejectWithValue(error)
    }
  }
);

export const picSlice = createSlice({
  name: 'selectedPic',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';

        state.products = action.payload;
        console.log(state.products);
      });
  },
});

/*
export const { update ,updateText } = picSlice.actions;
export const selectPic = (state: RootState) => state.selectedPic.pic;
export const selectText = (state: RootState) => state.selectedPic.text;*/
export default picSlice.reducer;
export const selectProducts = (state: RootState) => state.selectedPic.products;


import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'
 interface product{
    name:string,
    price:string,
    type:string

}
export interface productState{
    productArray:Array<product>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:productState={
    productArray:[],
    status:'idle'
}

  export const getProductByTypeAsync = createAsyncThunk(
    'productType/fetshProductsType',
    async (type:string) => {
      try {
        const response = await axios.post('/product/get-products-by-type',{type:type})
        const data = response.data
        return data
  
      }
      catch (err: any) {
        console.log(err.message)
         }
  
    }
  );
  export const relatedproductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
     
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProductByTypeAsync.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(getProductByTypeAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.productArray = action.payload;
        })
       
        
    }
  });
export const getRelatedProduct = (state: RootState) => state.relatedProduct;

export default relatedproductSlice.reducer;



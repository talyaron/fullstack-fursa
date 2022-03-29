import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'
 interface product{
    name:string,
    price:number,
    type:string,
    amount:number

}
export interface productState{
    productArray:Array<product>;
    allProducts:Array<product>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:productState={
    productArray:[],
    allProducts:[],
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
  export const getProductsAsync = createAsyncThunk(
    'allProducts/fetshAllProducts',
    async (_,thunkApi) => {
      try {
        const response = await axios.get('/product/get-all-RelatedProducts')
        const data = response.data
        return data
  
      }
      catch (err: any) {
        thunkApi.rejectWithValue(err.response.data)
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
        .addCase(getProductsAsync.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(getProductsAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.allProducts = action.payload;
        })
        
    }
  });
export const getRelatedProduct = (state: RootState) => state.relatedProduct;
export const getAllProducts = (state: RootState) => state.relatedProduct.allProducts;

export default relatedproductSlice.reducer;



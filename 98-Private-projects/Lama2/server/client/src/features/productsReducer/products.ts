import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import internal from 'stream';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios";

interface Product {
    id: number;
    title: string;
    img: string;
    price: number;
}

interface Products {
    arrProducts: Array<Product>,
    status: 'idle' | 'loading' | 'failed';

}

const initialState: Products = {
    arrProducts: [],
    status: 'idle',
};

export const getProductAsync = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/')
            const data = response.data
            return data;

        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)

        }

    }
);

export const ProductsReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProductAsync.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(getProductAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrProducts = action.payload;
            })
            .addCase(getProductAsync.rejected, (state, action) => {
                state.status = 'failed';
               // state.arrProducrs = action.payload;
            })
    }

});

export const selectProducts=(state:RootState)=>state.products

export default ProductsReducer.reducer
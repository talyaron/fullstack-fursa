import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getProduct } from './productApi';

export interface productInfo{
    title : string;
    description : string;
    image : string;
}

const initialState : productInfo={
    title : '',
    description : '',
    image : ''
}

export const getProductAsync = createAsyncThunk(
    'product',
    async() => {
        const product:any = await getProduct();
        return product;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {
        builder
            .addCase(getProductAsync.fulfilled, (state, action) => {
                state.title = action.payload.title;
                state.description = action.payload.description;
                state.image = action.payload.image;
            });
    },
});

export const selectProduct = (state:RootState) => state.product;

export default productSlice.reducer;
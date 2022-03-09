import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios';

export interface ProductState {
    image: string;
    title: string;
    price: number;
    description: string;
}

export interface ShopState {
    value: [ProductState];
    status?: 'idle' | 'loading' | 'failed';
}

const initialState: ShopState = {
    value: [{
        image: "",
        title: "",
        price: 0,
        description: ""
    }]
    ,
    status: 'idle',
};

export const ShopFetchAsync = createAsyncThunk(
    'shop/fetchAllShop',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/')
            const data = await response.data;
            console.log("response", data)
            return data;

        } catch (e: any) {
            console.log("Error", e.response.data)
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

export const ShopReducer = createSlice({
    name: 'FetchShop',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ShopFetchAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(ShopFetchAsync.fulfilled, (state, action) => {
                state.value = action.payload;
                state.status = "idle";
            })
            .addCase(ShopFetchAsync.rejected, (state) => {
                state.status = "failed";
            })
    }
});


export const SelectShop = (state: RootState) => state.shop;

export default ShopReducer.reducer;

import { RootState, AppThunk } from '../../app/store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProduct } from './productAPi';

interface cardState {
    img: string;
    text: string;
    input: string;
    status: 'idle' | 'loading' | 'failed';
    product: product;
}
interface product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rating: number, count: number }

}

const initialState: cardState = {
    img: "",
    text: "nothing yet",
    input: "",
    status: 'idle',
    product: {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: { rating: 0, count: 0 }
    }
};
export const getProductAsync = createAsyncThunk(
    'getProduct',
    async () => {
        const response: product = await getProduct();
        return response;
    }
);


export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        update: (state, action) => {
            state.img = action.payload.img;
            state.text = action.payload.text
        },
        updateInput: (state, action) => {
            state.input = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.product = action.payload;
            });
    },
})

export const { update, updateInput } = cardSlice.actions
export const selectCard = (state: RootState) => state.card
export const selectText = (state: RootState) => state.card.product
export default cardSlice.reducer;
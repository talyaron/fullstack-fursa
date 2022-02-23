import { RootState, AppThunk } from '../../app/store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


interface cardState {
    img: string;
    text: string;
    input: string;
}

const initialState: cardState = {
    img: "",
    text: "nothing yet",
    input: "",
};


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
    }
})

export const { update, updateInput } = cardSlice.actions
export const selectCard = (state: RootState) => state.card
export const selectText = (state: RootState) => state.card.input
export default cardSlice.reducer;
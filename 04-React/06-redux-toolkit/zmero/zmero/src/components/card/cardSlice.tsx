import { RootState, AppThunk } from '../../app/store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


interface cardState {
    img: string;
    text: string;
}

const initialState: cardState = {
    img: "",
    text: "nothing yet",
};


export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        update: (state, action) => {
            state.img = action.payload.img;
            state.text = action.payload.text
        }
    }
})

export const { update } = cardSlice.actions
export const selectCard = (state: RootState) => state.card
export default cardSlice.reducer;
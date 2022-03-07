import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CardState {
    imgSrc: string;
    imgTxt: string; 
    input:string;
};

const initialState: CardState = {
    imgSrc: '',
    imgTxt: 'initial state',
    input:'',
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        update: (state, action) => {
          state.imgSrc = action.payload[0];
          state.imgTxt = action.payload[1];
        },
        updateInput: (state, action) => {
            state.input = action.payload;
        }
    },
});

export const {update, updateInput} = cardSlice.actions;
export const selectImg = (state: RootState) => state.card.imgSrc;
export const selectTxt = (state: RootState) => state.card.imgTxt;
export const input = (state: RootState) => state.card.input;

export default cardSlice.reducer;
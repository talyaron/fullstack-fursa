import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CardState {
    imgSrc: string;
    imgTxt: string; 
};

const initialState: CardState = {
    imgSrc: '',
    imgTxt: 'initial state',
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        update: (state, action) => {
          state.imgSrc = action.payload[0];
          state.imgTxt = action.payload[1];
        }
    },
});

export const {update} = cardSlice.actions;
export const selectImg = (state: RootState) => state.card.imgSrc;
export const selectTxt = (state: RootState) => state.card.imgTxt;

export default cardSlice.reducer;
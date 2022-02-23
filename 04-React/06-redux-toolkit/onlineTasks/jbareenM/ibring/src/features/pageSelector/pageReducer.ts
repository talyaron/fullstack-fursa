import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface pageState {
    value: {
        url: string;
        title: string;
        data: string;
    };
    status?: 'idle' | 'loading' | 'failed';
}

const initialState: pageState = {
    value: {
        url: "",
        title: "",
        data: ""
    },
    status: 'idle',
};

export const pageReducer = createSlice({
    name: 'selectImg',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
        },
        changeText: (state, action: PayloadAction<any>) => {
            state.value.data = action.payload;
        }
    }
});


export const { select, changeText } = pageReducer.actions;
export const selectURL = (state: RootState) => state.selectImg;

export default pageReducer.reducer;

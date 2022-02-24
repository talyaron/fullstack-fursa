import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface cardState {
    products:[];
    value: string;
    data: string;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: cardState = {
    products:[],
    value: "",
    data:"",
    status: 'idle',
};

export const cardReducer = createSlice({
    name: 'selectImg',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
        },
        changeText: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
        }
    }
});


export const { select , changeText } = cardReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectURL = (state: RootState) => state.selectImg.value;
export const selectData = (state: RootState)=> state.selectImg.data;
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default cardReducer.reducer;

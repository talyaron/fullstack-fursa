import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface pageState {
    value: string;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: pageState = {
    value: "",
    status: 'idle',
};

export const pageReducer = createSlice({
    name: 'selectImg',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        select: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});


export const { select } = pageReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectURL = (state: RootState) => state.selectImg.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default pageReducer.reducer;

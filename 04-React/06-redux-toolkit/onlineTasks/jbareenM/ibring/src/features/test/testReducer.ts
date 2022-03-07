import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface counterIF {
    counter: number;
}

const initialState: counterIF = {
    counter: 0
}

export const testReducer = createSlice({
    name: 'test',
    initialState,
    reducers: {
        add: (state) => { //Action select => action.type
            state.counter += 1;
        },
        dec: (state) => { //Action select => action.type
            state.counter -= 1;
        },
        addWithNumber: (state, action) => { //Action select => action.type
            state.counter += action.payload;
        },
    }
});

export const { add, dec, addWithNumber } = testReducer.actions;

export default testReducer.reducer;
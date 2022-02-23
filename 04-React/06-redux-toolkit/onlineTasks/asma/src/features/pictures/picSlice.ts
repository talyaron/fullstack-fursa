import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface CounterState {
  text: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  text: 'starting...',
  status: 'idle',
};


export const picSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    update: (state, action) => {
      state.text = action.payload;
    }
  },
});

export const { update  } = picSlice.actions;
export const selectText = (state: RootState) => state.text.text;

export default picSlice.reducer;

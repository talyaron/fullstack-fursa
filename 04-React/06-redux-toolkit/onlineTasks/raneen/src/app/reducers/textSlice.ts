import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import {getJoke} from './textApi';

export interface TextProps {
  text: string;
  status: 'idle' | 'loading' | 'failed';
  products:Array<any>;
}

const initialState: TextProps = {
  text: 'starting...',
  products:[],
  status: 'idle',
};

export const getJokeAsync = createAsyncThunk(
  'text/fetchJoke',
  async () => {
    const response:string = await getJoke();
    return response;
  }
);

export const textReducer = createSlice({
  name: 'text',
  initialState,
  reducers: {
    update: (state, action) => {
      state.text = action.payload;
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getJokeAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getJokeAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.text = action.payload;
      });
  },
});

export const { update  } = textReducer.actions;
export const selectText = (state: RootState) => state.text.text;
export const selectTextStauts = (state:RootState) => state.text.status;

export default textReducer.reducer;

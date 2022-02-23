import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface CounterState {
  pic: string;
 
}

const initialState: CounterState = {
  pic: '',
  
};


export const picSlice = createSlice({
  name: 'selectedPic',
  initialState,
  reducers: {
      update: (state, action) => {
          state.pic = action.payload;
         
      }
  }
});



export const { update  } = picSlice.actions;
export const selectPic = (state: RootState) => state.selectedPic;

export default picSlice.reducer;

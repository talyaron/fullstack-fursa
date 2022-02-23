import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface CounterState {
  pic: string;
  text:string;
 
}

const initialState: CounterState = {
  pic: '',
  text: '',
  
};


export const picSlice = createSlice({
  name: 'selectedPic',
  initialState,
  reducers: {
      update: (state, action) => {
          state.pic = action.payload;
         
      },
      updateText: (state, action) => {
        state.text = action.payload;
       
    }
  }
});


export const { update ,updateText } = picSlice.actions;
export const selectPic = (state: RootState) => state.selectedPic.pic;
export const selectText = (state: RootState) => state.selectedPic.text;
export default picSlice.reducer;

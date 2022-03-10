import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface treatmentState {
    treatment:string;
    pic:string;
}

const initialState: treatmentState = {
    treatment: 'Add Treatment...',
    pic:'',
};



export const treatmentSlice = createSlice({
  name: 'treatment',
  initialState,
  
  reducers: {
    update: (state, action) => {
        state.treatment = action.payload;
       
    },
    select: (state, action) => {
      state.pic = action.payload;
     
  }
  }

});

export const { update,select } = treatmentSlice.actions;
export const selectTreatment = (state: RootState) => state.treatment.treatment;
export const selectPic = (state: RootState) => state.treatment.pic;
export default treatmentSlice.reducer;

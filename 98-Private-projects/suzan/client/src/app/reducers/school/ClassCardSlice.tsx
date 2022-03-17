import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface SchoolClassCardState {
    class_name:string;
    teacher_name:string;
    id:number;
}

const initialState:SchoolClassCardState = {
    class_name:'',
    teacher_name:'',
    id:-1
};

export const SchoolClassCardSlice = createSlice ({
  name:'schoolClassCard',
  initialState,
  reducers: {
      select: (state, action) => {
          state.class_name = action.payload[0];
          state.teacher_name = action.payload[1];
          state.id = action.payload[2];
      }
  }
});

export const {select} = SchoolClassCardSlice.actions;
export const selectedClassName = (state:RootState) => state.schoolClassCard.class_name;
export const selectedTeacherName = (state:RootState) => state.schoolClassCard.teacher_name;
export const selectedClassId = (state:RootState) => state.schoolClassCard.id;
export default SchoolClassCardSlice.reducer;
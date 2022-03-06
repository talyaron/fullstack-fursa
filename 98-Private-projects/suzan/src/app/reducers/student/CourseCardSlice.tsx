import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface CourseCardState {
    courseName:string;
    teacherName:string;
}

const initialState: CourseCardState = {
    courseName:'',
    teacherName:''
};

export const CourseCardSlice = createSlice({
    name: 'courseCard',
    initialState,
    reducers: {
        select: (state, action) => {
            state.courseName = action.payload[0];
            state.teacherName = action.payload[1];
        }
    }
});

export const {select} = CourseCardSlice.actions;
export const selectedCourseName = (state: RootState) => state.courseCard.courseName;
export const selectedTeacherName = (state:RootState) => state.courseCard.teacherName;
export default CourseCardSlice.reducer;
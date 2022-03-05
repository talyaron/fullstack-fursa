import { RootState } from "../../store";
import {createSlice} from '@reduxjs/toolkit';

interface TeacherCourseCardState {
    course_name:string;
    class_name:string;
}

const initialState: TeacherCourseCardState = {
    course_name:'',
    class_name:'',
}

export const TeacherCourseCardSlice = createSlice({
    name: 'teacherCourseCard',
    initialState,
    reducers: {
        select: (state, action) => {
            state.course_name = action.payload[0];
            state.class_name = action.payload[1];
        }
    }
});

export const {select} = TeacherCourseCardSlice.actions;
export const selectedCourseName = (state: RootState) => state.teacherCourseCard.course_name;
export const selectedClassName = (state: RootState) => state.teacherCourseCard.class_name;
export default TeacherCourseCardSlice.reducer;
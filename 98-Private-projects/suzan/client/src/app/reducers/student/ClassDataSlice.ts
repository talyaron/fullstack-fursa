import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import axios from 'axios';

interface Course {
    id:number,
    name:string,
    firstName:string,
    lastName:string
}

interface ClassDetails {
    courses:Array<Course>,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ClassDetails = {
    courses: [],
    status: 'idle'
};

export const getCoursesAsync = createAsyncThunk (
    'classData/fetchCourses',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('/student/get-courses-by-student-id');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }    
);

export const classDataReducer = createSlice ({
    name: 'classData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getCoursesAsync.pending, (state:any) => {
            state.status = 'loading';
        })
        .addCase(getCoursesAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.courses = action.payload;
        })
        .addCase(getCoursesAsync.rejected, (state:any) => {
            state.status = 'failed';
        })
    }
});

export const classCourses = (state:RootState) => state.classData.courses;
export default classDataReducer.reducer;
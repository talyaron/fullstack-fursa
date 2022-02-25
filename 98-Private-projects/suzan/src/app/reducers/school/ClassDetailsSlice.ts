import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
//import axios from 'axios';

interface Course {
    id:number,
    name:string,
    teacher:string
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
    'courses/fetchCourses',
    async(_, thunkAPI) => {
        // try{
        //     const response = await axios.get('http://localhost:3004/studentCourses');
        //     const data = response.data;
        //     return data;
        // } catch (error:any) {
        //     thunkAPI.rejectWithValue(error.response.data)
        // }
    }    
);

export const classReducer = createSlice ({
    name: 'courses',
    initialState,
    reducers: {
        select: (state, action) => {
            state.courses = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCoursesAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getCoursesAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.courses = action.payload;
        })
        .addCase(getCoursesAsync.rejected, (state) => {
            state.status = 'failed';
        })
    }
});

export const selectCourses = (state:RootState) => state.classDetails.courses;
export default classReducer.reducer;
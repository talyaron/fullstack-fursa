import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import axios from 'axios';

interface Course {
    id:number,
    name:string,
    teacher:string
}

interface Student {
    id:number,
    first:string,
    last:string,
    studentId:string,
    phone:string
}

interface Teacher {
    id:number,
    label:string
}

interface ClassDetails {
    courses:Array<Course>,
    students:Array<Student>,
    teachers:Array<Teacher>,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ClassDetails = {
    courses: [],
    students: [],
    teachers: [],
    status: 'idle'
};

export const getCoursesAsync = createAsyncThunk (
    'classDetails/fetchCourses',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/studentCourses');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }    
);

export const getStudentsAsync = createAsyncThunk (
    'classDetails/fetchStudents',
    async(_,thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/classStudents');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

export const getTeachersAsync = createAsyncThunk (
    'classDetails/fetchTeachers',
    async(_,thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/teachers');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

export const classReducer = createSlice ({
    name: 'courses',
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

        .addCase(getStudentsAsync.pending, (state:any) => {
            state.status = 'loading';
        })
        .addCase(getStudentsAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.students = action.payload;
        })
        .addCase(getStudentsAsync.rejected, (state:any) => {
            state.status = 'failed';
        })
        .addCase(getTeachersAsync.pending, (state:any) => {
            state.status = 'loading';
        })
        .addCase(getTeachersAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.teachers = action.payload;
        })
        .addCase(getTeachersAsync.rejected, (state:any) => {
            state.status = 'failed';
        })
    }
});

export const classCourses = (state:RootState) => state.classDetails.courses;
export const classStudents = (state:RootState) => state.classDetails.students;
export const classTeachers = (state:RootState) => state.classDetails.teachers;
export default classReducer.reducer;
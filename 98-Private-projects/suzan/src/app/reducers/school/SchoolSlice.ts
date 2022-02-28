import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import axios from 'axios';

interface Class {
    id: number,
    name: string,
    teacher: string
}

interface Student {
    id: 1,
    info: {
        firstName: string,
        lastName: string,
        father: string,
        mother: string,
        studentId: string,
        phone: string,
        fphone: string,
        mphone: string,
        email: string
    }
}

interface Teacher {
    id: 1,
    info: {
        firstName: string,
        lastName: string,
        teacherId: string,
        phone: string,
        email: string
    }
}

interface SchoolData {
    classes:Array<Class>,
    students:Array<Student>,
    teachers:Array<Teacher>,
    status: 'idle' | 'loading' | 'failed'
}

const initialState :SchoolData = {
    classes: [],
    students: [],
    teachers: [],
    status: 'idle'
}

export const getSchoolClassesAsync = createAsyncThunk (
    'schoolData/fetchClasses',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/schoolClasses');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }    
);

export const getSchoolStudentsAsync = createAsyncThunk (
    'schoolData/fetchStudents',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/schoolStudents');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }    
);

export const getSchoolTeachersAsync = createAsyncThunk (
    'schoolData/fetchTeachers',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/schoolTeachers');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }    
);

export const schoolReducer = createSlice ({
    name: 'schoolData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getSchoolClassesAsync.pending, (state:any) => {
            state.status = 'loading';
        })
        .addCase(getSchoolClassesAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.classes = action.payload;
        })
        .addCase(getSchoolClassesAsync.rejected, (state:any) => {
            state.status = 'failed';
        })
        .addCase(getSchoolStudentsAsync.pending, (state:any) => {
            state.status = 'loading';
        })
        .addCase(getSchoolStudentsAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.students = action.payload;
        })
        .addCase(getSchoolStudentsAsync.rejected, (state:any) => {
            state.status = 'failed';
        })
        .addCase(getSchoolTeachersAsync.pending, (state:any) => {
            state.status = 'loading';
        })
        .addCase(getSchoolTeachersAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.teachers = action.payload;
        })
        .addCase(getSchoolTeachersAsync.rejected, (state:any) => {
            state.status = 'failed';
        })

    }
});

export const schoolClasses = (state:RootState) => state.schoolData.classes;
export const schoolStudents = (state:RootState) => state.schoolData.students;
export const schoolTeachers = (state:RootState) => state.schoolData.teachers;
export default schoolReducer.reducer;
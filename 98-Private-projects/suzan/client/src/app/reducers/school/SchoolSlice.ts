import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import axios from 'axios';

interface Class {
    id: number,
    name: string,
    firstName: string,
    lastName: string
}

interface Student {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    studentID: string;
    phone: string;
    fatherPhone: string;
    motherPhone: string;
    email: string;
    status: string;
    schoolID: number;
    classID: number;
}

interface Teacher {
    id: number,
    firstName: string,
    lastName: string,
    teacherID: string,
    phone: string,
    email: string,
    username: string,
    password: string,
    schoolID: number
}

interface SchoolData {
    classes: Array<Class>,
    students: Array<Student>,
    teachers: Array<Teacher>,
    selectedClass: Class,
    status: 'idle' | 'loading' | 'failed'
}

const initialState: SchoolData = {
    classes: [],
    students: [],
    teachers: [],
    selectedClass: {id:0, name:"", firstName:"", lastName:""},
    status: 'idle'
}

export const getSchoolClassesAsync = createAsyncThunk(
    'schoolData/fetchClasses',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/school/get-classes-cards');
            // console.log(response);
            const data = response.data;
            return data;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

export const getSchoolStudentsAsync = createAsyncThunk(
    'schoolData/fetchStudents',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/school/get-all-students');
            const data = response.data;
            return data;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

export const getSchoolTeachersAsync = createAsyncThunk(
    'schoolData/fetchTeachers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/school/get-all-teachers');
            const data = response.data;
            return data;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

export const getSelectedClassByIdAsync = createAsyncThunk(
    'schoolData/fetchClassById',
    async (id:any, thunkAPI) => {
        try {
            const response = await axios.post('/school/get-class-by-id', {id:id});
            const data = response.data;
            return data;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
);

export const schoolReducer = createSlice({
    name: 'schoolData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            //getSchoolClasses
            .addCase(getSchoolClassesAsync.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(getSchoolClassesAsync.fulfilled, (state: any, action: any) => {
                state.status = 'idle';
                state.classes = action.payload;
            })
            .addCase(getSchoolClassesAsync.rejected, (state: any) => {
                state.status = 'failed';
            })
            //getSchoolStudents
            .addCase(getSchoolStudentsAsync.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(getSchoolStudentsAsync.fulfilled, (state: any, action: any) => {
                state.status = 'idle';
                state.students = action.payload;
            })
            .addCase(getSchoolStudentsAsync.rejected, (state: any) => {
                state.status = 'failed';
            })
            //getSchoolTeachers
            .addCase(getSchoolTeachersAsync.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(getSchoolTeachersAsync.fulfilled, (state: any, action: any) => {
                state.status = 'idle';
                state.teachers = action.payload;
            })
            .addCase(getSchoolTeachersAsync.rejected, (state: any) => {
                state.status = 'failed';
            })
            //getSelectedClassById
            .addCase(getSelectedClassByIdAsync.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(getSelectedClassByIdAsync.fulfilled, (state: any, action: any) => {
                state.status = 'idle';
                state.selectedClass = action.payload;
            })
            .addCase(getSelectedClassByIdAsync.rejected, (state: any) => {
                state.status = 'failed';
            })

    }
});

export const schoolClasses = (state: RootState) => state.schoolData.classes;
export const schoolStudents = (state: RootState) => state.schoolData.students;
export const schoolTeachers = (state: RootState) => state.schoolData.teachers;
// export const selectedClass = (state: RootState) => state.schoolData.selectedClass;
export default schoolReducer.reducer;
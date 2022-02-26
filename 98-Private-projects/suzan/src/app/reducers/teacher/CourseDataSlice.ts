import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import axios from 'axios';

interface Material {
    id:number,
    title:string,
    description:string
}

interface Homework {
    id:number,
    date:string,
    course:string,
    description:string
}

interface Exam {
    id:number,
    course:string,
    examMaterial:String
}

interface CourseData {
    material:Array<Material>,
    homeworks:Array<Homework>,
    exams:Array<Exam>,
    // updates:Array,
    status: 'idle' | 'loading' | 'failed'
}

const initialState:CourseData = {
    material:[],
    homeworks: [],
    exams: [],
    status: 'idle'
}

export const getMaterialAsync = createAsyncThunk (
    'courseData/fetchMaterial',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/courseMaterial');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }    
);

export const getHomeworksAsync = createAsyncThunk (
    'courseData/fetchHomeworks',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/homeworks');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }    
);

export const getExamsAsync = createAsyncThunk (
    'courseData/fetchExams',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:3004/exams');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }    
);

export const courseReducer = createSlice ({
    name: 'courseData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getMaterialAsync.pending, (state:any) => {
            state.status = 'loading'
        })
        .addCase(getMaterialAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.material = action.payload;
        })
        .addCase(getMaterialAsync.rejected, (state:any) => {
            state.status = 'failed'
        })
        .addCase(getHomeworksAsync.pending, (state:any) => {
            state.status = 'loading'
        })
        .addCase(getHomeworksAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.homeworks = action.payload;
        })
        .addCase(getHomeworksAsync.rejected, (state:any) => {
            state.status = 'failed'
        })
        .addCase(getExamsAsync.pending, (state:any) => {
            state.status = 'loading'
        })
        .addCase(getExamsAsync.fulfilled, (state:any, action:any) => {
            state.status = 'idle';
            state.exams = action.payload;
        })
        .addCase(getExamsAsync.rejected, (state:any) => {
            state.status = 'failed'
        })
    }
})

export const courseMaterial = (state:RootState) => state.courseData.material;
export const courseHomeworks = (state:RootState) => state.courseData.homeworks;
export const courseExams = (state:RootState) => state.courseData.exams;
export default courseReducer.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'

interface userschem{
    name:string,
    img:string,

}

interface Project {
    name: string,
    textmuted: string,
    daysleft: number,
    participant:Array<userschem>
}

interface Projects {
    arrProjects: Array<Project>,
    status: 'idle' | 'loading' | 'failed';

}


const initialState: Projects = {
    arrProjects: [],
    status: 'idle'
};

export const getProjectAsync = createAsyncThunk(
        'projects/fetchProjects',
        async (_, thunkAPI) => {
            try {
                const response = await axios.get('http://localhost:3001/projects')
                const data = response.data
                return data
            } catch (error:any) {
                thunkAPI.rejectWithValue(error.response.data)
            }

        }
);


export const projectsReducer = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<any>) => {
            state.arrProjects = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProjectAsync.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(getProjectAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrProjects = action.payload;
            })
            .addCase(getProjectAsync.rejected , (state) => {
                state.status = 'failed';
            })
    }
});

export const selectProjects = (state: RootState) => state.projects.arrProjects;

export default projectsReducer.reducer 
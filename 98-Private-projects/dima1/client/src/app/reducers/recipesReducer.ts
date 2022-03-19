import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";

// interface type {
//   name: String;
//   isTrue: boolean;
// }

// const types_: Array<type> = [{ name: 'Food', isTrue: false }, { name: 'Drinks', isTrue: false }, { name: 'Desserts', isTrue: false },
//                               { name: 'Healthy', isTrue: false }, {name:'Salads', isTrue: false}, {name:'Soups', isTrue: false},
//                               {name:'Pastries', isTrue: false}]

export interface RecipeState {
    info: {
        _id: String;
        image: any;
        name: string;
        time: string;
        people: string;
        calories: string;
        ingredients: string;
        method: string;
        notes: string;
        userName: String;
        types: Array<any>;
    };
    //status: 'idle' | 'loading' | 'failed'
}

interface recipesByType {
    recipes: Array<RecipeState>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: recipesByType = {
    recipes: [],
    status: 'idle'
}

export const recipesByTypeAsync = createAsyncThunk(
    'recipesByType/fetchByType',
    async (type: any, thunkAPI) => {
        try {
            console.log(type)
            const response = await axios.post('/userRecipes/get-recipes-ByType', { type: type });
            const data = response.data;
            if (data.ok)
                return data.recipe;
            else return thunkAPI.rejectWithValue("failed");
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const recipesReducer = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(recipesByTypeAsync.pending, (state, action) => {
                state.recipes = [];
                state.status = 'loading';
            })
            .addCase(recipesByTypeAsync.fulfilled, (state, action) => {
                state.recipes = action.payload;
                state.status = 'idle';
            })
            .addCase(recipesByTypeAsync.rejected, (state, action) => {
                state.recipes = [];
                state.status = 'failed'
            })
    }
});

export const recipesByType = (state: RootState) => state.recipes.recipes;

export default recipesReducer.reducer;
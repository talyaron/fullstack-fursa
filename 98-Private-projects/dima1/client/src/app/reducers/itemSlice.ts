import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";


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
  };
  isNew: boolean;
  from: string;
}

const initialState: RecipeState = {
  info: {
    _id: '',
    image:'',
    name: '',
    time: '',
    people: '',
    calories: '',
    ingredients: '',
    method: ''
  },
  isNew: false,
  from: ''
}

export const getSelectAsync = createAsyncThunk(
  'getRecipe/fetchGet',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/selectRecipe/get-select-recipe');
      const data = response.data;
      return data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateSelectAsync = createAsyncThunk(
  'updateRecipe/fetchSet',
  async (recipeInfo:any, thunkAPI) => {
    try {
      const response = await axios.post('/selectRecipe/update-select-recipe', {info:recipeInfo.info, from:recipeInfo.from, isNew:recipeInfo.isNew});
      const data = response.data;
      return data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const itemReducer = createSlice({
  name: 'item',
  initialState,
  reducers: {
    updateRecipe: (state, action) => {
      state.info = action.payload;
    },
    updateFrom: (state, action) => {
      state.from = action.payload;
    },
    updateNew: (state, action) => {
      state.isNew = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSelectAsync.fulfilled, (state, action) => {
        state.info = action.payload.info;
        state.from = action.payload.from;
        state.isNew = action.payload.isNew_;
      })
      .addCase(updateSelectAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.info = action.payload.info;
        state.from = action.payload.from;
        state.isNew = action.payload.isNew_;
      })
  }
});

export const { updateRecipe, updateFrom, updateNew } = itemReducer.actions;
export const selectedRecipe = (state: RootState) => state.item.info;
export const selectedIsNew = (state: RootState) => state.item.isNew;
export const selectedFrom = (state: RootState) => state.item.from;

export default itemReducer.reducer;
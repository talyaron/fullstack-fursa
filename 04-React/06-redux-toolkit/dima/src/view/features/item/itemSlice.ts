import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../../../app/store";


export interface RecipeState {
  recipe: {
    id: number;
    image: string;
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
  recipe: {
    id: 0,
    image: '',
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
  'select/fetchselect',
  async (info: Array<any>, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3004/' + `${info[1]}` + '/' + `${info[0].id}`);
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
      state.recipe = action.payload;
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
        state.recipe = action.payload;
      })
  }
});

export const { updateRecipe, updateFrom, updateNew } = itemReducer.actions;
export const selectedRecipe = (state: RootState) => state.item.recipe;
export const selectedIsNew = (state: RootState) => state.item.isNew;
export const selectedFrom = (state: RootState) => state.item.from;

export default itemReducer.reducer;
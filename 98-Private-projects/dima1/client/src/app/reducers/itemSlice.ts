import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../store";

interface type {
  name: String;
  isTrue: boolean;
}

const types_: Array<type> = [{ name: 'Food', isTrue: false }, { name: 'Drinks', isTrue: false }, { name: 'Desserts', isTrue: false },
                              { name: 'Healthy', isTrue: false }, {name:'Salads', isTrue: false}, {name:'Soups', isTrue: false},
                              {name:'Pastries', isTrue: false}]

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
    types: Array<type>;
  };
  status: 'idle' | 'loading' | 'failed'
}

const initialState: RecipeState = {
  info: {
    _id: '',
    image: '',
    name: '',
    time: '',
    people: '',
    calories: '',
    ingredients: '',
    method: '',
    notes: '',
    userName: '',
    types: types_
  },
  status: 'idle'
}

export const selectRecipeAsync = createAsyncThunk(
  'getSelect/fetchGet',
  async (id: any, thunkAPI) => {
    try {
      const response = await axios.post('/selectRecipe/get-select-recipe', { id: id });
      const data = response.data;
      if (data.ok)
        return data.recipe;
      else return thunkAPI.rejectWithValue("failed");
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSelectAsync = createAsyncThunk(
  'getByName/fetchGetByName',
  async (name: any, thunkAPI) => {
    try {
      //console.log(name)
      const response = await axios.post('/selectRecipe/get-recipe-byName', { name_: name });
      const data = response.data;
      //console.log(data)
      if (data.ok)
        return data.recipe;
      else return thunkAPI.rejectWithValue("failed");
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
    }
    //   updateFrom: (state, action) => {
    //     state.from = action.payload;
    //   },
    //   updateNew: (state, action) => {
    //     state.isNew = action.payload;
    //   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(selectRecipeAsync.pending, (state, action) => {
        state.info = {
          _id: '',
          image: '',
          name: '',
          time: '',
          people: '',
          calories: '',
          ingredients: '',
          method: '',
          notes: '',
          userName: '',
          types: types_
        };
        state.status = 'loading';
      })
      .addCase(selectRecipeAsync.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = 'idle';
      })
      .addCase(selectRecipeAsync.rejected, (state, action) => {
        state.info = {
          _id: '',
          image: '',
          name: '',
          time: '',
          people: '',
          calories: '',
          ingredients: '',
          method: '',
          notes: '',
          userName: '',
          types: types_
        };
        state.status = 'failed'
      })
      .addCase(getSelectAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSelectAsync.fulfilled, (state, action) => {
        //console.log(action.payload)
        state.info = action.payload;
        state.status = 'idle';
      })
      .addCase(getSelectAsync.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
});

export const { updateRecipe } = itemReducer.actions;

export const selectedRecipe = (state: RootState) => state.item.info;

export default itemReducer.reducer;
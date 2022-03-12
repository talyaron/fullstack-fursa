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
    userName: String;
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
    userName: '',
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
      console.log(name)
      const response = await axios.post('/selectRecipe/get-recipe-byName', { name_: name });
      const data = response.data;
      console.log(data)
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
          userName: '',
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
          userName: '',
        };
        state.status = 'failed'
      })
      .addCase(getSelectAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSelectAsync.fulfilled, (state, action) => {
        console.log(action.payload)
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
// export const selectedIsNew = (state: RootState) => state.item.isNew;
// export const selectedFrom = (state: RootState) => state.item.from;

export default itemReducer.reducer;
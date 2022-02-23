import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store";


export interface RecipeState{
  recipe:{
    id:number;
    image: string;
    name:string;
    time:string;
    people:string;
    calories:string;
    ingredients:string;
    method:string;
  };
  isNew: boolean;
  from : string;
}

const initialState : RecipeState = {
  recipe: {
    id: 0,
    image:'',
    name:'',
    time:'',
    people:'',
    calories:'',
    ingredients:'',
    method:''
  },
  isNew: false,
  from :''
}

export const itemReducer = createSlice ({
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
    }
});

export const {updateRecipe, updateFrom, updateNew} = itemReducer.actions;
export const selectedRecipe = (state:RootState) => state.item.recipe;
export const selectedIsNew = (state:RootState) => state.item.isNew;
export const selectedFrom = (state:RootState) => state.item.from;

export default itemReducer.reducer;
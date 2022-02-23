import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ItemState {
    text: string;
    img: string;
}


const initialState : ItemState = {
    img : '',
    text : 'text',
}

export const itemReducer = createSlice({
    name: 'item',
    initialState,
    reducers: {
      update: (state, action) => {
        //state.text = action.payload;
        state.img = action.payload;
      }
    }
  });

export const { update  } = itemReducer.actions;
export const selectImage = (state: RootState) => state.item.img;
//export const selectText = (state:RootState) => state.item.text;
  
export default itemReducer.reducer;
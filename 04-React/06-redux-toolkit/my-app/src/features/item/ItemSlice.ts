import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ItemState {
    text: string;
    title:string;
    img: string;
}


const initialState : ItemState = {
    img : '',
    title:'',
    text : '',

}

export const itemReducer = createSlice({
    name: 'item',
    initialState,
    reducers: {
      update: (state, action) => {
        //state.text = action.payload;
        state.img = action.payload;
      },
      updateText: (state, action) => {
        state.text = action.payload;
      }
    }
});



export const { update, updateText  } = itemReducer.actions;
export const selectImage = (state: RootState) => state.item.img;
export const selectText = (state:RootState) => state.item.text;
//export const selectImage = (state: RootState) => state.item.img;
  
export default itemReducer.reducer;
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store";

export interface pageName{
    name: string;
}

const initialState: pageName = {
    name: '',
}

export const pageReducer = createSlice({
    name:'pageName',
    initialState,
    reducers:{
        updateName: (state,action) => {
            state.name = action.payload;
        }
    }
});

export const {updateName} = pageReducer.actions;
export const selectPage = (state:RootState) => state.pageName.name;

export default pageReducer.reducer;
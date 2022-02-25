export{}
// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
//import axios from 'axios';
//import { RootState } from '../../../app/store';
//
// interface mygroup{
//     id: string
//     groupName: string
// }
//
// interface mygroups{
//    arr:Array<mygroup>
// }
//
//const initialState:mygroups={
//    arr : []
//}
//export const getMygroupsAsync = createAsyncThunk(
//    'mygroups/fetchMyGroups',
//    async (_, thunkAPI) => {
//        try {
//            const response = await axios.get('http://localhost:3004/group/')
//            const data = response.data
//            return data
//        } catch (error:any) {
//            thunkAPI.rejectWithValue(error.response.data)
//        }
//
//    }
//);
//
//export const mygroupsReducer= createSlice({
//    name: 'mygroups', 
//    initialState,
//    reducers:{
//
//    },
//    extraReducers: (builder)=>{
//        builder.addCase(getMygroupsAsync.fulfilled, (state, action)=>{
//            state.arr= action.payload;
//        })
//    }
//})
//
//export const selectMygroups = (state: RootState)=> state.mygroups
//
//
//export default mygroupsReducer.reducer;

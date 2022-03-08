import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
// import axios from 'axios'
import {useAppDispatch, useAppSelector} from '../hooks';

interface Sharing {
    from:String | null  ; //edit, 
    to:String | null;
    content:String;
    //chatId:String;
    date:Date | null;
    accident:String | null; //edit
    status: 'idle' | 'loading' | 'failed';
}

const initialState: Sharing = {
    from:null,
    to: null,
    content:"",
    //chatId: "",
    date:null,
    accident: null,
    status:'idle',
};

export const sharingReducer = createSlice({
   name: 'sharing',
   initialState,
   reducers: {
    setSharing: (state, action) => {

        try{
            if(!action.payload.sender || !action.payload.reciver
            || !action.payload.content || !action.payload.date
            || !action.payload.accident) throw new Error('Missing parameter on request');

        state.from = action.payload.sender;
        state.to = action.payload.reciver;
        state.content = action.payload.content;
        state.date = action.payload.date;
        state.accident = action.payload.accident;
        state.status = 'idle';
        } catch(error) {
            console.log(error)
        }
        
    },

   } 
})

export const {setSharing} = sharingReducer.actions;
export default sharingReducer.reducer;


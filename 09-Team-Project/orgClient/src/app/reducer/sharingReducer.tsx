import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../hooks';
import Sharing from '../../../../server/model/accidentModel';

interface SharingInt {
    from:String | null  ; //edit, 
    to:String | null;
    content:String;
    //chatId:String;
    date:Date | null;
    accident:any | null; //edit
    status: 'idle' | 'loading' | 'failed';
}

const initialState: SharingInt = {
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

        state.from = action.payload.from;
        state.to = action.payload.to;
        state.content = action.payload.content;
        state.date = action.payload.date;
        state.accident = action.payload.accident;
        state.status = 'idle';
        
        const newsharing = new Sharing({
            from: state.from,
            content:state.content,
            to:state.to,
            chatId: "123",
            date:state.date,
            accident:state.accident,
        })
        axios
          .post("/add-sharing", { newsharing })
          .then((res) => console.log(res))
          .catch((err) => console.error(err));

        } catch(error) {
            console.log(error)
        }
        
    },
   }
})

export const {setSharing} = sharingReducer.actions;
export default sharingReducer.reducer;


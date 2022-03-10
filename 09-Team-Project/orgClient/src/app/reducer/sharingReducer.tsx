import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios';

interface SharingInt {
    value: {
        from: String | null; //edit, 
        to: String | null;
        content: String;
        //chatId:String;
        date: String;
        accident: any | null; //edit
    },

    status: 'idle' | 'loading' | 'failed';
}

const initialState: SharingInt = {
    value: {
        from: null,
        to: null,
        content: "",
        //chatId: "",
        date: "",
        accident: null,
    },

    status: 'idle',
};

export const addNewSharingAsync = createAsyncThunk(
    'sharing/fetchNewSharing',
    async (newSharing:any, thunkAPI) => {
        try {
            const response = await axios.post("/messagesBetweemOrg/add-sharing", { newSharing })
            return response.data;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.message)
        }
    }
);

export const sharingReducer = createSlice({
    name: 'sharing',
    initialState,
    reducers: {
        setSharing: (state, action) => {

            try {
                console.log(action.payload);
                if (!action.payload.from || !action.payload.to
                    || !action.payload.content || !action.payload.date
                    || !action.payload.accident) throw new Error('Missing parameter on request');

                // state.from = action.payload.from;
                // state.to = action.payload.to;
                // state.content = action.payload.content;
                // state.date = action.payload.date;
                // state.accident = action.payload.accident;
                
                state.value = action.payload;
                state.status = 'idle';

                // const newsharing = {
                //     from: state.from,
                //     content:state.content,
                //     to:state.to,
                //     chatId: "123",
                //     date:state.date,
                //     accident:state.accident,
                // };

                // axios
                //   .post("/messagesBetweemOrg/add-sharing", { newsharing })
                //   .then((res) => console.log(res))
                //   .catch((err) => console.error(err));

            } catch (error) {
                console.log(error)
            }

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewSharingAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addNewSharingAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(addNewSharingAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { setSharing } = sharingReducer.actions;
export default sharingReducer.reducer;


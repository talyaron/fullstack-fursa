import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userProb {
    userID: number;
    userIsLogIn: boolean;
    userName: string;
    favorite: Array<number>;
    reservations: Array<number>;
}

const initialState: userProb = {
    userID: -1,
    userIsLogIn: false,
    userName: "",
    favorite: [],
    reservations: [],
};


export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateLogIn: (state, action) => {
            state.userIsLogIn = action.payload
        },
        updateUserInfo: (state, action) => {
            state.userName = action.payload.fullName
            state.favorite = action.payload.favorite
            state.userID = action.payload.id
            state.reservations = action.payload.reservations
        }
    }
})


export const { updateLogIn, updateUserInfo } = userReducer.actions
export const selectUser = (state: RootState) => state.user
export const selecUserName = (state: RootState) => state.user.userName
export const checkUser = (state: RootState) => state.user.userIsLogIn
export default userReducer.reducer;
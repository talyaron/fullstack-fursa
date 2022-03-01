import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectUserId } from './userReducer';

interface Favorite {
    restId: string;
    id: number;
}
interface Favorites {
    arrOfFavorite: Array<Favorite>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: Favorites = {
    arrOfFavorite: [],
    status: 'idle',
};

export const fetchUserFavorite = createAsyncThunk(
    'favorite/fetchUserFavorite',
    async (userId: string, thunkAPI) => {
        try {
            const response = await axios.get('/get-user-favorite', { params: { user: userId } })
            const data: any = response.data
            console.log(data)
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const addFavorite = createAsyncThunk(
    'favorite/addFavorite',
    async (obj: any | undefined, thunkAPI) => {
        try {
            const response = await axios.post('/add-user-favorite', { "userId": obj.userId, 'restId': obj.restId })
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const deleteFavorite = createAsyncThunk(
    'favorite/deleteFavorite',
    async (id: number | undefined, thunkAPI) => {
        try {
            const response = await axios.post(`/delete-user-favorite`)
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);




export const favoriteReducer = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserFavorite.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserFavorite.fulfilled, (state, action) => {
                if (action.payload.log === true) {
                    state.status = 'idle';
                    state.arrOfFavorite = action.payload.favorite;
                }
            })
            .addCase(addFavorite.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addFavorite.fulfilled, (state, action) => {
                if (action.payload.log == true) {
                    state.status = 'idle';
                    state.arrOfFavorite = action.payload.favorite
                }
            })
            .addCase(deleteFavorite.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteFavorite.fulfilled, (state, action) => {
                if (action.payload.log == true) {
                    state.status = 'idle';
                    state.arrOfFavorite = action.payload.favorite
                }
            });
    },
})



export const getFavorites = (state: RootState) => state.favorite.arrOfFavorite
export default favoriteReducer.reducer;
import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'
import { useAppDispatch } from '../hooks';
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
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/Favorite')
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const addFavorite = createAsyncThunk(
    'favorite/addFavorite',
    async (restId: string | undefined, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:3004/Favorite', { 'restId': restId })
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
            const response = await axios.delete(`http://localhost:3004/Favorite/${id}`)
            const data: any = response.data
            const dispatch = useAppDispatch()
            dispatch(fetchUserFavorite())
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
                state.status = 'idle';
                state.arrOfFavorite = action.payload;
            })
            .addCase(addFavorite.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addFavorite.fulfilled, (state, action) => {
                state.status = 'idle';
            })
            .addCase(deleteFavorite.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteFavorite.fulfilled, (state, action) => {
                state.status = 'idle';
            });
    },
})



export const getFavorites = (state: RootState) => state.favorite.arrOfFavorite
export default favoriteReducer.reducer;
import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'


interface Favorite {
    restId: string;
    userId: string;
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
            const response = await axios.get('/get-user-favorite', { params: { "userId": userId } })
            const data: any = response.data
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
    async (obj: any | undefined, thunkAPI) => {
        try {
            const { userId, restId } = obj
            if (!userId || !restId) throw console.error("invalid fields");
            const response = await axios.delete(`/delete-user-favorite`, { data: { "userId": userId, "restId": restId } })
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
import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface Restaurant {
    id: number;
    name: string;
    image: string;
    booking: number;
    region: string;
    stars: number;
    city: string;
    category: string;
    photos: Array<string>;
}

interface Restaurants {
    arrOfResteruants: Array<Restaurant>;

    arrOfFamousResteruants: Array<Restaurant>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: Restaurants = {
    arrOfResteruants: [],
    arrOfFamousResteruants: [],
    status: 'idle',
}

export const fetchAllRestaurants = createAsyncThunk(
    'fetchRestaurants',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/Restaurants')
            const data: any = response.data
            return data
        } catch (err) {
            thunkAPI.rejectWithValue(err)
        }

    }
);

export const fetchFamousRestaurants = createAsyncThunk(
    'fetchFamousRestaurants',
    async (region: string) => {
        try {
            const response = await axios.get('http://localhost:3004/Restaurants')
            const data: any = response.data
            return data.filter((rest: Restaurant) => {
                if (rest.region === region)
                    return rest;
            });
        } catch (err) {
            console.log(err)
        }

    }
);

export const fetchRestaurantsById = createAsyncThunk(
    'fetchRestaurantsById',
    async (id: number) => {
        try {
            const response = await axios.get(`http://localhost:3004/Restaurants/${id}`)
            const data: any = response.data
            return data;
        } catch (err) {
            console.log(err)
        }

    }
);
export const restaurantReducer = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRestaurants.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllRestaurants.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrOfResteruants = action.payload;
            })
            .addCase(fetchFamousRestaurants.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFamousRestaurants.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrOfFamousResteruants = action.payload;
            })
            .addCase(fetchRestaurantsById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRestaurantsById.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrOfFamousResteruants = action.payload;
            })

    },
})




export const getAllRestaurants = (state: RootState) => state.restaurant.arrOfResteruants
export const getFamousRestaurants = (state: RootState) => state.restaurant.arrOfFamousResteruants
export default restaurantReducer.reducer;
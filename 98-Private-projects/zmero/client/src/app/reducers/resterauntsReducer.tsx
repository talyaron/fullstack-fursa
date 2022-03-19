import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface Restaurant {
    id: string;
    name: string;
    image: string;
    booking: number;
    region: string;
    stars: number;
    city: string;
    category: string;
    photos: Array<string>;
    open: string;
    close: string;
    description: string;
    subCategory: Array<string>;
    ownerId: string;
}
interface Region {
    region: string;
    url: string;
}
interface Restaurants {
    arrOfResteruants: Array<Restaurant>;
    ownerArrOfResteruants: Array<Restaurant>;
    arrOfFamousResteruants: Array<Restaurant>;
    arrOfRegions: Array<Region>
    status: 'idle' | 'loading' | 'failed';
}

const initialState: Restaurants = {
    arrOfResteruants: [],
    ownerArrOfResteruants: [],
    arrOfFamousResteruants: [],
    arrOfRegions: [],
    status: 'idle',
}

export const fetchAllRestaurants = createAsyncThunk(
    'fetchAllRestaurants',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/restaurants/get-all-restaurants')
            const data: any = response.data
            const { resteraunt } = data;
            return resteraunt
        } catch (err) {
            thunkAPI.rejectWithValue(err)
        }

    }
);

export const fetchAllOwnerRestaurants = createAsyncThunk(
    'fetchAllOwnerRestaurants',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/restaurants/get-all-owner-restaurants')
            const data: any = response.data
            const { resteraunt } = data;
            return resteraunt
        } catch (err) {
            thunkAPI.rejectWithValue(err)
        }

    }
);

export const fetchFamousRestaurants = createAsyncThunk(
    'fetchFamousRestaurants',
    async (region: string) => {
        try {
            if (!region) throw "invalid field"
            const response = await axios.post('/restaurants/get-famous-restaurants', { "region": region })
            const data: any = response.data
            const { resteraunt } = data;
            return resteraunt.filter((rest: Restaurant) => {
                if (rest.region === region)
                    return rest;
            });
        } catch (err) {
            console.log(err)
        }

    }
);

export const fetchRegion = createAsyncThunk(
    'fetchRegion',
    async () => {
        try {
            const response = await axios.get('/restaurants/get-regions')
            const data: any = response.data
            const { regions } = data;
            return regions
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
            .addCase(fetchRegion.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRegion.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrOfRegions = action.payload;
            })
            .addCase(fetchAllOwnerRestaurants.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllOwnerRestaurants.fulfilled, (state, action) => {
                state.status = 'idle';
                state.ownerArrOfResteruants = action.payload;
            })

    },
})




export const getAllRestaurants = (state: RootState) => state.restaurant.arrOfResteruants
export const getFamousRestaurants = (state: RootState) => state.restaurant.arrOfFamousResteruants
export const getOwnerRestaurants = (state: RootState) => state.restaurant.ownerArrOfResteruants
export const getRegions = (state: RootState) => state.restaurant.arrOfRegions
export default restaurantReducer.reducer;
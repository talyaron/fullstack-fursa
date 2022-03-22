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
interface dateObjP {
    date: string;
    restId: string;
}
interface Restaurants {
    arrOfRestaurants: Array<Restaurant>;
    ownerArrOfRestaurants: Array<Restaurant>;
    arrOfFamousRestaurants: Array<Restaurant>;
    arrOfOwnerReservations: Array<dateObjP>;
    arrOfRegions: Array<Region>
    status: 'idle' | 'loading' | 'failed';
}

const initialState: Restaurants = {
    arrOfRestaurants: [],
    ownerArrOfRestaurants: [],
    arrOfFamousRestaurants: [],
    arrOfOwnerReservations: [],
    arrOfRegions: [],
    status: 'idle',
}

export const fetchAllRestaurants = createAsyncThunk(
    'fetchAllRestaurants',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/restaurants/get-all-restaurants')
            const data: any = response.data
            const { restaurant } = data;
            return restaurant
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
            if (!region) throw "invalid field"
            const response = await axios.post('/restaurants/get-famous-restaurants', { "region": region })
            const data: any = response.data
            const { restaurant } = data;
            return restaurant.filter((rest: Restaurant) => {
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
                state.arrOfRestaurants = action.payload;
            })
            .addCase(fetchFamousRestaurants.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFamousRestaurants.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrOfFamousRestaurants = action.payload;
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
                const { restaurant, reserves } = action.payload
                try {
                    if (!restaurant || !reserves) throw new Error('invalid data')
                    state.ownerArrOfRestaurants = restaurant;
                    state.arrOfOwnerReservations = reserves;
                    state.status = 'idle';
                } catch (error: any) {
                    console.log(error.message)
                }
            })

    },
})




export const getAllRestaurants = (state: RootState) => state.restaurant.arrOfRestaurants
export const getFamousRestaurants = (state: RootState) => state.restaurant.arrOfFamousRestaurants
export const getOwnerRestaurants = (state: RootState) => state.restaurant.ownerArrOfRestaurants
export const getOwnerReserveData = (state: RootState) => state.restaurant.arrOfOwnerReservations
export const getRegions = (state: RootState) => state.restaurant.arrOfRegions
export default restaurantReducer.reducer;
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer'
import restaurantReducer from './reducers/resterauntsReducer'
import reservationsReducer from './reducers/reservationsReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    restaurant: restaurantReducer,
    reservation: reservationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

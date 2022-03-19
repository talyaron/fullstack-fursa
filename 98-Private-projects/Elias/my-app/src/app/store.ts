import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import NavtextSlice  from './reducer/NavTextReducer';
import UserReducer from './reducer/UserReducer';
import WeatherReducer from './reducer/WeatherReducer';

export const store = configureStore({
  reducer: {
    User :UserReducer,
    NavText:NavtextSlice,
    Weather:WeatherReducer,
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

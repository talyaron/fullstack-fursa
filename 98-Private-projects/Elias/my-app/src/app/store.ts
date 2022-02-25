import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { UserSlice } from './reducer/dist/UserReducer';
import NavtextSlice  from './reducer/NavTextReducer';
import UserReducer from './reducer/UserReducer';

export const store = configureStore({
  reducer: {
    User :UserReducer,
    NavText:NavtextSlice
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

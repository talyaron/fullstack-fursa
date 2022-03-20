import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import accidentReducer from './reducer/accidentReducer';
//import counterReducer from '../features/counter/counterSlice';
import userReducer from './reducer/userReducer';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    user:userReducer,
    accident:accidentReducer
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

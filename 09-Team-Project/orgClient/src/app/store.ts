import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sharingReducer from './reducer/sharingReducer';
import accidentInfoReducer from './reducer/accidentInfoReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sharing: sharingReducer,
    accident: accidentInfoReducer
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

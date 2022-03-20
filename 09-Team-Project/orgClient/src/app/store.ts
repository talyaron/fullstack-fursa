import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AccidentsReducer from '../features/accidents/accidentsReducer';
import counterReducer from '../features/counter/counterSlice';
import sharingReducer from './reducer/sharingReducer';
import accidentInfoReducer from './reducer/accidentInfoReducer';
import orgUserReducer from '../features/orgUser/orgUserReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    accidents: AccidentsReducer,
    sharing: sharingReducer,
    accident: accidentInfoReducer,
    orgUser: orgUserReducer,
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

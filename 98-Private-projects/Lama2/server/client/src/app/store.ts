import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
//import treatmentReducer from '../features/treatment/treatmentSlice';
import registartionReducer from '../features/coursesRegistrations/registrationSlice';
import productsReducer from '../features/productsReducer/products';

export const store = configureStore({
  reducer: {
    registrations: registartionReducer,
    counter: counterReducer,
    products:productsReducer,
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

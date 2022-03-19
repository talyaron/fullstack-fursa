import { configureStore } from '@reduxjs/toolkit'
import AppSlice from '../slice'

export const store = configureStore({
  reducer: {
    AppSlice: AppSlice,
  },
})

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// // export type AppThunk<ReturnType = void> = ThunkAction<
// //   ReturnType,
// //   RootState,
// //   unknown,
// //   Action<string>
// // >;
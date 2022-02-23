import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import textReducer from '../features/text/textSlice';
import courseCardReducer from './reducers/student/CourseCardSlice';
import teacherCourseCardReducer from './reducers/teacher/CourseCardSlice';
import schoolClassCardReducer from './reducers/school/ClassCardSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    //  text:textReducer,
    courseCard: courseCardReducer, 
    teacherCourseCard: teacherCourseCardReducer,
    schoolClassCard: schoolClassCardReducer,
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

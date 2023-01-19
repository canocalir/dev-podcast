import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import TaskReducer from '../features/taskSlice'

export const store = configureStore({
  reducer: {
   tasks: TaskReducer
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

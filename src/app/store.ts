import { configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit'; // 🟢 Added 'type' here

export const store = configureStore({
  reducer: {
    // 🟢 Temporary dummy reducer to make Redux happy
    dummy: (state = {}) => state, 
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

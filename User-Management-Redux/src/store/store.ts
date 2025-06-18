// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'; 

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// تحديد نوع RootState وAppDispatch لـ TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
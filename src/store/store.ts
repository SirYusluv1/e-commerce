import { configureStore } from "@reduxjs/toolkit";
import backdropSlice from "./backdropSlice";

export const store = configureStore({
  reducer: {
    backdrop: backdropSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

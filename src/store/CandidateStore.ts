import { configureStore } from "@reduxjs/toolkit";
import CandidateReducer from "./reducers/CandidateReducer";

export const store = configureStore({
  reducer: { CandidateReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

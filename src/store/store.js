// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import quoteModalSlice from "@/store/quoteModalSlice";

export const store = configureStore({
  reducer: {
    modal: quoteModalSlice,
  },
});

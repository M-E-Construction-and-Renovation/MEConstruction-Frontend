// src/store/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  // Which CTA opened the modal, reported to GA4 as `cta_source`. The global CTAs
  // (header, closing section) appear on every page, so they need to be told apart
  // from the in-page ones to know which placement actually earns leads.
  source: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.source = action.payload ?? "page_body";
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

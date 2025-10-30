// src/app/providers/ReduxProvider.jsx
"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import QuoteModal from "../../components/utils/quote-modal";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
      {/* Global modal rendered once */}
      <QuoteModal />
    </Provider>
  );
}

import { configureStore } from "@reduxjs/toolkit";

import payerListReducer from "../features/payer/payerListSlice";
import transactionListReducer from "../features/transactions/transactionListSlice";

export const store = configureStore({
  reducer: {
    payerList: payerListReducer,
    transactionList: transactionListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

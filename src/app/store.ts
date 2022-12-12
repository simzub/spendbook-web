import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";

import payerListReducer from "../features/payer/payerListSlice";
import loginSliceReducer from "../pages/loginPage/login.slice";
import transactionsListSliceReducer from "../pages/transactions/transactionsListSlice";
import userSliceReducer from "../redux/user.slice";

const combinedReducer = combineReducers({
  login: loginSliceReducer,
  users: userSliceReducer,
  // transactionList: transactionListReducer,
  payerList: payerListReducer,
  transactionsList: transactionsListSliceReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "user/logout") {
    // eslint-disable-next-line no-param-reassign
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;

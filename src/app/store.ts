import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";

import loginSliceReducer from "../pages/loginPage/login.slice";
import transactionDetailSliceReducer from "../pages/transactions/transactionDetailSlice";
import transactionsCreateSliceReducer from "../pages/transactions/transactionsCreateSlice";
import transactionsListSliceReducer from "../pages/transactions/transactionsListSlice";
import userSliceReducer from "../redux/user.slice";

const combinedReducer = combineReducers({
  login: loginSliceReducer,
  users: userSliceReducer,
  transactionsList: transactionsListSliceReducer,
  transactionsCreate: transactionsCreateSliceReducer,
  transactionDetail: transactionDetailSliceReducer,
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

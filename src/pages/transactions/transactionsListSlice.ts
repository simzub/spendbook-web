import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxAction } from "../../redux/ReduxAction.type";
import spendbookFetch from "../../services/spendbook/spendbookFetch";
import {
  GetOverviewResponse,
  ItemQueryResponse,
  TransactionResponse,
} from "../../services/spendbook/transaction.requests";

interface TransactionsListState {
  overview?: GetOverviewResponse;
  transcations?: ItemQueryResponse<TransactionResponse>;
}

const initialState: TransactionsListState = {};

export const transactionsListSlice = createSlice({
  name: "transactionsList",
  initialState,
  reducers: {
    setTransactions: (
      state: TransactionsListState,
      payload: PayloadAction<ItemQueryResponse<TransactionResponse>>
    ) => {
      state.transcations = payload.payload;
    },
    setOverView: (
      state: TransactionsListState,
      payload: PayloadAction<GetOverviewResponse>
    ) => {
      state.overview = payload.payload;
    },
  },
});

const { setTransactions, setOverView } = transactionsListSlice.actions;

export const fetchTransactionData =
  (): ReduxAction => async (dispatch: any) => {
    // make a request to fetch all transactions
    const transactionsResponse =
      await spendbookFetch.transactions.getTransactions();
    // make a request to fetch transactions overview
    const overviewResponse =
      await spendbookFetch.transactions.getTransactionOverview();
    // set the responses to the state
    if (transactionsResponse.data) {
      dispatch(setTransactions(transactionsResponse.data));
    }
    if (overviewResponse.data) {
      dispatch(setOverView(overviewResponse.data));
    }
  };

const transactionsListSliceReducer = transactionsListSlice.reducer;

export default transactionsListSliceReducer;

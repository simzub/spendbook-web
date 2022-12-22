import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxAction } from "../../redux/ReduxAction.type";
import spendbookFetch from "../../services/spendbook/spendbookFetch";
import { TransactionResponse } from "../../services/spendbook/transaction.requests";

interface TransactionDetailState {
  transcation?: TransactionResponse;
}

const initialState: TransactionDetailState = {};

export const transactionDetailSlice = createSlice({
  name: "transactionDetail",
  initialState,
  reducers: {
    setTransaction: (
      state: TransactionDetailState,
      payload: PayloadAction<TransactionResponse>
    ) => {
      state.transcation = payload.payload;
    },
  },
});

const { setTransaction } = transactionDetailSlice.actions;

export const fetchTransactionDetail =
  (id: string): ReduxAction =>
  async (dispatch: any) => {
    // make a request to fetch transactions detail
    const transactionDetailResponse =
      await spendbookFetch.transactions.getTransaction(id);
    // set the responses to the state
    if (transactionDetailResponse.data) {
      dispatch(setTransaction(transactionDetailResponse.data));
    }
  };

const transactionDetailSliceReducer = transactionDetailSlice.reducer;

export default transactionDetailSliceReducer;

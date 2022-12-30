import { createSlice } from "@reduxjs/toolkit";
import { CreateTransactionData } from "../../services/spendbook/transaction.requests";
import { ReduxAction } from "../../redux/ReduxAction.type";
import spendbookFetch from "../../services/spendbook/spendbookFetch";

const initialState = {};

export const transactionEditSlice = createSlice({
  name: "transactionEdit",
  initialState,
  reducers: {},
});

export const editTransaction =
  (data: CreateTransactionData, id: string): ReduxAction =>
  async () => {
    await spendbookFetch.transactions.editTransaction(data, id);
  };

export const patchTransaction =
  (data: CreateTransactionData, id: string): ReduxAction =>
  async () => {
    await spendbookFetch.transactions.patchTransaction(data, id);
  };

const transactionEditSliceReducer = transactionEditSlice.reducer;

export default transactionEditSliceReducer;

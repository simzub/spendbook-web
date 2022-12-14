import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserResponse,
  CreateTransactionData,
} from "../../services/spendbook/transaction.requests";
import { ReduxAction } from "../../redux/ReduxAction.type";
import spendbookFetch from "../../services/spendbook/spendbookFetch";

interface TransactionsCreateState {
  isLoading: boolean;
  payers: UserResponse[];
}

const initialState: TransactionsCreateState = { isLoading: false, payers: [] };

export const transactionsCreateSlice = createSlice({
  name: "transactionsCreate",
  initialState,
  reducers: {
    setIsLoading: (
      state: TransactionsCreateState,
      payload: PayloadAction<boolean>
    ) => {
      state.isLoading = payload.payload;
    },
    setPayers: (
      state: TransactionsCreateState,
      payload: PayloadAction<UserResponse[]>
    ) => {
      state.payers = payload.payload;
    },
  },
});

export const { setIsLoading, setPayers } = transactionsCreateSlice.actions;

export const fetchPayers = (): ReduxAction => async (dispatch: any) => {
  const response = await spendbookFetch.users.getPayers();
  if (response.data) {
    dispatch(setPayers(response.data.items));
  }
};

export const createTransaction =
  (data: CreateTransactionData): ReduxAction =>
  async (dispatch: any) => {
    dispatch(setIsLoading(true));
    await spendbookFetch.transactions.postTransaction(data);
    dispatch(setIsLoading(false));
  };

const transactionsCreateSliceReducer = transactionsCreateSlice.reducer;

export default transactionsCreateSliceReducer;

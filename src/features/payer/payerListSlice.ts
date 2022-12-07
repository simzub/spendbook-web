import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface PayerItem {
  id: number;
  name: string;
}

interface PayerState {
  payers: PayerItem[];
}

const initialState: PayerState = {
  payers: [
    { id: 1, name: "Lukas" },
    { id: 2, name: "Simonas" },
  ],
};

const payerListSlice = createSlice({
  name: "payerList",
  initialState,
  reducers: {},
});

export const selectPayers = (state: RootState) => state.payerList.payers;

// Remove comment when reducers will be added
// export const { payerState } = payerSlice.actions;
export default payerListSlice.reducer;

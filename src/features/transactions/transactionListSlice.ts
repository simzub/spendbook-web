import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TransactionItem {
  id: string;
  date: string;
  location: string;
  payer: string;
  amount: number;
  currency: string;
}

interface TransactionState {
  transactions: TransactionItem[];
}

const initialState: TransactionState = {
  transactions: [
    {
      id: '1',
      date: '2022-11-25',
      location: 'McDonalds',
      payer: 'Lukas',
      amount: 24.12,
      currency: 'EUR',
    },
    {
      id: '2',
      date: '2022-11-25',
      location: 'Manami',
      payer: 'Simonas',
      amount: 24.12,
      currency: 'EUR',
    },
    {
      id: '3',
      date: '2022-11-25',
      location: 'Maxima',
      payer: 'Lukas',
      amount: 24.12,
      currency: 'EUR',
    },
    {
      id: '4',
      date: '2022-11-25',
      location: 'McDonalds',
      payer: 'Lukas',
      amount: 24.12,
      currency: 'EUR',
    },
    {
      id: '5',
      date: '2022-11-25',
      location: 'KFC',
      payer: 'Simonas',
      amount: 24.12,
      currency: 'EUR',
    },
  ],
};

const transactionListSlice = createSlice({
  name: 'transactionList',
  initialState,
  reducers: {},
});

export const selectTransactions = (state: RootState) => state.transactionList.transactions;

// Remove comment when reducers will be added
// export const { transactionState } = transactionSlice.actions;
export default transactionListSlice.reducer;

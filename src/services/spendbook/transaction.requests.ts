import SpendbookClient from "./SpendbookClient";

export interface GetOverviewResponse {
  transactionCount: number;
  totalPaid: string;
  balance: string;
  currency: string;
}

export interface ItemQueryResultMetadata {
  searchQuery?: string;
  count: number;
  offset?: number;
  limit?: number;
  total?: number;
  hasNext?: boolean;
}

export interface ItemQueryResponse<T> {
  metadata: ItemQueryResultMetadata;
  items: T[];
}

export interface UserResponse {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
}

export interface TransactionResponse {
  id: number;
  timestamp: string;
  location: string;
  amount: string;
  currency: string;
  payer: UserResponse;
  notes?: string;
  createdBy: UserResponse;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTransactionData {
  timestamp: string; // format is ISO8601 (e.g. '2022-12-13T08:23:55.829Z')
  location: string;
  amount: number;
  payer: number;
  notes?: string;
}
export interface DeteleTransaction {
  id: string;
}

const getTransactionOverview = () =>
  SpendbookClient.get<GetOverviewResponse>("/transactions/overview");

const getTransactions = () =>
  SpendbookClient.get<ItemQueryResponse<TransactionResponse>>("/transactions");

const postTransaction = (data: CreateTransactionData) =>
  SpendbookClient.post<TransactionResponse>("/transactions", data);

const getTransaction = (id: string) =>
  SpendbookClient.get<TransactionResponse>(`/transactions/${id}`);

const deleteTransaction = (id: string) =>
  SpendbookClient.delete<DeteleTransaction>(`/transactions/${id}`);

const editTransaction = (data: CreateTransactionData, id: string) =>
  SpendbookClient.post<TransactionResponse>(`/transactions/${id}`, data);

const patchTransaction = (data: CreateTransactionData, id: string) =>
  SpendbookClient.patch<TransactionResponse>(`/transactions/${id}`, data);

export default {
  getTransactionOverview,
  getTransactions,
  postTransaction,
  getTransaction,
  deleteTransaction,
  editTransaction,
  patchTransaction,
};

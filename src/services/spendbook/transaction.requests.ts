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

const getTransactionOverview = () =>
  SpendbookClient.get<GetOverviewResponse>("/transactions/overview");

const getTransactions = () =>
  SpendbookClient.get<ItemQueryResponse<TransactionResponse>>("/transactions");

export default {
  getTransactionOverview,
  getTransactions,
};

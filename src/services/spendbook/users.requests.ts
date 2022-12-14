import { ItemQueryResponse, UserResponse } from "./transaction.requests";
import SpendbookClient from "./SpendbookClient";

export interface TokenUserResponse {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const getTokenUser = () => SpendbookClient.get<TokenUserResponse>("/users/me");

const getPayers = () =>
  SpendbookClient.get<ItemQueryResponse<UserResponse>>("/users");

export default {
  getTokenUser,
  getPayers,
};

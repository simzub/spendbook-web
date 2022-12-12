import SpendbookClient from "./SpendbookClient";

export interface GetAuthTokenRequestData {
  email: string;
  password: string;
}

export interface GetAuthTokenResponseData {
  accessToken: string;
}

const getAuthToken = (body: GetAuthTokenRequestData) =>
  SpendbookClient.post<GetAuthTokenResponseData>("/auth/token", body);

export default {
  getAuthToken,
};

import { createSlice } from "@reduxjs/toolkit";
import SpendbookClient from "../../services/spendbook/SpendbookClient";
import { getUserInformation } from "../../redux/user.slice";
import spendbookFetch from "../../services/spendbook/spendbookFetch";
import { GetAuthTokenRequestData } from "../../services/spendbook/auth.requests";
import { RootState } from "../../app/store";
import { ReduxAction } from "../../redux/ReduxAction.type";

interface LoginState {
  isLoading: boolean;
}

const initialState: LoginState = {
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions } = loginSlice;

export const login =
  (data: GetAuthTokenRequestData): ReduxAction =>
  async (dispatch) => {
    dispatch(actions.startLoading());
    const response = await spendbookFetch.auth.getAuthToken(data);
    if (response.data) {
      SpendbookClient.setToken(response.data?.accessToken);
      dispatch(getUserInformation());
    } else {
      console.error(response.error?.message || response.error?.error);
      // toast.error(response.error?.message || response.error?.error);
    }
    dispatch(actions.stopLoading());
  };

export const loginSliceSelectors = {
  isLoading: (state: RootState) => state.login.isLoading,
};

const loginSliceReducer = loginSlice.reducer;

export default loginSliceReducer;

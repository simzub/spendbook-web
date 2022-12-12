import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SpendbookClient from "../services/spendbook/SpendbookClient";
import spendbookFetch from "../services/spendbook/spendbookFetch";
import { ReduxAction } from "./ReduxAction.type";
import { TokenUserResponse } from "../services/spendbook/users.requests";
import { RootState } from "../app/store";

interface UserState {
  isChecked: boolean;
  isFetching: boolean;
  user?: TokenUserResponse;
}

const initialState: UserState = {
  isChecked: false,
  isFetching: true,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isFetching = true;
    },
    startChecking: (state) => {
      state.isChecked = initialState.isChecked;
      state.isFetching = initialState.isFetching;
    },
    setNotLoggedIn: (state) => {
      state.isChecked = true;
      state.isFetching = false;
    },
    getUserInformationSuccess: (
      state,
      action: PayloadAction<TokenUserResponse>
    ) => {
      state.isFetching = false;
      state.isChecked = true;
      state.user = action.payload;
    },
    finishFetching: (state) => {
      state.isFetching = false;
      state.isChecked = true;
    },
    logout: () => {
      SpendbookClient.clearToken();
    },
  },
});

const { startLoading, logout, getUserInformationSuccess, finishFetching } =
  userSlice.actions;

export const getUserInformation = (): ReduxAction => async (dispatch) => {
  dispatch(startLoading());
  const userResponse = await spendbookFetch.users.getTokenUser();
  if (userResponse.data) {
    dispatch(getUserInformationSuccess(userResponse.data));
    dispatch(finishFetching());
  } else if (userResponse.status === 401) {
    dispatch(userSlice.actions.setNotLoggedIn());
  } else {
    // TODO ADD TOAST
    // toast.error(userResponse.error?.message);
  }
};

export const logoutUser = logout;

export const selectIsChecked = (state: RootState) => state.users.isChecked;
export const selectIsFetching = (state: RootState) => state.users.isFetching;
export const selectIsAuthenticated = (state: RootState) =>
  Boolean(state.users.user);

const userSliceReducer = userSlice.reducer;

export default userSliceReducer;

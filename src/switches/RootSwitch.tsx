import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "../pages/loginPage/LoginPage";
import RequireAuth from "./RequireAuth";
import InnerSwitch from "./InnerSwitch";
import { getUserInformation, selectIsChecked } from "../redux/user.slice";
import { useAppDispatch, useAppSelector } from "../app/hook";

function RootSwitch() {
  const dispatch = useAppDispatch();

  const isChecked = useAppSelector(selectIsChecked);

  useEffect(() => {
    if (!isChecked) {
      dispatch(getUserInformation());
    }
  }, [isChecked]);

  if (!isChecked) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <RequireAuth type={"public"}>
            <LoginPage />
          </RequireAuth>
        }
      />
      <Route
        path="*"
        element={
          <RequireAuth type={"private"}>
            <InnerSwitch />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default RootSwitch;

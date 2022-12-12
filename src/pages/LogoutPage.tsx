import { useEffect } from "react";
import { useAppDispatch } from "../app/hook";
import { logoutUser } from "../redux/user.slice";

function LogoutPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logoutUser());
  });

  return <></>;
}

export default LogoutPage;

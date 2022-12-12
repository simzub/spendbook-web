import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import { selectIsAuthenticated } from "../redux/user.slice";

type RouteType = "public" | "private";

interface RequireAuthProps {
  type: RouteType;
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = (props) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (isAuthenticated && props.type === "public") {
    // logged in so redirect to index page
    return <Navigate to={"/"} />;
  }

  if (!isAuthenticated && props.type === "private") {
    // not logged in so redirect to login page with the return url
    return <Navigate to={"/login"} />;
  }

  // All good
  return <>{props.children}</>;
};

export default RequireAuth;

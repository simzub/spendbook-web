import { Navigate, RouteObject } from "react-router-dom";
import LogoutPage from "../pages/LogoutPage";
import Main from "../pages/TransactionsPage";
import NewTransactionPage from "../pages/NewTransactionPage";

const routes: RouteObject[] = [
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/transactions",
    children: [
      {
        path: "",
        element: <Main />,
        index: true,
      },
      {
        path: "new",
        element: <NewTransactionPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/transactions"} />,
  },
];

export default routes;

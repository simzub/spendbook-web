import { Navigate, RouteObject } from "react-router-dom";
import LogoutPage from "../pages/LogoutPage";
import TransactionsPage from "../pages/transactions/TransactionsPage";
import NewTransactionPage from "../pages/transactions/NewTransactionPage";

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
        element: <TransactionsPage />,
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

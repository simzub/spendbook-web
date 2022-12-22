import { Navigate, RouteObject } from "react-router-dom";
import LogoutPage from "../pages/LogoutPage";
import TransactionPage from "../pages/transactions/TransactionsPage";
import NewTransactionPage from "../pages/transactions/NewTransactionPage";
import TransactionDetailPage from "../pages/transactions/TransactionDetailPage";

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
        element: <TransactionPage />,
        index: true,
      },
      {
        path: "new",
        element: <NewTransactionPage />,
      },
      {
        path: ":transactionId",
        element: <TransactionDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/transactions"} />,
  },
];

export default routes;

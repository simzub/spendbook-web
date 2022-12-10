import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import RequireAuth from "./components/RequireAuth";
import InnerSwitch from "./components/InnerSwitch";
import { store } from "./app/store";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RequireAuth type={"public"}>
        <LoginPage />
      </RequireAuth>
    ),
  },
  {
    path: "*",
    element: (
      <RequireAuth type={"private"}>
        <InnerSwitch />
      </RequireAuth>
    ),
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

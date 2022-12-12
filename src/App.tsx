import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import RootSwitch from "./switches/RootSwitch";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootSwitch />
      </BrowserRouter>
    </Provider>
  );
}

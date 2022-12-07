import Login from './components/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import InnerSwitch from './components/InnerSwitch';
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RequireAuth type={'public'}>
        <Login />
      </RequireAuth>
    ),
  },
  {
    path: '*',
    element: (
      <RequireAuth type={'private'}>
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

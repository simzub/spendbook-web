import { Navigate, RouteObject } from 'react-router-dom';
import LogoutPage from './LogoutPage';
import Main from './Main';
import NewTransaction from './NewTransaction';

export const routes: RouteObject[] = [
  {
    path: '/logout',
    element: <LogoutPage />,
  },
  {
    path: '/transactions',
    children: [
      {
        path: '',
        element: <Main />,
        index: true,
      },
      {
        path: 'new',
        element: <NewTransaction />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/transactions'} />,
  },
];

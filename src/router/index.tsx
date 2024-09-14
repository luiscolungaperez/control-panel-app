import { Layout } from '@/components/common/layout';
import Dashboard from '@/pages/dashboard';
import Login from '@/pages/login';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    id: 'login',
    path: '/',
    Component: Login,
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
    ],
  },
]);

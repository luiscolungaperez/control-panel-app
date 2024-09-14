import { Layout } from '@/components/common/layout';
import Dashboard from '@/pages/dashboard';
import Login from '@/pages/login';
import { createBrowserRouter, redirect } from 'react-router-dom';

const isAuthenticated = localStorage.getItem('Authorization');

export const router = createBrowserRouter([
  {
    id: 'login',
    path: '/',
    Component: Login,
    loader() {
      if (isAuthenticated) return redirect('/dashboard');
      return null;
    },
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    Component: Layout,
    loader() {
      if (!isAuthenticated) return redirect('/');

      return null;
    },
    children: [
      {
        index: true,
        Component: Dashboard,
      },
    ],
  },
]);

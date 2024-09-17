import { Layout } from '@/components/common/layout';
import Login from '@/pages/login';
import Messages from '@/pages/messages';
import Profile from '@/pages/profile';
import User from '@/pages/user';
import Users from '@/pages/users';
import { createBrowserRouter, redirect } from 'react-router-dom';

const isAuthenticated = localStorage.getItem('Authorization');

export const router = createBrowserRouter([
  {
    id: 'login',
    path: '/login',
    Component: Login,
    loader() {
      if (isAuthenticated) return redirect('/');
      return null;
    },
  },
  {
    id: 'root',
    path: '/',
    Component: Layout,
    loader() {
      if (!isAuthenticated) return redirect('/login');

      return null;
    },
    children: [
      {
        index: true,
        Component: Users,
      },
      {
        path: 'profile',
        Component: Profile,
      },
      {
        path: 'user/:name',
        Component: User,
      },
      {
        path: 'messages',
        Component: Messages,
      },
    ],
  },
]);

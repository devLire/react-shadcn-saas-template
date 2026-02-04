import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/pages/layouts/MainLayout.tsx';
import { HomePage } from '@/pages/home/pages/HomePage.tsx';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

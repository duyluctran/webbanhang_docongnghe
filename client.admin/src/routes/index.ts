import { lazy } from 'react';

export const routers = [
  {
    path: '/',
    element: lazy(() => import('features/home')),
  },
];

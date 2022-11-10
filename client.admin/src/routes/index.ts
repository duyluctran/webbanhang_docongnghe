import routes from 'configs/routes.json';
import { lazy, LazyExoticComponent } from 'react';

interface RouteInfo {
  keyPath: Array<keyof typeof routes>[0];
  element: LazyExoticComponent<() => JSX.Element>;
}

export const routers: RouteInfo[] = [
  {
    keyPath: 'Home',
    element: lazy(() => import('features/home')),
  },
  {
    keyPath: 'User',
    element: lazy(() => import('features/user')),
  },
];

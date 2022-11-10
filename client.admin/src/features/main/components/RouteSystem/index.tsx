import { PageLoading } from '@ant-design/pro-layout';
import routes from 'configs/routes.json';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routers } from 'routes';
const RouteSystem: React.FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {routers.map((route) => {
          const Element = route.element;
          return <Route key={route.keyPath} path={routes[route.keyPath]} element={<Element />} />;
        })}
      </Routes>
    </Suspense>
  );
};
export default RouteSystem;

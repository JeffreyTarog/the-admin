import { Routes, Route, RouteObject } from 'react-router-dom';

// Backyard Route Pages
import LandingPage from '../views/backyard/LandingPage.tsx'
import PageNotFound from '../views/backyard/PageNotFound.tsx';

// External Routes
import hrisRoutes from './hris/hrisRoutes.tsx';

const backyardRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage/>,
  },
  // 404 Page not Found
  {
    path: '/:pathMatch(.*)/*',
    element: <PageNotFound/>
  },
];

const parentRoutes: RouteObject[] = [
  ...backyardRoutes,
  ...hrisRoutes
];

/**
 * Recursive function to render nested routes
 */
const renderRoutes = (routes: RouteObject[]) => {
  return routes.map((route, index) => {
    const { path, element, children } = route;
    return (
      <Route key={index} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    );
  });
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {renderRoutes(parentRoutes)}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;

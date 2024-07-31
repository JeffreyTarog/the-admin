import { Routes, Route, RouteObject } from 'react-router-dom';

// Backyard Route Pages
import LandingPage from '../views/backyard/LandingPage.tsx'
import PageNotFound from '../views/backyard/PageNotFound.tsx';

// External Routes
import hrisRoutes from './hris/hrisRoutes.tsx'

const backyardRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage/>,
  },
  // 404 Page not Found
  {
    path: '/:pathMatch(.*)*',
    element: <PageNotFound/>
  },
];

const allRoutes: RouteObject[] = [
  ...backyardRoutes,
  ...hrisRoutes
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {allRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))},
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;

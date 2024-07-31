import { RouteObject } from 'react-router-dom';

// Pages
import DashboardPage from '../../views/hris/DashboardPage';

const hrisRoutes: RouteObject[] = [
  {
    path: '/hris/dashboard',
    element: <DashboardPage/>,
  },
];

export default hrisRoutes;

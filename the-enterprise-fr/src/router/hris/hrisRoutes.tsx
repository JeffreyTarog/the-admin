import { RouteObject } from 'react-router-dom';

import coreHRRoutes from './coreHRRoutes'

// HRIS System Layout
import HRISLayout from '../../components/hris/misc/HRISLayout';

const hrisRoutes: RouteObject[] = [
  {
    path: '/hris',
    element: <HRISLayout />,
    children: [
      ...coreHRRoutes,
    ],
  },
];

export default hrisRoutes;

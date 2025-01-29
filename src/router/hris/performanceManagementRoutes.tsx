import { RouteObject } from 'react-router-dom';
import PerformanceManagementLayout from '../../components/layouts/hris/performance-management/PerformanceManagementLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';

const performanceManagementRoutes: RouteObject[] = [
  {
    path: 'performance-management',
    element: <PerformanceManagementLayout />,
    children: [
      {
        path: 'goal-setting-configuration',
        element: <EmployeeManagementView />,
        id: "goal_setting_configuration"
      },
      {
        path: 'performance-review-management',
        element: <EmployeeManagementView />,
        id: "performance_review_management"
      },
    ]
  },
];

export default performanceManagementRoutes;

import { RouteObject } from 'react-router-dom';
import IntegrationAPILayout from '../../components/layouts/hris/integration-api/IntegrationAPILayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';

const integrationAPIRoutes: RouteObject[] = [
  {
    path: 'integration-api',
    element: <IntegrationAPILayout />,
    children: [
      {
        path: 'api-management',
        element: <EmployeeManagementView />,
        id: "api_management"
      },
      {
        path: 'integration-settings',
        element: <EmployeeManagementView />,
        id: "integration_settings"
      },
    ]
  },
];

export default integrationAPIRoutes;

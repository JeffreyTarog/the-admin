import { RouteObject } from 'react-router-dom';
import SupportHelpDeskLayout from '../../components/layouts/hris/support-helpdesk/SupportHelpDeskLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';

const supportHelpDeskRoutes: RouteObject[] = [
  {
    path: 'support-helpdesk',
    element: <SupportHelpDeskLayout />,
    children: [
      {
        path: 'support-management',
        element: <EmployeeManagementView />,
        id: "support_management"
      },
      {
        path: 'knowledge-base-management',
        element: <EmployeeManagementView />,
        id: "knowledge_base_management"
      },
    ]
  },
];

export default supportHelpDeskRoutes;

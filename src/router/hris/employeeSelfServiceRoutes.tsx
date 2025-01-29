import { RouteObject } from 'react-router-dom';
import EmployeeSelfServiceLayout from '../../components/layouts/hris/employee-self-service/EmployeeSelfServiceLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';

const employeeSelfServiceRoutes: RouteObject[] = [
  {
    path: 'employee-self-service',
    element: <EmployeeSelfServiceLayout />,
    children: [
      {
        path: 'portal-customization',
        element: <EmployeeManagementView />,
        id: "portal_customization"
      },
      {
        path: 'access-control',
        element: <EmployeeManagementView />,
        id: "access_control"
      },
    ]
  },
];

export default employeeSelfServiceRoutes;

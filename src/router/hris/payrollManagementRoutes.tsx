import { RouteObject } from 'react-router-dom';
import PayrollManagementLayout from '../../components/layouts/hris/payroll-management/PayrollManagementLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';
import UserAccessRolesView from '../../views/hris/core-hr/UsersAccessRolesView';

const payrollManagementRoutes: RouteObject[] = [
  {
    path: 'payroll-management',
    element: <PayrollManagementLayout />,
    children: [
      {
        path: 'payroll-setup',
        element: <EmployeeManagementView />,
        id: "payroll_setup"
      },
      {
        path: 'payroll-processing-approval',
        element: <EmployeeManagementView />,
        id: "payroll_processing_approval"
      },
      {
        path: 'onboarding-workflow',
        element: <UserAccessRolesView />,
        id: "onboarding_workflow",
      },
    ]
  },
];

export default payrollManagementRoutes;

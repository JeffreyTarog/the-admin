import { RouteObject } from 'react-router-dom';
import BenfitsAdministrationLayout from '../../components/layouts/hris/benefits-administration/BenefitsAdministrationLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';

const benefitsAdministrationRoutes: RouteObject[] = [
  {
    path: 'benefits',
    element: <BenfitsAdministrationLayout />,
    children: [
      {
        path: 'plan-setup',
        element: <EmployeeManagementView />,
        id: "benefits_plan_setup"
      },
      {
        path: 'vendor-management',
        element: <EmployeeManagementView />,
        id: "vendor_management"
      },
    ]
  },
];

export default benefitsAdministrationRoutes;

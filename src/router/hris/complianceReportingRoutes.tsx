import { RouteObject } from 'react-router-dom';
import ComplianceReportingLayout from '../../components/layouts/hris/compliance-reporting/ComplianceReportingLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';

const complianceReportingRoutes: RouteObject[] = [
  {
    path: 'compliance-reporting',
    element: <ComplianceReportingLayout />,
    children: [
      {
        path: 'regulatory-compliance-configuration',
        element: <EmployeeManagementView />,
        id: "regulatory_compliance_configuration"
      },
      {
        path: 'reporting',
        element: <EmployeeManagementView />,
        id: "reporting"
      },
    ]
  },
];

export default complianceReportingRoutes;

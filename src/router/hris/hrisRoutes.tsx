import { RouteObject } from 'react-router-dom';

// HRIS Routes
import coreHRRoutes from './coreHRRoutes'
import recruitmentRoutes from './recruitmentOnboardingRoutes';
import timeAttendanceRoutes from './timeAttendanceRoutes';
import payrollManagementRoutes from './payrollManagementRoutes';
import benefitsAdministrationRoutes from './benefitsAdministrationRoutes';
import performanceManagementRoutes from './performanceManagementRoutes';
import trainingDevelopmentRoutes from './trainingDevelopmentRoutes';
import employeeSelfServiceRoutes from './employeeSelfServiceRoutes';
import complianceReportingRoutes from './complianceReportingRoutes';
import integrationAPIRoutes from './integrationAPIRoutes';
import supportHelpDeskRoutes from './supportHelpDeskRoutes';

// HRIS System Layout
import HRISLayout from '../../components/hris/misc/HRISLayout';

const hrisRoutes: RouteObject[] = [
  {
    path: '/hris',
    element: <HRISLayout />,
    children: [
      ...coreHRRoutes,
      ...recruitmentRoutes,
      ...timeAttendanceRoutes,
      ...payrollManagementRoutes,
      ...benefitsAdministrationRoutes,
      ...performanceManagementRoutes,
      ...trainingDevelopmentRoutes,
      ...employeeSelfServiceRoutes,
      ...complianceReportingRoutes,
      ...integrationAPIRoutes,
      ...supportHelpDeskRoutes,
    ],
  },
];

export default hrisRoutes;

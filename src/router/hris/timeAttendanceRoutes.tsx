import { RouteObject } from 'react-router-dom';
import TimeAttendanceLayout from '../../components/layouts/hris/time-attendance/TimeAttendanceLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';

const timeAttendanceRoutes: RouteObject[] = [
  {
    path: 'time-attendance',
    element: <TimeAttendanceLayout />,
    children: [
      {
        path: 'time-tracking-configuration',
        element: <EmployeeManagementView />,
        id: "time_tracking_configuration"
      },
      {
        path: 'leave-management',
        element: <EmployeeManagementView />,
        id: "leave_management"
      },
    ]
  },
];

export default timeAttendanceRoutes;

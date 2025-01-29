import { RouteObject } from 'react-router-dom';
import RecruitmentLayout from '../../components/layouts/hris/recruitment-onboarding/RecruitmentOnboardingLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';
import UserAccessRolesView from '../../views/hris/core-hr/UsersAccessRolesView';

const recruitmentOnboardingRoutes: RouteObject[] = [
  {
    path: 'recruitment',
    element: <RecruitmentLayout />,
    children: [
      {
        path: 'job-posting',
        element: <EmployeeManagementView />,
        id: "job_posting"
      },
      {
        path: 'applicant-tracking',
        element: <EmployeeManagementView />,
        id: "applicant_tracking"
      },
      {
        path: 'onboarding-workflow',
        element: <UserAccessRolesView />,
        id: "onboarding_workflow",
      },
    ]
  },
];

export default recruitmentOnboardingRoutes;

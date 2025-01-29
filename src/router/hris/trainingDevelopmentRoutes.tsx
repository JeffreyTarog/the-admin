import { RouteObject } from 'react-router-dom';
import TrainingDevelopmentLayout from '../../components/layouts/hris/training-development/TrainingDevelopmentLayout';

import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';

const trainingDevelopmentRoutes: RouteObject[] = [
  {
    path: 'training-development',
    element: <TrainingDevelopmentLayout />,
    children: [
      {
        path: 'learning-management-integration',
        element: <EmployeeManagementView />,
        id: "learning_management_integration"
      },
      {
        path: 'skill-certification-tracking',
        element: <EmployeeManagementView />,
        id: "skill_certification_tracking"
      },
    ]
  },
];

export default trainingDevelopmentRoutes;

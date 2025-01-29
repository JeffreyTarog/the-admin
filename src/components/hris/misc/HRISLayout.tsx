// import { Outlet } from "react-router-dom";
import Sidebar, { SidebarItems, SidebarSubmenuItems } from "./Sidebar";

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

import {
  SquareUser,
  UserRoundSearch,
  CalendarClock,
  HandCoins,
  HeartHandshake,
  TrendingUpDown,
  BookUp,
  BookUser,
  ShieldCheck,
  Waypoints,
  Headset,
} from "lucide-react";

const HRISLayout: React.FC = () => {
  return (
    <>
      <div className="flex w-screen h-screen overflow-x-hidden">
        <div className="flex w-full h-full overflow-y-auto">
          <Sidebar>
            <SidebarItems icon={<SquareUser size={20}/>} text="Core HR" alert={false} >
                <SidebarSubmenuItems text="Dashboard" link="/hris/core-hr/dashboard"/>
                <SidebarSubmenuItems text="Employee Management" link="/hris/core-hr/employee-management"/>
                <SidebarSubmenuItems text="User Access & Roles" link="/hris/core-hr/user-access-roles"/>
            </SidebarItems>
            <SidebarItems icon={<UserRoundSearch size={20}/>} text="Recruitment & Onboarding" alert={false} >
              <SidebarSubmenuItems text="Job Posting" link="/hris/recruitment/job-posting"/>
              <SidebarSubmenuItems text="Applicant Tracking" link="/hris/recruitment/applicant-tracking"/>
              <SidebarSubmenuItems text="Onboarding Workflow Configuration" link="/hris/recruitment/onboarding-workflow"/>
            </SidebarItems>
            <SidebarItems icon={<CalendarClock size={20}/>} text="Time & Attendance" alert={false} >
              <SidebarSubmenuItems text="Time Tracking Configuration" link="/hris/time-attendance/time-tracking-configuration"/>
              <SidebarSubmenuItems text="Leave Management" link="/hris/time-attendance/leave-management"/>
            </SidebarItems>
            <SidebarItems icon={<HandCoins size={20}/>} text="Payroll Management" alert={false} >
              <SidebarSubmenuItems text="Payroll Setup" link="/hris/payroll-management/payroll-setup"/>
              <SidebarSubmenuItems text="Payroll Processing & Approval" link="/hris/payroll-management/payroll-processing-approval"/>
            </SidebarItems>
            <SidebarItems icon={<HeartHandshake size={20}/>} text="Benefits Administration" alert={false} >
              <SidebarSubmenuItems text="Benefits Plan Setup" link="/hris/benefits/plan-setup"/>
              <SidebarSubmenuItems text="Vendor Management" link="/hris/benefits/vendor-management"/>
            </SidebarItems>
            <SidebarItems icon={<TrendingUpDown size={20}/>} text="Performance Management" alert={false} >
              <SidebarSubmenuItems text="Goal Setting Configuration" link="/hris/performance-management/goal-setting-configuration"/>
              <SidebarSubmenuItems text="Performance Review Management" link="/hris/performance-management/performance-review-management"/>
            </SidebarItems>
            <SidebarItems icon={<BookUp size={20}/>} text="Training & Development" alert={false} >
              <SidebarSubmenuItems text="Learning Management Integration" link="/hris/training-development/learning-management-integration"/>
              <SidebarSubmenuItems text="Skill & Certification Tracking" link="/hris/training-development/skill-certification-tracking"/>
            </SidebarItems>
            <SidebarItems icon={<BookUser size={20}/>} text="Employee Self-Service (ESS)" alert={false} >
              <SidebarSubmenuItems text="ESS Portal Customization" link="/hris/employee-self-service/portal-customization"/>
              <SidebarSubmenuItems text="Access Control for ESS" link="/hris/employee-self-service/access-control"/>
            </SidebarItems>
            <SidebarItems icon={<ShieldCheck size={20}/>} text="Compliance & Reporting" alert={false} >
              <SidebarSubmenuItems text="Regulatory Compliance Configuration" link="/hris/compliance-reporting/regulatory-compliance-configuration"/>
              <SidebarSubmenuItems text="Reporting" link="/hris/compliance-reporting/reporting"/>
            </SidebarItems>
            <SidebarItems icon={<Waypoints size={20}/>} text="Integration & APIs" alert={false} >
              <SidebarSubmenuItems text="API Management" link="/hris/integration-api/api-management"/>
              <SidebarSubmenuItems text="Integration Settings" link="/hris/integration-api/integration-settings"/>
            </SidebarItems>
            <SidebarItems icon={<Headset size={20}/>} text="Support & Helpdesk" alert={false} >
              <SidebarSubmenuItems text="Support Management" link="/hris/support-helpdesk/support-management"/>
              <SidebarSubmenuItems text="Knowledge Base Management" link="/hris/support-helpdesk/knowledge-base-management"/>
            </SidebarItems>
          </Sidebar>
          <div className="flex-1 h-full w-full">
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-none z-20 m-0 w-full h-16">
                <Navbar/>
              </div>
              <div className="flex-1 w-full h-full bg-slate-100 dark:bg-slate-gray">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRISLayout;

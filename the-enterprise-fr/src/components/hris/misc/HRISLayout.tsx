// import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

// type LayoutProps = {
//   children: React.ReactNode
// }

const HRISLayout: React.FC = () => {
  return (
    <>
      <div className="flex w-screen h-screen overflow-x-hidden">
        <div className="flex w-full h-full overflow-y-auto">
          <Sidebar>
            {/* Menu and Submenu Items */}
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

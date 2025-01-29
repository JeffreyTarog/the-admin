import { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../stores/misc/store';

import {
  SquareUser,
  ChevronRight,
} from "lucide-react";

function Navbar() {
  const currentPageTitle = useSelector((state: RootState) => state.page.currentPageTitle);

  const [showSubMenu, setShowSubMenu] = useState(false);

  interface SubMenu {
    key: string;
    text: string;
  }

  function toggleSubMenu() {
    setShowSubMenu(!showSubMenu);
  }

  function SubMenu(props:SubMenu) {
    return (
      <div className="flex">
        <div id="dropdownNavbar" className="absolute right-0 z-10 font-poppins bg-white divide-y divide-slate-100 rounded-lg shadow w-44 dark:bg-slate-800 dark:divide-slate-600 transition ease-in-out delay-150 transform ">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 dark:text-slate-200 dark:hover:text-white">{props.text}</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="w-full h-full bg-slate-50 dark:bg-slate-700 dark:border-slate-700 border-b shadow-sm font-poppins font-extralight">
        <div className="max-w-full h-full flex flex-wrap items-center justify-between ml-auto px-4">
          <div className="flex items-center space-x-2 dark:text-slate-50">
            <SquareUser size={25} />
            <Link to="/hris/core-hr/dashboard">
              <span className=" hover:dark:text-slate-300 underline underline-offset-2">Core HR</span>
            </Link>
            <ChevronRight size={25} />
            <span className="mx-1 text-gray-700 dark:text-slate-50">
              {currentPageTitle ? currentPageTitle : 'Welcome'}
            </span>
          </div>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="w-full md:block md:w-fit px-2" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-none dark:border-none">
              <li>
                <div className="relative">
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" onClick={toggleSubMenu} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-infor md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-infor dark:focus:text-white dark:border-none dark:hover:bg-none md:dark:hover:bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  { showSubMenu ? <SubMenu key="Submenu1" text="Test Sign Out"/> : ''}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

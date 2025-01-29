import { Link, useLocation, useMatch } from 'react-router-dom';
import { createContext, useContext, useState } from "react";

import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../reducers/misc/pageReducer';
import { AppDispatch } from '../../../stores/misc/store';

// Logo for sidebar
import AnexLogo from '../../../assets/img/anex-white-png.png';

import {
  ChevronDown,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

interface SidebarContextProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(true)
  return (
    <>
      <aside className='h-full'>
        <nav className="h-full flex flex-col bg-slate-50 dark:bg-slate-800 dark:text-slate-50 border-r dark:border-slate-700 shadow-sm">
          <div className="h-full flex flex-col overflow-y-auto" id="menu-wrapper">
            <div className="p-4 pb-2 flex justify-between items-center">
              <img src={AnexLogo}
                className={`overflow-hidden transition-all ${ expanded ? "h-auto w-20" : "w-0"}` } alt="Anex"/>
              <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
                onClick={() => setExpanded(expanded => !expanded)}>
                {expanded ? <ChevronsLeft/>:<ChevronsRight/>}
              </button>
            </div>
            <SidebarContext.Provider value={{ expanded, setExpanded }}>
              <ul className="flex-1 px-3 mt-5">{children}</ul>
            </SidebarContext.Provider>
          </div>
          <div className="border-t dark:border-slate-700 flex p-3">
            <img src="https://ui-avatars.com/api/?background=f76b0a&color=FFFF&bold=true" alt="" className="w-10 h-10 rounded-md" />
            <div className={`flex justify-between items-center
              overflow-hidden transition-all ${ expanded ? "w-52 ml-3" : "w-0"}`}>
              <div className="leading-4 font-poppins">
                <h4 className="font-extralight">John Doe</h4>
                <span className="text-xs text-slate-600 dark:text-slate-200 font-light">johndoe@email.com</span>
              </div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

const isActiveRoute = (path: string | undefined): boolean => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let match = useMatch("/initial-value");

  if (path) // if the path has a defined actual value
  {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    match = useMatch(path);
  }

  return !!match && location.pathname === match.pathname;
};

interface SidebarItemsProps {
  icon?: React.ReactNode;
  text?: string;
  alert?: boolean;
  link?: string;
  children?: React.ReactNode;
}

export const SidebarItems: React.FC<SidebarItemsProps> = ({icon, text, alert, link, children}) => {
  const { expanded, setExpanded } = useContext(SidebarContext) as SidebarContextProps;
  const activeLink = isActiveRoute(link);

  let interalLinkVal = ""; // initial assigned; to be assigned of the link if the param has actual value

  if (link)
  {
    interalLinkVal = link;
  }

  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      {children ?
        <div className='flex flex-col mb-1 relative rounded-md bg-slate-700/60'>
          <div
            className={`flex relative items-center py-2.5 px-3 font-sans text-blue-columbia dark:text-slate-50 rounded-md cursor-pointer transition-colors group
            ${isSubMenuOpen ? "bg-slate-700 dark:bg-slate-600" : " dark:hover:bg- text-slate-700"}`}
            onClick={() => {
              if (!expanded) {
                // If the sidebar is collapsed, expand it and open the submenu
                setExpanded(true);
                setSubMenuOpen(isSubMenuOpen => !isSubMenuOpen);
              } else {
                // If the sidebar is already expanded, toggle the submenu
                setSubMenuOpen(isSubMenuOpen => !isSubMenuOpen);
              }
            }}>
              <span className={`${activeLink ? "text-baby-powder dark:text-slate-500" : ""}`}>
                {icon}
              </span>
              <span className={`font-poppins font-extralight text-sm overflow-hidden transition-all ${ expanded ? "w-52 ml-3" : "hidden"} ${activeLink ? "text-slate-100" : ""}`}>
                {text}
              </span>
              <span>
                {expanded && isSubMenuOpen ? <ChevronDown /> : (expanded ? <ChevronLeft /> : null)}
              </span>
          </div>
          {isSubMenuOpen && children}
        </div>
        :
        <Link to={interalLinkVal}
          className={`flex relative items-center py-2.5 px-3 my-1 font-sans text-oxford-blue dark:text-slate-50 rounded-md cursor-pointer transition-colors group
          ${ activeLink ? "bg-slate-700 dark:bg-dark-orange" : "hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700"}`}>
          <span className={`${activeLink ? "text-baby-powder dark:text-slate-50" : ""}`}>
            {icon}
          </span>
          <span className={`overflow-hidden transition-all ${ expanded ? "w-52 ml-3" : "hidden"} ${activeLink ? "text-slate-100" : ""}`}>
            {text}
          </span>
          {alert && (
            <div className={`absolute right-2 w-2 h-2 rounded bg-red-infor animate-pulse ${expanded ? "" : "top-2"}`}></div>
          )}
          {!expanded &&
            (<div className={`
              absolute left-full rounded-md px-3 py-2 ml-6 font-medium text-nowrap
              bg-slate-700/10 text-slate-700 text-sm dark:bg-dark-orange/10 dark:text-slate-50
              invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
              {text}
            </div>)
          }
        </Link>
      }
    </>
  );
}

type SidebarSubmenuItemsProps = {
  text: string;
  link: string;
}

export const SidebarSubmenuItems: React.FC<SidebarSubmenuItemsProps> = ({text, link}) => {
  const { expanded } = useContext(SidebarContext) as SidebarContextProps;

  const dispatch = useDispatch<AppDispatch>();

  const handleMenuClick = (title: string) => {
    dispatch(setPageTitle(title)); // Dispatch the action to set the page title
  };

  return (
    <>
      { expanded &&
        <div className="rounded cursor-pointer hover:dark:bg-slate-700">
          <div className="flex flex-row w-full">
            <Link to={link} onClick={() => handleMenuClick(text)}
              className="flex w-full pl-11 py-2">
              <span className="text-xs">
                { text }
              </span>
            </Link>
            <span>
            </span>
          </div>
        </div>
      }
    </>
  );
}

export default Sidebar;

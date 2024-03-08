import { FC, createContext, useContext, useState } from "react";
import d20 from "../../public/images/d20.png";
import Image from "next/image";
import { SidebarContextProps } from "../../lib/SidebarContextProps";
import { SidebarProps } from "../../lib/SidebarProps";
import { SidebarItemProps } from "../../lib/SidebarItemProps";

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);
const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [expanded, setExpanded] = useState<Boolean>(true);
  return (
    <aside className="fixed top-0 h-screen ">
      <nav
        className={`h-full flex flex-col  ${
          expanded ? "bg-base-300 shadow-xl z-20" : "bg-base-400"
        }`}
      >
        <div className="flex items-center justify-between p-4 pb-2">
          {/* <Image src={d20} alt="d20logo" className={`w-12 object-cover ${
            expanded ? 'w-12' : 'invisible w-0'
          }`} /> */}

          <h1
            className={`astloch text-4xl overflow-hidden transition-all ${
              expanded ? "w-full" : "w-0"
            }`}
          >
            sideQuest
          </h1>

            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onClick={() => setExpanded((prev) => !prev)}
              />

              {/* hamburger icon */}
              <svg
                className="fill-current swap-on"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="fill-current swap-off"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="flex p-3 border-t">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div
            className={`flex justify-between items-center ml-3
          ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className={`leading-4 ${expanded ? "w-52" : "w-0"}`}>
              <h4 className={`font-semibold`}>John Doe</h4>
              <span className="text-xs text-gray-600">user@useremail.com</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext) || {};
  if (expanded === undefined)
    throw new Error("SidebarItem must be used within Sidebar");
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
        ${
          active
            ? "bg-gradient-to-tr from-base-200 to-base-100 text-gray-800"
            : "hover:bg-base-100 text-gray-600"
        } ${expanded ? "" : "invisible"}`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-32" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-purple-700 ${
            expanded ? "" : "invisible"
          }`}
        />
      )}
      {expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-base-300 text-gray-900 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export default Sidebar;

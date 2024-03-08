import { userProfile } from "@/store/session";
import Link from "next/link";
import { useSelector } from "react-redux";
import IconCharacters from "./icons/IconCharacters";
import IconMap from "./icons/IconMap";
import IconTrophy from "./icons/IconTrophy";
import IconGear from "./icons/IconGear";
import IconID from "./icons/IconID";

export default function Drawer() {
  const user: any = useSelector(userProfile);
  return (
    <div className="m-2 drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="drawer-toggle" />

          {/* hamburger icon */}
          <svg
            className="opacity-100 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="flex flex-col justify-between h-full p-4 menu w-80 bg-base-200 text-base-content">
          <div>
            <h1 className="text-6xl astloch">sideQuest</h1>
            <ul>
              <li>
                <Link href={`/characters`} className="text-xl">
                  <IconCharacters /> Choose Character
                </Link>
              </li>
              <li>
                <Link href={`/characters/usercharacters`} className="text-xl">
                  <IconID /> Your Characters
                </Link>
              </li>
              <li>
                <a className="text-xl">
                  <IconMap />
                  Campaigns
                </a>
              </li>
              <li>
                <a className="text-xl">
                  <IconTrophy /> Accomplishments
                </a>
              </li>
            </ul>
          </div>
          {user && user.id && (

          <div className={`flex justify-between items-center w-full p-4`}>
            <div className={`leading-4 w-full`}>
              <h4 className={`font-semibold text-xl`}>{user.username}</h4>
              <span className="text-gray-600">{user.email}</span>
            </div>

            <IconGear />
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

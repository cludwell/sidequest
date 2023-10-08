import { useSession, signOut } from "next-auth/react";
import LogInModal from "./LogInModal";
import d20 from "../../public/images/d20.png";
import Image from "next/image";
import SignUp from "./SignUpModal";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Session } from "next-auth";
// type definitions for useSelector and state
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authenticate, userProfile } from "@/store/session";
import { AppDispatch } from "@/store";
import { allCharactersRequest, allCharactersState } from "@/store/characters";
import { loadScenarios, scenarioState } from "@/store/scenarios";
import Drawer from "./Drawer";
import Link from "next/link";
import IconMap from "./IconMap";
import IconTrophy from "./IconTrophy";
import IconCharacters from "./IconCharacters";
import IconID from "./IconID";
import IconBars from "./IconBars";

export default function Header() {
  const { data: session, status: loading } = useSession();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadUser = async () => {
      dispatch(authenticate());
      dispatch(allCharactersRequest());
      dispatch(loadScenarios());
    };
    if (session) loadUser();
  }, [session, dispatch]);

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false });
    router.push("/"); // Manually redirect to the home page
  };

  const user = useSelector(userProfile);
  // const characters = useSelector(allCharactersState);
  // const scenarios = useSelector(scenarioState);
  // console.log("User Data:", user);
  // console.log("Character Data:", characters);
  return (
    <div
      className="flex flex-row justify-between "
      id="header-container"
    >
      <div className="navbar bg-base-100 m-4 rounded-2xl header-background">
        <div className="flex-1">
          <div className="flex flex-row justify-center items-center">
            <Image
              src={d20}
              alt="d20logo"
              className="w-12 object-cover mx-2"
              width={32}
              height={32}
            />
            <Link
              href={"/"}
              className="federant text-3xl hidden md:block font-bold"
            >
              SideQuest
            </Link>
          </div>
        </div>
        <div className="flex-none">
          {!session ? (
            <>
              <LogInModal />
              <SignUp />
            </>
          ) : (
            <div className=" content-center flex flex-row">
              <button className="btn btn-neutral" onClick={handleSignOut}>
                Logout
              </button>
            </div>
          )}
          <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost mx-2">
              <IconBars />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 "
            >
              <li>
                <Link href={`/characters`} className="text-lg">
                  <IconCharacters /> Choose Character
                </Link>
              </li>
              <li>
                <Link href={`/characters/usercharacters`} className="text-lg">
                  <IconID /> Your Characters
                </Link>
              </li>
              <li>
                <a className="text-lg">
                  <IconMap />
                  Campaigns
                </a>
              </li>
              <li>
                <a className="text-lg">
                  <IconTrophy /> Accomplishments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

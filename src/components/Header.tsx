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
import { authenticate, signOutRequest, userProfile } from "@/store/session";
import { AppDispatch } from "@/store";
import { allCharactersRequest, allCharactersState } from "@/store/characters";
import Link from "next/link";
import IconMap from "./icons/IconMap";
import IconTrophy from "./icons/IconTrophy";
import IconCharacters from "./icons/IconCharacters";
import IconID from "./icons/IconID";
import IconBars from "./icons/IconBars";
import IconInfo from "./icons/IconInfo";
import { motion } from "framer-motion";

export default function Header() {
  const { data: session, status: loading } = useSession();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadUser = async () => {
      dispatch(authenticate());
      dispatch(allCharactersRequest());
      // dispatch(loadScenarios());
    };
    if (session) loadUser();
  }, [session, dispatch]);

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false });
    await dispatch(signOutRequest());
    router.push("/");
  };

  const user = useSelector(userProfile);

  return (
    <div className="flex flex-row justify-between " id="header-container">
      <div className="m-4 navbar bg-base-100 rounded-2xl header-background">
        <div className="flex-1">
          <div className="flex flex-row items-center justify-center">
            <Link href={"/"} className="federant">
              <Image
                src={d20}
                alt="d20logo"
                className="object-cover w-12 mx-2"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href={"/"}
              className="hidden text-3xl font-bold federant md:block"
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
            <div className="flex flex-row content-center ">
              <button className="btn btn-neutral" onClick={handleSignOut}>
                Logout
              </button>
            </div>
          )}
          <div className="relative dropdown dropdown-bottom dropdown-end dropdown-hover">
            <label tabIndex={0} className="mx-2 btn btn-ghost">
              <IconBars />
            </label>
            <ul
              tabIndex={0}
              className="z-30 w-64 p-2 shadow dropdown-content menu bg-base-100 rounded-box "
            >
              <li>
                <Link href={`/characters`} className="text-lg">
                  <IconCharacters /> Create Character
                </Link>
              </li>
              {session && (
                <li>
                  <Link href={`/characters/usercharacters`} className="text-lg">
                    <IconID /> Your Characters
                  </Link>
                </li>
              )}
              <li>
                <Link href={"/scenarios"} className="text-lg">
                  <IconMap />
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="text-lg">
                  <IconInfo />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: false,
      staggerChildren: 0.1,
      delay: 0.7,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

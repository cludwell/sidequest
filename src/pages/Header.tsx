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
    // Use 'redirect: false' to prevent automatic redirection
    router.push("/"); // Manually redirect to the home page
  };

  const user = useSelector(userProfile);
  // const characters = useSelector(allCharactersState);
  // const scenarios = useSelector(scenarioState);
  // console.log("User Data:", user);
  // console.log("Character Data:", characters);
  return (
    <div className="flex flex-row justify-between drop-shadow-xl" id="header-container">
      <div className="flex flex-row m-3 justify-center items-center">
        <Image src={d20} alt="d20logo" className="w-12 object-cover" width={32} height={32}/>
        <Link href={'/'} className="federant text-3xl hidden md:block font-bold">SideQuest</Link>

      </div>
      {!session ? (
        <div className="m-4 content-center flex flex-row">
          <LogInModal />
          <SignUp />
          <Drawer />
        </div>
      ) : (
        <div className="m-4 content-center flex flex-row">
          <button className="btn m-auto btn-neutral" onClick={handleSignOut}>
            Logout
          </button>
          <Drawer />
        </div>
      )}
    </div>
  );
}

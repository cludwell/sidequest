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
import { RootState } from "../../lib/rootState";
import { useEffect } from "react";
import { authenticate, userProfile } from "@/store/session";

export default function Header() {
  const { data: session, status: loading } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      dispatch(authenticate())

    }
    if (session) loadUser()
  }, [session, dispatch])

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false });
    // Use 'redirect: false' to prevent automatic redirection
    router.push("/"); // Manually redirect to the home page
  };

  const user = useSelector(userProfile)
  console.log("User Data:",user)
  return (
    <div className="flex flex-row justify-between" id="header-container">
      <div className="flex flex-row align-con m-3">
        <Image src={d20} alt="d20logo" className="w-20 object-cover" />
        <h1 className="astloch text-7xl ">sideQuest</h1>
      </div>
      {!session ? (
        <div className="m-4 content-center">
          <LogInModal />
          <SignUp />
        </div>
      ) : (
        <button className="btn m-4 btn-neutral" onClick={handleSignOut}>
          Logout
        </button>
      )}
    </div>
  );
}

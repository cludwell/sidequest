import { useSession, signOut } from "next-auth/react";
import LogInModal from "./LogInModal";
import d20 from "../../public/images/d20.png";
import Image from "next/image";
import SignUp from "./SignUpModal";

export default function Header() {
  const { data: session, status: loading } = useSession();
  console.log('SESSION',session)
  return (
    <div className="flex flex-row justify-around" id="header-container">
      <div className="flex flex-row align-con m-3">
        <Image src={d20} alt="d20 logo" className="w-20 object-cover" />
        <h1 className="astloch text-7xl ">sideQuest</h1>
      </div>
      {!session ? (
        <div className="m-4 content-center">
          <LogInModal />
          <SignUp />
        </div>
      ) : (
        <button className="btn" onClick={() => signOut()}>
          Logout
        </button>
      )}
    </div>
  );
}

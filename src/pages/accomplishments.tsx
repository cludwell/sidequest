import { AppDispatch } from "@/store";
import { userScenarioState, userScenariosRequest } from "@/store/scenarios";
import { userProfile } from "@/store/session";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Accomplishments() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: session, status: loading } = useSession();
  const user = useSelector(userProfile);
  useEffect(() => {
    const loadData = async () => {
      if (user?.id) {
        dispatch(userScenariosRequest(user.id));
      }
    };
    loadData();
  }, [user, dispatch]);

  const userScenarios = useSelector(userScenarioState);
  console.log("userScenarios", userScenarios);
  return (
    <main className="flex flex-col items-center px-4 md:px-16 fade-in-slide-in">
      <h1 className="text-3xl font-bold federant">User Accomplishments </h1>
      <div className="divider" />
    </main>
  );
}

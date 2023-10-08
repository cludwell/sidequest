import { AppDispatch } from "@/store";
import { allScenarioState, loadScenarios } from "@/store/scenarios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../Loading";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Scenarios() {
  const dispatch = useDispatch<AppDispatch>();
  const [loaded, setLoaded] = useState<Boolean>(false);
  useEffect(() => {
    const loadData = async () => {
      await dispatch(loadScenarios());
      setLoaded(true);
    };
    loadData();
  });
  const scenarios = useSelector(allScenarioState);
  console.log('SCENARIOS', scenarios)
  if (!loaded) return <Loading />;
  return (
    <main className="flex min-h-screen flex-col items-center px-16 fade-in-slide-in">
      <h1 className="federant text-2xl">Scenarios</h1>
      <div className="divider" />
      {!!scenarios.length && (<div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <Image
            height={500}
            width={200}
            alt="scenario-image"
            src={scenarios[0]}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>)}
    </main>
  );
}

import { useSession } from "next-auth/react";
import { useState } from "react";
import NewCharacterRace from "./NewCharRace";
import NewCharacterClass from "./NewCharClass";
import NewCharAbilities from "./NewCharAbilities";
import NewCharDescription from "./NewCharDescription";

export default function NewCharacter() {
  const { data: session, status: loading } = useSession();
  // const [progress, setProgress] = useState(5);
  const [race, setRace] = useState<string | null>(null);
  const [dndClass, setDndClass] = useState<string | null>(null);
  const [abilities, setAbilities] = useState<Object>({});
  const [description, setDescription] = useState<Record<string | number, null >>({});
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <ul className="steps steps-horizontal lg:steps-horizontal mb-12">
        <li className={race ? "step step-primary" : "step"}>Race</li>
        <li className={dndClass ? "step step-primary" : "step"}>Class</li>
        <li
          className={
            !!Object.values(abilities).length ? "step step-primary" : "step"
          }
        >
          Abilities
        </li>
        <li className="step">Description</li>
        <li className="step">Equipment</li>
      </ul>
      <NewCharacterRace race={race} setRace={setRace} />
      <NewCharacterClass dndClass={dndClass} setDndClass={setDndClass} />
      <NewCharAbilities abilities={abilities} setAbilities={setAbilities} />
      <NewCharDescription
        description={description}
        setDescription={setDescription}
      />
    </main>
  );
}

import { useSession } from "next-auth/react";
import { useState } from "react";
import NewCharacterRace from "./NewCharRace";
import NewCharacterClass from "./NewCharClass";

export default function NewCharacter() {
  const { data: session, status: loading } = useSession();
  const [progress, setProgress] = useState(5);
  const [race, setRace] = useState<string|null>(null);
  const [dndClass, setDndClass] = useState<string|null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <NewCharacterRace race={race} setRace={setRace} />
      <NewCharacterClass dndClass={dndClass} setDndClass={setDndClass} />
    </main>
  );
}

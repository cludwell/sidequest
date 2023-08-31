import { useSession } from "next-auth/react";
import { useState } from "react";
import ModalAarakocra from "./ModalAarakocra";
import ModalDragonBorn from "./ModalDragonborn";

export default function NewCharacter() {
    const { data: session, status: loading } = useSession();
    const [progress, setProgress] = useState(5)
    const [race, setRace] = useState(null)
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <progress className="progress progress-accent" value={progress} max="100"/>
        <ModalAarakocra />
        <ModalDragonBorn />
    </main>
  );
}

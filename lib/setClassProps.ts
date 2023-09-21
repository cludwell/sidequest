import { DndClassObject } from "./DndClassObject";

export type SetClassProps = {
    dndClass: DndClassObject
    setDndClass: React.Dispatch<React.SetStateAction<DndClassObject>>;
  };

import { DndClassObject } from "./DndClassObject";

export type SetAbilitiesProps = {
    abilities: Object;
    setAbilities: React.Dispatch<React.SetStateAction<Object>>;
    dndClass: DndClassObject;
  };

import { DndClassObject } from "./DndClassObject";

export type SetEquipmentProps = {
  dndClass: DndClassObject;
  race: string | null;
  equipment: Object;
  setEquipment: React.Dispatch<React.SetStateAction<Object>>;
};

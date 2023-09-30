import { DndClassObject } from "./DndClassObject";
import { Equipment } from "./Equipment";
export type SetEquipmentProps = {
  dndClass: DndClassObject;
  race: Object;
  equipment: Object;
  setEquipment: React.Dispatch<React.SetStateAction<Equipment>>;
};

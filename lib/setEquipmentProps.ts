import { DndClassObject } from "./DndClassObject";

export type SetEquipmentProps = {
  dndClass: DndClassObject;
  race: Object;
  equipment: Object;
  setEquipment: React.Dispatch<React.SetStateAction<Object>>;
};

import { DndClassObject } from "./DndClassObject";
import { Race } from "./Race";

export type SetDescriptionProps = {
  description: Object;
  setDescription: React.Dispatch<React.SetStateAction<Object>>;
  race: Race,
  dndClass: DndClassObject
};

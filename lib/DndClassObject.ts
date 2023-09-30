import { DnDClass } from "./DnDClass"

export type DndClassObject = {
    role: DnDClass | null,
    spells: string[];
    languages: string[];
    specialty: string[];
}

export type SetEquipmentProps = {
  dndClass: string | null;
  race: string | null;
  equipment: Object;
  setEquipment: React.Dispatch<React.SetStateAction<Object>>;
};

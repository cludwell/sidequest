export interface WeaponDetail {
  cost: string;
  damage: string;
  weight: string;
  properties: string[];
}

export interface MartialMeleeWeaponsProps {
  martialMeleeWeapons: {
    [key: string]: WeaponDetail;
  };
}

export interface SimpleMeleeWeaponsProps {
  simpleMeleeWeapons: {
    [key: string]: WeaponDetail;
  };
}

export interface WeaponsProps {
  title: string;
  weaponsData: {
    [key: string]: WeaponDetail;
  };
}

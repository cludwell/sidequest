export const classesHp = {
    Barbarian: {
        hitDie: 12,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 12 + constitutionModifier;
            return classesHp.Barbarian.hitDie + constitutionModifier;
        }
    },
    Bard: {
        hitDie: 8,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 8 + constitutionModifier;
            return classesHp.Bard.hitDie + constitutionModifier;
        }
    },
    Cleric: {
        hitDie: 8,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 8 + constitutionModifier;
            return classesHp.Cleric.hitDie + constitutionModifier;
        }
    },
    Druid: {
        hitDie: 8,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 8 + constitutionModifier;
            return classesHp.Druid.hitDie + constitutionModifier;
        }
    },
    Fighter: {
        hitDie: 10,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 10 + constitutionModifier;
            return classesHp.Fighter.hitDie + constitutionModifier;
        }
    },
    Monk: {
        hitDie: 8,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 8 + constitutionModifier;
            return classesHp.Monk.hitDie + constitutionModifier;
        }
    },
    Paladin: {
        hitDie: 10,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 10 + constitutionModifier;
            return classesHp.Paladin.hitDie + constitutionModifier;
        }
    },
    Ranger: {
        hitDie: 10,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 10 + constitutionModifier;
            return classesHp.Ranger.hitDie + constitutionModifier;
        }
    },
    Rogue: {
        hitDie: 8,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 8 + constitutionModifier;
            return classesHp.Rogue.hitDie + constitutionModifier;
        }
    },
    Sorcerer: {
        hitDie: 6,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 6 + constitutionModifier;
            return classesHp.Sorcerer.hitDie + constitutionModifier;
        }
    },
    Warlock: {
        hitDie: 8,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 8 + constitutionModifier;
            return classesHp.Warlock.hitDie + constitutionModifier;
        }
    },
    Wizard: {
        hitDie: 6,
        calculateHp: (constitutionModifier: number, level = 1) => {
            if (level === 1) return 6 + constitutionModifier;
            return classesHp.Wizard.hitDie + constitutionModifier;
        }
    }
};

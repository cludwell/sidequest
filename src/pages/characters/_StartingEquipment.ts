export const StartingEquipment = {
    Barbarian: {
      Weapons: ["GreatAxe", "Any martial weapon"],
      Armors: ["No armor", "Leather"],
      OtherItems: ["Explorer's pack"],
      Packs: ["Explorer's Pack"]
    },
    Bard: {
      Weapons: ["Rapier", "Longsword", "Simple weapon"],
      Armors: ["Leather armor"],
      OtherItems: ["Diplomat's pack", "Entertainer's pack"],
      Packs: [],
      Instruments: [
        "Bagpipes",        // Official D&D
        "Drum",            // Official D&D
        "Dulcimer",        // Official D&D
        "Flute",           // Official D&D
        "Lute",            // Official D&D
        "Lyre",            // Official D&D
        "Horn",            // Official D&D
        "Pan Flute",       // Official D&D
        "Shawm",           // Official D&D
        "Viol",            // Official D&D
        "Guitar",          // Historical
        "Accordion",       // Historical
        "Harp",            // Historical
        "Mandolin",        // Historical
        "Recorder",        // Historical
        "Fiddle",          // Historical
        "Hurdy-Gurdy",     // Historical
        "Crumhorn",        // Historical
        "Zither",          // Historical
        "Psaltery",        // Historical
    ],
      InstrumentChoices: 3
    },
    Cleric: {
      Weapons: ["Mace", "Warhammer"],
      Armors: ["Scale mail", "Leather armor"],
      OtherItems: ["Priest's pack", "Explorer's pack"],
      Packs: [],
      HolySymbols: ["Painted shield", "Necklace with holy symbol"]
    },
    Druid: {
      Weapons: ["Scimitar", "Simple weapon"],
      Armors: ["Leather armor"],
      OtherItems: ["Explorer's pack"],
      Packs: [],
      DruidicFocus: ["Wooden staff", "Yew wand", "Totem", "Mistletoe"]
    },
    Fighter: {
      Weapons: ["Longsword", "Two shortswords", "Any simple weapon"],
      Armors: ["Chain mail", "Leather armor", "Scale mail"],
      OtherItems: ["Dungeoneer's pack", "Explorer's pack"],
      Packs: []
    },
    Monk: {
      Weapons: ["Shortsword", "Any simple weapon"],
      Armors: [],
      OtherItems: ["Dungeoneer's pack", "Explorer's pack"],
      Packs: [],
      MonasticTraditions: ["Way of the Open Hand", "Way of Shadow", "Way of the Four Elements"]
    },
    Paladin: {
      Weapons: ["Longsword", "Any simple weapon"],
      Armors: ["Chain mail", "Scale mail"],
      OtherItems: ["Priest's pack", "Explorer's pack"],
      Packs: [],
      HolySymbols: ["Amulet", "Emblem", "Reliquary"]
    },
    Ranger: {
      Weapons: ["Longsword", "Two shortswords", "Any simple weapon"],
      Armors: ["Scale mail", "Leather armor"],
      OtherItems: ["Explorer's pack"],
      Packs: [],
      FavoredEnemy: ["Beasts", "Fey", "Undead", "Dragons"]
    },
    Rogue: {
      Weapons: ["Rapier", "Shortsword", "Shortbow with 20 arrows"],
      Armors: ["Leather armor"],
      OtherItems: ["Burglar's pack", "Explorer's pack", "Dungeoneer's pack"],
      Packs: [],
      RoguishArchetypes: ["Thief", "Assassin", "Arcane Trickster"]
    },
    Sorcerer: {
      Weapons: ["Dagger", "Any simple weapon"],
      Armors: [],
      OtherItems: ["Explorer's pack", "Dungeoneer's pack"],
      Packs: [],
      ArcaneFoci: ["Crystal", "Orb", "Rod", "Staff", "Wand"],
      SorcerousOrigins: ["Draconic Bloodline", "Wild Magic"]
    },
    Warlock: {
      Weapons: ["Quarterstaff", "Dagger"],
      Armors: ["Leather armor"],
      OtherItems: ["Scholar's pack", "Dungeoneer's pack"],
      Packs: [],
      ArcaneFoci: ["Crystal", "Orb", "Rod", "Staff", "Wand"],
      EldritchInvocations: ["Agonizing Blast", "Armor of Shadows", "Book of Ancient Secrets"]
    },
    Wizard: {
      Weapons: ["Quarterstaff", "Dagger"],
      Armors: [],
      OtherItems: ["Scholar's pack", "Explorer's pack"],
      Packs: [],
      ArcaneFoci: ["Staff", "Wand", "Orb", "Crystal", "Rod"],
      Spellbook: true
    }
  };

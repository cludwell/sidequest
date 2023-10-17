export const cantrips = {
  "Acid Splash": {
    type: "Conjuration",
    level: "Cantrip",
    castingTime: "1 action",
    range: "60ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 211 },
    description:
      "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
    scaling: {
      "5th level": "2d6",
      "11th level": "3d6",
      "17th level": "4d6",
    },
    classAvailability: ["Sorcerer", "Wizard"],
  },
  "Blade Ward": {
    type: "Abjuration",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Self",
    components: ["V", "S"],
    duration: "1 round",
    source: { book: "PHB", page: 218 },
    description:
      "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
    classAvailability: ["Bard", "Sorcerer", "Warlock", "Wizard"],
  },
  "Booming Blade": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "5ft.",
    components: ["V", "M"],
    duration: "1 round",
    source: { book: "SCAG", page: 142 },
    description:
      "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn.",
    scaling: {
      "5th level": "Adds 1d8 to initial damage and secondary effect",
      "11th level": "Increases both damages by 1d8",
      "17th level": "Increases both damages by 1d8",
    },
    classAvailability: ["Sorcerer", "Warlock", "Wizard"],
  },
  "Control Flames": {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "60ft.",
    components: ["S"],
    duration: "Instantaneous or 1 hour",
    source: { book: "XGtE", page: 152 },
    description:
      "You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of several ways: expand, extinguish, double/halve brightness, or simple shapes.",
    classAvailability: ["Druid", "Sorcerer", "Wizard"],
  },
  "Chill Touch": {
    type: "Necromancy",
    level: "Cantrip",
    castingTime: "1 action",
    range: "120ft.",
    components: ["V", "S"],
    duration: "1 round",
    source: { book: "PHB", page: 221 },
    description:
      "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn.",
    scaling: {
      "5th level": "2d8",
      "11th level": "3d8",
      "17th level": "4d8",
    },
    classAvailability: ["Sorcerer", "Warlock", "Wizard"],
  },
  "Create Bonfire": {
    type: "Conjuration",
    level: "Cantrip",
    castingTime: "1 Action",
    range: "60 Feet",
    duration: "Concentration, up to 1 minute",
    components: "V, S",
    source: { book: "EE", page: 16 },
    description:
      "You create a bonfire on the ground that you can see within range. Until the spell ends, the bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire's space for the first time on a turn or ends its turn there.",
    scaling: {
      "5th level": "2d8",
      "11th level": "3d8",
      "17th level": "4d8",
    },
    classAvailability: ["Druid", "Sorcerer", "Wizard"],
  },

  "Dancing Lights": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "120ft.",
    components: ["V", "S", "M"],
    duration: "1 minute",
    source: { book: "PHB", page: 230 },
    description:
      "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.",
    classAvailability: ["Bard", "Sorcerer", "Wizard"],
  },
  Druidcraft: {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 236 },
    description:
      "Whispering to the spirits of nature, you create one of the following effects within range: create a tiny, harmless sensory effect that predicts the weather, instantly make a flower blossom or a seed pod open, or create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, or the sound of a small animal.",
    classAvailability: ["Druid"],
  },
  "Eldritch Blast": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "120ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 237 },
    description:
      "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
    scaling: {
      "5th level": "2 beams",
      "11th level": "3 beams",
      "17th level": "4 beams",
    },
    classAvailability: ["Warlock"],
  },
  "Encode Thoughts": {
    type: "Enchantment",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Unlimited",
    duration: "Until dispelled",
    components: "V, S",
    source: { book: "GGtR", page: 45 },
    description:
      "You touch a creature and encode your thoughts within it. The target can read the surface thoughts of your mind, and you gain insight into its emotional state. If the target has an Intelligence of 2 or lower or doesn’t speak any language, the spell has no effect.",
    classAvailability: ["Bard"],
  },
  "Fire Bolt": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    source: { book: "PHB", page: 242 },
    description:
      "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
    classAvailability: ["Sorcerer", "Wizard"],
  },

  Friends: {
    type: "Enchantment",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Self",
    components: ["S", "M"],
    duration: "Up to 1 minute",
    source: { book: "PHB", page: 244 },
    description:
      "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you.",
    classAvailability: ["Bard", "Sorcerer", "Warlock", "Wizard"],
  },
  Frostbite: {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    source: { book: "EE", page: 19 },
    description:
      "You cause numbing frost to form on one creature you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.",
    classAvailability: ["Sorcerer", "Wizard"],
  },
  "Green-Flame Blade": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Self (5-foot radius)",
    components: "S, M",
    duration: "Instantaneous",
    source: { book: "SCAG", page: 142 },
    description:
      "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.",
    classAvailability: ["Sorcerer", "Warlock", "Wizard"],
  },

  Guidance: {
    type: "Divination",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Touch",
    components: ["V", "S"],
    duration: "Up to 1 minute",
    source: { book: "PHB", page: 248 },
    description:
      "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
    classAvailability: ["Cleric", "Druid"],
  },
  Gust: {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "EE", page: 19 }, // Not from PHB, but from Elemental Evil Player's Companion
    description:
      "You seize the air and compel it to create one of the following effects at a point you can see within range: one Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you, create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds, etc.",
    classAvailability: ["Druid", "Sorcerer", "Wizard"],
  },
  Infestation: {
    type: "Conjuration",
    level: "Cantrip",
    castingTime: "1 Action",
    range: "30 feet",
    components: "V, S, M",
    duration: "Instantaneous",
    source: { book: "XGtE", page: 158 },
    description:
      "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.",
    classAvailability: ["Sorcerer", "Wizard"],
  },

  Light: {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Touch",
    components: ["V", "M"],
    duration: "1 hour",
    source: { book: "PHB", page: 255 },
    description:
      "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
    classAvailability: ["Bard", "Cleric", "Sorcerer", "Wizard"],
  },
  "Lightning Lure": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 Action",
    range: "Self (15-foot radius)",
    duration: "Instantaneous",
    components: "V",
    source: { book: "SCAG", page: 143 },
    description:
      "You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw, or it takes 1d8 lightning damage and is pulled up to 10 feet in a straight line toward you. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    classAvailability: ["Sorcerer", "Warlock", "Wizard"],
  },

  "Mage Hand": {
    type: "Conjuration",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["V", "S"],
    duration: "1 minute",
    source: { book: "PHB", page: 256 },
    description:
      "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
    classAvailability: ["Bard", "Sorcerer", "Warlock", "Wizard"],
  },
  Mending: {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 minute",
    range: "Touch",
    components: ["V", "S", "M"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 259 },
    description:
      "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin.",
    classAvailability: ["Bard", "Cleric", "Druid", "Sorcerer", "Wizard"],
  },
  Message: {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "120ft.",
    components: ["V", "S", "M"],
    duration: "1 round",
    source: { book: "PHB", page: 259 },
    description:
      "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.",
    classAvailability: ["Bard", "Sorcerer", "Wizard"],
  },
  "Mind Sliver": {
    type: "Enchantment",
    level: "Cantrip",
    castingTime: "1 Action",
    range: "60 feet",
    duration: "1 round",
    components: "V",
    source: { book: "TCoE", page: 107 }, // Note: This one is from Tasha's Cauldron of Everything (TCoE), not the PHB
    description:
      "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    classAvailability: ["Sorcerer", "Warlock", "Wizard"],
  },

  "Minor Illusion": {
    type: "Illusion",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["S", "M"],
    duration: "1 minute",
    source: { book: "PHB", page: 260 },
    description:
      "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.",
    classAvailability: ["Bard", "Sorcerer", "Warlock", "Wizard"],
  },
  "Mold Earth": {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["S"],
    duration: "Instantaneous",
    source: { book: "EE", page: 21 }, // Elemental Evil Player's Companion
    description:
      "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: excavate it, move it, etc.",
    classAvailability: ["Druid", "Sorcerer", "Wizard"],
  },
  "On/Off (UA)": {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 Action",
    range: "60 feet",
    duration: "Instantaneous",
    components: "V, S",
    source: { book: "UA", page: 3 }, // Note: This one is from Unearthed Arcana (UA), not an official published book
    description:
      "You toggle the state of one object within range that is no larger than 1 cubic foot. You can use this cantrip to perform basic tasks that normally require a light switch or similar device, such as lighting or snuffing out a candle, closing a door, or opening a container.",
    classAvailability: ["Wizard"],
  },

  "Poison Spray": {
    type: "Conjuration",
    level: "Cantrip",
    castingTime: "1 action",
    range: "10ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 266 },
    description:
      "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.",
    classAvailability: ["Druid", "Sorcerer", "Warlock", "Wizard"],
  },
  Prestidigitation: {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "10ft.",
    components: ["V", "S"],
    duration: "Up to 1 hour",
    source: { book: "PHB", page: 267 },
    description:
      "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range: create a harmless sensory effect, instantaneously light or snuff out a candle, clean or soil an object, etc.",
    classAvailability: ["Bard", "Sorcerer", "Warlock", "Wizard"],
  },
  "Produce Flame": {
    type: "Conjuration",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Self",
    components: ["V", "S"],
    duration: "10 minutes",
    source: { book: "PHB", page: 269 },
    description:
      "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.",
    classAvailability: ["Druid"],
  },
  "Ray of Frost": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "60ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 271 },
    description:
      "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.",
    classAvailability: ["Sorcerer", "Wizard"],
  },
  "Sacred Flame": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "60ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 272 },
    description:
      "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
    classAvailability: ["Cleric"],
  },
  "Sappping Sting": {
    type: "Necromancy",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "EGtW", page: 99 },
    description: `You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone.
    At Higher Levels. This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).`,
    classAvailability: ['Wizard']
  },
  "Shape Water": {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["S"],
    duration: "Up to 1 hour",
    source: { book: "EE", page: 21 }, // Elemental Evil Player's Companion
    description:
      "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: move the water, form it into shapes, change its appearance, or freeze it.",
    classAvailability: ["Druid", "Sorcerer", "Wizard"],
  },
  Shillelagh: {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 bonus action",
    range: "Touch",
    components: ["V", "S", "M"],
    duration: "1 minute",
    source: { book: "PHB", page: 275 },
    description:
      "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already.",
    classAvailability: ["Druid"],
  },
  "Shocking Grasp": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Touch",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 275 },
    description:
      "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.",
    classAvailability: ["Sorcerer", "Wizard"],
  },
  "Spare the Dying": {
    type: "Necromancy",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Touch",
    components: ["V", "S"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 277 },
    description:
      "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
    classAvailability: ["Cleric"],
  },
  "Sword Burst": {
    type: "Conjuration",
    level: "Cantrip",
    castingTime: "1 Action",
    range: "Self (5-foot radius)",
    duration: "Instantaneous",
    components: "V",
    source: { book: "SCAG", page: 143 }, // Note: This one is from Sword Coast Adventurer's Guide (SCAG)
    description:
      "You create a momentary circle of spectral blades that sweep around you. Each creature in a 5-foot-radius sphere centered on you must make a Dexterity saving throw. A creature takes 1d6 force damage on a failed save or half as much damage on a successful one.",
    classAvailability: ["Sorcerer", "Wizard"],
  },

  Thaumaturgy: {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["V"],
    duration: "Up to 1 minute",
    source: { book: "PHB", page: 282 },
    description:
      "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects: your voice booms, you cause flames to flicker, you cause harmless tremors, you create an instantaneous sound, you instantaneously cause a door to fly open or slam shut, or you alter the appearance of your eyes.",
    classAvailability: ["Cleric"],
  },
  "Thorn Whip": {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["V", "S", "M"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 282 },
    description:
      "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.",
    classAvailability: ["Druid"],
  },
  "Thunderclap": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 Action",
    range: "Self (5-foot radius)",
    duration: "Instantaneous",
    components: "S",
    source: { book: "EE", page: 22 }, // Note: This one is from Elemental Evil Player's Companion (EE)
    description:
      "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must make a Constitution saving throw or take 1d6 thunder damage.",
    classAvailability: ["Druid", "Sorcerer", "Wizard"],
  },

  "True Strike": {
    type: "Divination",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30ft.",
    components: ["S"],
    duration: "Concentration, up to 1 round",
    source: { book: "PHB", page: 284 },
    description:
      "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.",
    classAvailability: ["Bard", "Sorcerer", "Warlock", "Wizard"],
  },
  "Toll the Dead": {
    type: "Necromancy",
    level: "Cantrip",
    castingTime: "1 Action",
    range: "60 feet",
    duration: "Instantaneous",
    components: "V, S",
    source: { book: "XGE", page: 169 }, // Note: This one is from Xanathar's Guide to Everything (XGE)
    description:
      "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage. The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    classAvailability: ["Cleric", "Warlock"],
  },

  "Vicious Mockery": {
    type: "Enchantment",
    level: "Cantrip",
    castingTime: "1 action",
    range: "60ft.",
    components: ["V"],
    duration: "Instantaneous",
    source: { book: "PHB", page: 285 },
    description:
      "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
    classAvailability: ["Bard"],
  },
  Virtue: {
    type: "Transmutation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Touch",
    components: ["V", "S"],
    duration: "1 round",
    source: { book: "XGE", page: 169 }, // Note: This one is from Xanathar's Guide to Everything (XGE), not the PHB
    description:
      "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to 1d4 + your spellcasting ability modifier. The temporary hit points are lost when the spell ends.",
    classAvailability: ["Cleric"],
  },
  "Word of Radiance": {
    type: "Evocation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "5ft.",
    components: ["V", "S", "M"],
    duration: "Instantaneous",
    source: { book: "XGE", page: 171 }, // Note: This one is from Xanathar's Guide to Everything (XGE), not the PHB
    description:
      "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage. The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    classAvailability: ["Cleric"],
  },
};

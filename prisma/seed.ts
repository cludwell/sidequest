const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function clearDatabase() {
  // Delete all records from the tables in the desired order
  try {
    await prisma.userScenarios.deleteMany({});
    const userScenes = prisma.userScenarios.findMany();
    console.log('USER SCENES' , userScenes)
    await prisma.characters.deleteMany({});
    await prisma.scenarios.deleteMany({});
    await prisma.users.deleteMany({});
    const users = prisma.users.findMany();
    console.log('USERS', users)
    console.log("Database cleared successfully.");
  } catch (error) {
    console.error("Error clearing Database", error);
  }
  await prisma.$disconnect();
}

async function seedUsers() {
  try {
    await prisma.users.createMany({
      data: [
        {
          username: "DemoUser",
          email: "demo@aa.io",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "marnie",
          email: "marnie@aa.io",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "bobbie",
          email: "bobbie@aa.io",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "JerryS",
          email: "jerry@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
          profilePic: "https://i.imgur.com/cR6kAVj.jpg",
        },
        {
          username: "Elaine",
          email: "elaine@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "George",
          email: "george@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "Kramer",
          email: "kramer@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "Newman",
          email: "newman@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "Estelle",
          email: "estelle@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "Frankie",
          email: "frank@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "SusanS",
          email: "susan@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "Mortimer",
          email: "morty@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
        {
          username: "HelenS",
          email: "helen@seinmail.com",
          hashedPassword:
            "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        },
      ], // Use the imported user data array
    });
    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedScenarios() {
  try {
    await prisma.scenarios.createMany({
      data: [
        {
          // scenario 1
          description: `Title: Shadows of the Undercity

    Adventure Prompt: In the crumbling city of Veridian, the lower districts have become known as the dangerous Undercity. You are a lone adventurer, seeking to make a name for yourself. One day, you receive a desperate message from a stranger asking for your help to find their missing sibling who was last seen in the treacherous Undercity.

    Starting Point: You stand at the entrance to the Undercity, a dimly lit archway casting shadows on the path ahead. The smell of decay and distant echoes of unknown dangers fill the air.

    Objective: Your mission is to navigate the treacherous Undercity and find the missing sibling, Timon. Be cautious, for danger lurks around every corner.

    Challenges and Encounters:

    Unfriendly Encounters: You encounter a gang of street toughs who block your path and demand something of value as "toll" for entering their territory. How will you handle this situation without getting into unnecessary trouble?

    The Informant: Through various interactions and inquiries, you hear rumors of a mysterious figure known as "Whispering Jax" who might know about Timon's whereabouts. Finding Jax won't be easy, as their identity is shrouded in secrecy.

    Hidden Traps and Obstacles: As you venture deeper into the Undercity, you come across hidden traps, rigged doors, and obstacles set up by gangs to protect their turf. How will you overcome these challenges?

    The Den of Shadows: You discover a hidden underground establishment where illegal activities take place. Here, you can gather more clues about Timon's location, but be careful not to attract too much attention or risk getting caught in the criminal web.

    Confrontation: Eventually, you find Timon in the clutches of a dangerous crime lord who plans to use the innocent boy as leverage. You must make a tough decision—negotiate cleverly or engage in a high-stakes battle to rescue Timon.`,
          imgUrl: "https://i.imgur.com/bGDn420.jpg",
        },
        {
          // scenario 2
          description: `Title: The Lost City of Eldoria

    Adventure Prompt: Rumors of a lost city hidden deep within the uncharted jungles have reached your ears. Legends speak of a fabled place called Eldoria, said to hold untold treasures, ancient knowledge, and powerful artifacts. Intrigued by the stories, you embark on an expedition to find the elusive city and claim its hidden riches for yourself.

    Starting Point: Your journey begins at the outskirts of the dense and mysterious jungle, where you stand with a map that supposedly leads to Eldoria. The foliage is thick, and the air is humid, concealing the path ahead.

    Objective: Your mission is to navigate through the treacherous jungle, decipher the map's clues, and locate the legendary city of Eldoria.

    Challenges and Encounters:

    Jungle Perils: The jungle is teeming with dangers, such as quicksand pits, venomous creatures, hostile wildlife, and hidden traps. You must use your wit and resourcefulness to traverse the hazardous terrain safely.

    Ancient Ruins: Along the way, you stumble upon ancient ruins that may hold clues to Eldoria's location and the challenges that await within the city. The ruins might contain puzzles, inscriptions, or even remnants of ancient guardians.

    Tribal Guardians: The jungle is home to various indigenous tribes, some of which are fiercely protective of their territory and the secrets of Eldoria. You may need to interact with these tribes, earning their trust or navigating diplomatic challenges.

    Rival Explorers: Other adventurers have also caught wind of the lost city and are competing to reach it first. You might encounter rival explorers seeking the same goal, leading to potential alliances, rivalries, or high-stakes competitions.

    The City of Eldoria: Upon discovering the hidden city, you must confront its mysteries and overcome the trials that protect its treasures. Ancient traps, puzzles, and perhaps even mythical guardians stand between you and the fabled riches of Eldoria.`,
          imgUrl: "https://i.imgur.com/vZbSclS.jpg",
        },
        {
          // scenario 3
          description: `Title: The Cursed Manor

    Adventure Prompt: In a remote and mist-shrouded countryside, stands an ominous and decrepit manor that has long been rumored to be cursed. The locals avoid it at all costs, believing it to be haunted by vengeful spirits and dark entities. Intrigued by the mystery and allure of the unknown, you decide to enter the haunted manor to uncover its secrets and perhaps break the curse.

    Starting Point: You stand outside the creaking gates of the cursed manor, its eerie silhouette looming against the darkening sky. An air of foreboding surrounds the place, but your curiosity pushes you forward.

    Objective: Your mission is to explore the cursed manor, uncover its dark history, and put an end to the curse that has plagued it for generations.

    Challenges and Encounters:

    Haunting Apparitions: As you step inside the manor, you encounter ghostly apparitions and eerie manifestations. These spirits are restless and may lead you to discover the truth behind their torment.

    Malevolent Traps: The cursed manor is full of deadly traps designed to keep intruders away. Beware of hidden pitfalls, moving walls, and other sinister mechanisms set to deter unwelcome visitors.

    Sinister Relics: Throughout the manor, you find relics and artifacts tied to its cursed past. These items might provide clues or unleash supernatural forces that you must deal with skillfully.

    Unraveling the Curse: Through exploration and interaction with the spirits, you begin to piece together the dark history of the manor. Unraveling the curse's origins and finding a way to lift it become essential to your survival.

    Confrontation with the Malevolence: As you delve deeper into the manor's depths, you encounter the malevolent force responsible for the curse. Defeating or pacifying this entity is crucial to breaking the curse's hold over the manor.`,
          imgUrl: "https://i.imgur.com/xsdzqzb.jpg",
        },
        {
          // scenario 4
          description: `Title: The Celestial Observatory

    Adventure Prompt: In the mystical realm of Astrion, renowned for its connection to the stars and celestial magic, a wondrous observatory has been discovered. The Celestial Observatory is said to hold ancient knowledge, arcane artifacts, and access to otherworldly realms. Intrigued by the allure of its secrets, you embark on a journey to reach the observatory and unlock its cosmic mysteries.

    Starting Point: Your journey commences at the base of the Celestial Mountain, where the observatory lies perched at its peak. The path ahead is filled with celestial wonders, as magical constellations illuminate the night sky.

    Objective: Your mission is to ascend the Celestial Mountain, overcome its otherworldly challenges, and reach the awe-inspiring Celestial Observatory.

    Challenges and Encounters:

    Astral Guardians: As you ascend the mountain, you encounter ethereal guardians bound to protect the observatory. Each guardian wields unique celestial powers, and you must prove yourself worthy by passing their trials or outsmarting them.

    Starlit Maze: The Celestial Mountain is veiled in a shifting maze of starlit pathways, each leading to different destinations. Navigating this maze requires keen perception, and you must decipher the patterns of the stars to choose the right path.

    Celestial Riddles: Along your journey, you encounter enigmatic celestial riddles that test your knowledge of astronomy and cosmic lore. The answers to these riddles may hold vital clues to reach the observatory.

    Astral Phenomena: The Celestial Mountain is a realm of magic and celestial phenomena. You might encounter gravity-defying areas, time-distorted pockets, and cosmic anomalies that challenge your understanding of reality.

    Cosmic Gateways: Upon reaching the Celestial Observatory, you discover that it holds portals to other planes and distant realms. Exploring these gateways could lead to encounters with otherworldly beings or the acquisition of rare artifacts.`,
          imgUrl: "https://i.imgur.com/daJoxYo.jpg",
        },
        {
          // scenario 5
          description: `Title: Echoes of the Forgotten Cave

    Adventure Prompt: In the rugged and untamed wilderness lies a mysterious cave, hidden deep within the heart of the Mistwood Forest. Known only to a few locals as the "Forgotten Cave," it is said to be filled with ancient relics, lost treasures, and untold secrets. Intrigued by the rumors, you set out on an expedition to uncover the truth behind this enigmatic cavern.

    Starting Point: Your journey begins at the edge of the Mistwood Forest, where a chilling mist clings to the dense foliage. The cave's entrance is rumored to be concealed within the forest's darkest and most remote corner.

    Objective: Your mission is to venture into the depths of the Forgotten Cave, face its challenges, and unveil the long-buried mysteries it holds.

    Challenges and Encounters:

    The Forest's Whisper: As you make your way through the Mistwood Forest, you encounter strange sounds and ethereal whispers that seem to guide you toward the cave. These whispers may offer cryptic clues or warnings.

    The Enigmatic Entrance: The cave's entrance is obscured by cunning illusions and natural traps. You must decipher the riddles or navigate the treacherous terrain to access the cave's inner chambers.

    Luminescent Fungi: Inside the cave, you encounter a network of luminescent fungi that light your path but may also attract the attention of curious creatures or reveal hidden dangers lurking in the shadows.

    Guardians of the Past: The cave holds ancient guardians, awakened by intruders. These guardians might be long-forgotten automatons, spectral apparitions, or awakened beasts sworn to protect the cave's secrets.

    The Heart of the Cave: As you delve deeper into the Forgotten Cave, you reach its heart—a vast chamber filled with lost treasures and ancient relics. However, this chamber may also be guarded by the most formidable protector of the cave's secrets.`,
          imgUrl: "https://i.imgur.com/k4wzG7U.jpg",
        },
        {
          // scenario 6
          description: `Title: Shadows Over the Silent Bridge

    Adventure Prompt: In the quaint village of Moonhaven, nestled amidst the beauty of Elaria, a once-thriving inn stands as a solemn reminder of the bandit-infested Shadowgate Bridge nearby. The innkeeper, burdened by fear and desperation, pleads for your help to liberate the bridge from the clutches of the menacing bandits. With innocent lives at stake, you embark on a quest to answer the innkeeper's plea and bring peace to Moonhaven.

    Starting Point: Moonhaven's innkeeper nervously awaits your response, anxiety etched on their face as they recount the horrors the villagers have faced at the hands of the bandits. The brooding silhouette of the Shadowgate Bridge looms in the distance, casting an ominous shadow over the village.

    Objective: Your mission is to heed the innkeeper's plea, clear the Shadowgate Bridge of the bandit menace, and secure safe passage for the villagers.

    Challenges and Encounters:

    Gathering Information: Before heading to the bridge, you must gather intelligence on the bandit gang—learning their numbers, tactics, and the possible motives behind their malevolent actions.

    Shadow in the Night: The bandits prefer to strike under the cover of darkness, making a stealthy approach crucial to catch them off guard and minimize the risk to the innocent.

    Negotiation or Confrontation: As you reach the bridge, you have the option to try negotiating with the bandits, appealing to their reason, or delivering a firm ultimatum to leave the area. Alternatively, if diplomacy fails, you must prepare for a tense confrontation.

    Showdown with the Bandit Leader: Among the bandits, a ruthless and cunning leader awaits—their control over the gang may prove to be the key to breaking their hold on the bridge. Confronting and defeating the leader is essential to dismantling the bandit operation.

    Rallying the Villagers: You have the opportunity to rally the villagers of Moonhaven to aid in the struggle against the bandits. Their support could significantly tip the scales in your favor.`,
          imgUrl: "https://i.imgur.com/ShFnXxI.jpg",
        },
        {
          // scenario 7
          description: `Title: Whispers of the Feywild

    Adventure Prompt: In the realm of Elaria, a once-peaceful forest is now beset by a series of peculiar and magical occurrences. The townsfolk speak of strange lights dancing in the woods, ethereal music haunting the air, and unexplained disappearances of wayward travelers. Driven by curiosity and concern, you set out to investigate these eerie happenings, only to find yourself entangled in the mysterious and enchanting world of the Feywild.

    Starting Point: The adventure commences in a tranquil village bordering the mysterious forest. The townsfolk are anxious, and tales of unexplainable phenomena circulate, fueling both fear and fascination.

    Objective: Your mission is to unravel the mysteries of the forest, discover the source of the strange happenings, and interact with the enigmatic creatures and characters from the Feywild.

    Challenges and Encounters:

    Entering the Feywild: As you venture deeper into the forest, you find a hidden portal to the Feywild—an interdimensional realm of beauty and whimsy. Stepping through the portal opens the gateway to unexpected encounters with fey creatures.

    The Mischievous Sprites: Playful sprites, known for their tricks, surround you with their impish laughter and attempt to lead you astray. Your wit and diplomacy will be tested to navigate their games and win their trust.

    Enchanted Groves: The forest is dotted with magical groves where dryads, treefolk, and other fey creatures dwell. Each grove holds unique challenges and riddles that must be solved to gain the trust and aid of its inhabitants.

    The Court of the Fey: As you delve deeper into the Feywild, you stumble upon the Court of the Fey—the heart of this enchanting realm. Here, you must navigate through intricate social etiquette and mystical customs to converse with the powerful and enigmatic Fey Lords and Ladies.

    The Unseen Threat: Behind the allure and enchantment of the Feywild lies an unseen threat, an ancient malevolence that seeks to exploit the mystical energy of the forest for nefarious purposes. Unraveling this threat becomes essential to restoring the balance between the mortal realm and the Feywild.`,
          imgUrl: "https://i.imgur.com/GepHoaF.jpg",
        },
      ],
    });
    console.log("Scenarios seeded successfully");
  } catch (error) {
    console.error("Error seeding scenarios:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedCharacters() {
  try {
    await prisma.characters.createMany({
      data: [
        {
          // CHARACTER 1
          userId: 1,
          level: 7,
          name: "Lyra Dawnflower",
          role: "Rogue",
          race: "Half-Elf",
          maxHp: 48,
          currentHp: 34,
          strength: 12,
          dexterity: 18,
          constitution: 14,
          intelligence: 16,
          wisdom: 10,
          charisma: 16,
          armor: ["Leather Armor", "Cloak of Elvenkind"],
          equipped: ["Rapier"],
          inventory: [
            "Shortbow",
            "Dagger",
            "Crossbow",
            "Thieves' Tools",
            "Potion of Invisibility",
          ],
          languages: ["Common", "Elvish", "Thieves' Cant"],
          spells: [],
          specialty: [
            "Thieves Cant",
            "Expertise",
            "Sneak Attack",
            "Cunning Action",
            "Roguish Archetype - Swashbuckler",
            "Evasion and Uncanny Dodge",
          ],
          tools: [],
          weapons: ["Rapier", "Shortbow", "Dagger", "Crossbow"],
          initiative: 6,
          armorClass: 15,
          vision: "darkvision",
          acrobatics: 8,
          animalHandling: 0,
          arcana: 0,
          athletics: 5,
          deception: 10,
          history: 0,
          insight: 0,
          intimidation: 5,
          investigation: 0,
          medicine: 0,
          nature: 0,
          perception: 6,
          performance: 0,
          persuasion: 10,
          religion: 0,
          sleightOfHand: 10,
          stealth: 12,
          survival: 0,
          alignment: "Chaotic Good",
          appearance:
            "Graceful and nimble, with silver hair and bright blue eyes.",
          background:
            "A skilled thief and expert in stealth and deception. Lyra Dawnflower is a valiant and noble paladin, devoted to the service of the god Bahamut. She was raised in the sacred city of Celestia, where she trained as a holy warrior from a young age. Her demeanor is calm and composed, but she is unyielding in her pursuit of justice and protection for the innocent. Lyra's goals are to rid the world of evil and corruption, and to bring hope and healing to those in need. As a devout follower of Bahamut, she is guided by a strong sense of duty and honor, and she believes in the power of redemption and second chances.",
          imgUrl: "https://i.imgur.com/WqrFsPl.jpg",
          faith: "Bahamut",
        },
        {
          // CHARACTER 2
          userId: 6,
          level: 7,
          name: "Thalia Ironfist",
          role: "Paladin",
          race: "Dwarf",
          maxHp: 52,
          currentHp: 52,
          strength: 17,
          dexterity: 11,
          constitution: 16,
          intelligence: 9,
          wisdom: 14,
          charisma: 13,
          armor: ["Plate Mail"],
          equipped: ["Dwarven Warhammer", "Shield"],
          inventory: [
            "Holy Symbol of Moradin",
            "Potion of Greater Healing",
            "Dwarven Ale",
          ],
          languages: ["Common", "Dwarvish", "Giant"],
          spells: [
            "Divine Smite",
            "Lay on Hands",
            "Cure Wounds",
            "Protection from Evil and Good",
            "Shield of Faith",
            "Bless",
            "Divine Sense",
            "Divine Health",
            "Channel Divinity - Champion Challenge",
          ],
          specialty: ["Fighting Style - Protection", "Oath of the Crown"],
          tools: ["Smith's Tools"],
          weapons: ["Warhammer", "Handaxe"],
          initiative: 0,
          armorClass: 19, // plate mail + shield
          vision: "darkvision",
          acrobatics: -1,
          animalHandling: 2,
          arcana: -1,
          athletics: 7,
          deception: 1,
          history: 3,
          insight: 4,
          intimidation: 3,
          investigation: -1,
          medicine: 4,
          nature: 0,
          perception: 2,
          performance: 1,
          persuasion: 3,
          religion: 1,
          sleightOfHand: -1,
          stealth: -1,
          survival: 2,
          alignment: "Lawful Good",
          appearance:
            "Stout and rugged, with a braided beard and steely gray eyes. A set of intricate tattoos run along her arms.",
          background: `Born deep within the Iron Mountains, Thalia Ironfist has always felt a deep connection to the ancient spirits of the land. Trained as a paladin from a young age, she took up arms in defense of her homeland against the giants of the north. As a devout follower of Moradin, the god of dwarves, she wields her warhammer with fierce determination and righteous fury. Known for her unyielding spirit and unwavering sense of duty, Thalia stands as a beacon of hope for her people. While her demeanor may come off as stern, she has a soft spot for the downtrodden and the oppressed, often going out of her way to aid those in need. With a heart of gold and a will of steel, Thalia Ironfist embarks on quests that champion justice, honor, and the dwarven way.`,
          imgUrl: "https://i.imgur.com/2W9RzPc.jpg",
          faith: "Moradin",
        },
        {
          // CHARACTER 3
          userId: 5,
          level: 5,
          name: "Eldric Shadowcaster",
          role: "Wizard",
          race: "Human",
          maxHp: 32,
          currentHp: 32,
          strength: 10,
          dexterity: 14,
          constitution: 12,
          intelligence: 18,
          wisdom: 13,
          charisma: 10,
          armor: ["Robes of Protection"],
          equipped: ["Staff of the Arcane"],
          inventory: [
            "Spellbook",
            "Potion of Healing",
            "Wand of Magic Missiles",
          ],
          languages: ["Common", "Draconic", "Infernal"],
          spells: [
            "Mage Armor",
            "Fireball",
            "Magic Missile",
            "Counterspell",
            "Detect Magic",
            "Feather Fall",
            "Chill Touch",
            "Mage Hand",
            "Message",
            "Minor Illusion",
            "Mirror Image",
            "Dimension Door",
            "Fly",
          ],
          specialty: ["Arcane Tradition - Evocation"],
          tools: ["Arcane Focus"],
          weapons: ["Dagger"],
          initiative: 2,
          armorClass: 12,
          vision: "normal",
          acrobatics: 2,
          animalHandling: 0,
          arcana: 8,
          athletics: 0,
          deception: 0,
          history: 4,
          insight: 3,
          intimidation: 0,
          investigation: 6,
          medicine: 0,
          nature: 4,
          perception: 3,
          performance: 0,
          persuasion: 0,
          religion: 0,
          sleightOfHand: 0,
          stealth: 2,
          survival: 0,
          alignment: "Neutral Good",
          appearance: "Tall and thin, with dark hair and piercing green eyes.",
          background: `A powerful wizard and scholar, Eldric Shadowcaster spends much of his time studying ancient tomes and deciphering magical secrets. He has a reserved and contemplative demeanor, preferring solitude over crowds. Eldric's ultimate goal is to unravel the mysteries of the arcane and become a renowned archmage. He seeks knowledge and understanding above all else, and he values wisdom and intellect. While not overly social, he forms strong bonds with those he considers true friends. Eldric is known for his expertise in fire-based spells and his talent for countering enemy magic. He has a deep fascination with dragons and their history, often spending hours delving into ancient dragon lore. Eldric reveres Mystra, the goddess of magic, and seeks her guidance in his quest for magical mastery.`,
          imgUrl: "https://i.imgur.com/ZHCXW3k.jpg",
          faith: "Mystra",
        },
        {
          // CHARACTER 4
          userId: 1,
          level: 6,
          name: "Astrid Stormblade",
          role: "Barbarian",
          race: "Half-Orc",
          maxHp: 68,
          currentHp: 68,
          strength: 20,
          dexterity: 14,
          constitution: 18,
          intelligence: 8,
          wisdom: 12,
          charisma: 10,
          armor: ["Hide Armor"],
          equipped: ["Greataxe"],
          inventory: ["Javelin", "Potion of Healing", "Rage Elixir"],
          languages: ["Common", "Orcish"],
          spells: [],
          specialty: [
            "Rage",
            "Unarmored Defense",
            "Reckless Attack",
            "Danger Sense",
            "Path of the Berserker",
            "Extra Attack",
            "Fast Movement",
          ],
          tools: [],
          weapons: ["Greataxe", "Javelin"],
          initiative: 2,
          armorClass: 14,
          vision: "darkvision",
          acrobatics: 2,
          animalHandling: 0,
          arcana: 0,
          athletics: 9,
          deception: 0,
          history: 0,
          insight: 1,
          intimidation: 5,
          investigation: 0,
          medicine: 1,
          nature: 0,
          perception: 1,
          performance: 0,
          persuasion: 0,
          religion: 0,
          sleightOfHand: 0,
          stealth: 2,
          survival: 1,
          alignment: "Chaotic Neutral",
          appearance:
            "Towering and muscular, with greenish skin and a long, tusked underbite.",
          background: `A fierce warrior with a volatile temper, Astrid Stormblade is a Half-Orc barbarian known for her brute strength and unwavering determination. Raised among her orcish kin, she eventually ventured into the world to find her own path. Astrid's demeanor is often intimidating, but she is fiercely loyal to those she considers her allies. Her ultimate goal is to seek the thrill of battle and prove her worth in combat. She believes in survival of the fittest and embraces her primal instincts in battle, unleashing her rage when confronting foes. Although she may seem aggressive, she has a soft spot for nature and can display moments of unexpected kindness. Astrid worships Gruumsh, the chaotic evil god of orcs, as she sees strength as the true measure of one's worth.`,
          imgUrl: "https://i.imgur.com/2BgMDJm.jpg",
          faith: "Gruumsh",
        },
        {
          // CHARACTER 5
          userId: 1,
          level: 5,
          name: "Elara Nightshade",
          role: "Wizard",
          race: "Elf",
          maxHp: 28,
          currentHp: 28,
          strength: 8,
          dexterity: 16,
          constitution: 12,
          intelligence: 20,
          wisdom: 10,
          charisma: 14,
          armor: ["Mage Armor"],
          equipped: ["Staff of the Magi"],
          inventory: [
            "Spellbook",
            "Potion of Intelligence",
            "Scroll of Fireball",
          ],
          languages: ["Common", "Elvish"],
          spells: [
            "Fireball",
            "Magic Missile",
            "Shield",
            "Invisibility",
            "Feather Fall",
            "Detect Magic",
            "Haste",
            "Counterspell",
            "Fly",
            "Blink",
            "Mage Hand",
          ],
          specialty: [
            "Fey Ancestry",
            "Trance",
            "Herbalists Insight",
            "Arcane Tradition - Evocation",
          ],
          tools: ["Herbalism Kit"],
          weapons: [],
          initiative: 3,
          armorClass: 13,
          vision: "darkvision",
          acrobatics: 3,
          animalHandling: 0,
          arcana: 9,
          athletics: 0,
          deception: 2,
          history: 6,
          insight: 2,
          intimidation: 2,
          investigation: 6,
          medicine: 2,
          nature: 2,
          perception: 2,
          performance: 2,
          persuasion: 2,
          religion: 2,
          sleightOfHand: 3,
          stealth: 3,
          survival: 2,
          alignment: "Lawful Good",
          appearance:
            "Tall and slender, with long silver hair and piercing blue eyes.",
          background: `Elara Nightshade is an Elf wizard known for her vast knowledge of arcane magic. As an avid scholar, she spends much of her time studying ancient tomes and learning new spells. She has a calm and composed demeanor, often taking a methodical approach to problem-solving. Elara values wisdom and knowledge and is always eager to uncover the mysteries of the world. While she prefers peaceful solutions, she can be formidable in battle when her friends or her principles are threatened. Her trusty staff, the Staff of the Magi, aids her in channeling powerful spells. Elara's ultimate goal is to safeguard ancient magical artifacts and protect the world from the misuse of arcane powers. She follows Corellon Larethian, the god of elves and the patron of arcane magic, whom she reveres for his guidance and wisdom.`,
          imgUrl: "https://i.imgur.com/3InkcNF.jpg",
          faith: "Corellon Larethian",
        },
        {
          // CHARACTER 6
          userId: 4,
          level: 5,
          name: "Isabella Nightshade",
          role: "Paladin",
          race: "Tiefling",
          maxHp: 45,
          currentHp: 45,
          strength: 16,
          dexterity: 10,
          constitution: 14,
          intelligence: 12,
          wisdom: 12,
          charisma: 18,
          armor: ["Plate Armor", "Shield"],
          equipped: ["Longsword", "Holy Symbol"],
          inventory: [
            "Handaxe",
            "Healing Potion",
            "Scroll of Protection from Evil and Good",
          ],
          languages: ["Common", "Infernal"],
          spells: ["Bless", "Cure Wounds", "Searing Smite", "Thaumaturgy"],
          specialty: ["Hellish Rebuke", "Fighting Style - Protection"],
          tools: [],
          weapons: ["Longsword", "Handaxe"],
          initiative: 0,
          armorClass: 20,
          acrobatics: 0,
          animalHandling: 1,
          arcana: 1,
          athletics: 3,
          deception: 4,
          history: 1,
          insight: 3,
          intimidation: 4,
          investigation: 1,
          medicine: 3,
          nature: 1,
          perception: 3,
          performance: 4,
          persuasion: 6,
          religion: 3,
          sleightOfHand: 0,
          stealth: 0,
          survival: 1,
          alignment: "Lawful Good",
          appearance:
            "With crimson skin, horns, and glowing yellow eyes, Isabella has the distinct features of a tiefling. Despite her appearance, her radiant smile and warm personality put others at ease.",
          background: `Isabella Nightshade, a tiefling paladin, is a beacon of hope in a world shrouded in darkness. Born into a family of tieflings, she has faced prejudice and mistrust from those who fear her infernal heritage. But Isabella has chosen a different path, one of righteousness and compassion. She became a paladin to prove that goodness knows no race or lineage. Her devotion to her oath and her faith grants her divine powers that she uses to protect the innocent and smite evil. Isabella's strong sense of justice drives her to right the wrongs of the world and bring hope to the oppressed. She carries a longsword and a holy symbol, using both to channel her divine powers in battle. With her radiant smile and warm personality, Isabella seeks to inspire others to follow the path of goodness and redemption.`,
          imgUrl: "https://i.imgur.com/nHTKZ9C.jpg",
          faith: "Torm, the Loyal Fury",
        },
        {
          // CHARACTER 7
          userId: 4,
          level: 6,
          name: "Aurelius Flameheart",
          role: "Fighter",
          race: "Dragonborn",
          maxHp: 60,
          currentHp: 60,
          strength: 20,
          dexterity: 14,
          constitution: 18,
          intelligence: 8,
          wisdom: 12,
          charisma: 10,
          armor: ["Half Plate Armor"],
          equipped: ["Greataxe"],
          inventory: ["Javelin", "Potion of Healing"],
          languages: ["Common", "Draconic"],
          spells: [],
          specialty: [
            "Extra Attack",
            "Second Wind",
            "Great Weapon Fighting",
            "Great Weapon Mastery",
          ],
          tools: ["Smith's Tools"],
          weapons: ["Greataxe", "Javelin"],
          initiative: 2,
          armorClass: 16,
          vision: "normal",
          acrobatics: 2,
          animalHandling: 1,
          arcana: 0,
          athletics: 8,
          deception: 0,
          history: 0,
          insight: 1,
          intimidation: 3,
          investigation: 0,
          medicine: 1,
          nature: 0,
          perception: 1,
          performance: 0,
          persuasion: 0,
          religion: 0,
          sleightOfHand: 2,
          stealth: 2,
          survival: 1,
          alignment: "Chaotic Neutral",
          appearance: `Aurelius Flameheart stands tall with his
                             gleaming bronze scales and fiery orange eyes.
                             His presence is both commanding and inspiring.`,
          background: `Aurelius Flameheart, the last of the Flameheart lineage, is a Dragonborn with an indomitable spirit and an unyielding determination. Raised by his elders in the secluded Emberclaw tribe, Aurelius was chosen by the flames of their ancient totem as a bearer of the eternal fire. Gifted with the power of fire manipulation, he wields the element of flames to protect his kin and vanquish his foes. Aurelius carries the heavy burden of safeguarding his tribe's ancient traditions and carrying the legacy of his ancestors. Beyond the battlefield, Aurelius is a skilled blacksmith, forging weapons of extraordinary power for his brethren. Despite his fierce demeanor in battle, Aurelius possesses a compassionate heart and is deeply devoted to the well-being of his tribe. His journey will lead him through trials and revelations, uncovering the secrets of his clan's past and forging a new path for the future of Dragonborns.`,
          imgUrl: "https://i.imgur.com/3id7deT.jpg",
          faith: "Bahamut, the Platinum Dragon",
        },
        {
          // CHARACTER 8

          userId: 4,
          level: 5,
          name: "Zara",
          role: "Cleric",
          race: "Drow",
          maxHp: 42,
          currentHp: 42,
          strength: 10,
          dexterity: 18,
          constitution: 14,
          intelligence: 12,
          wisdom: 16,
          charisma: 14,
          armor: ["Chain Mail"],
          equipped: ["Mace", "Shield"],
          inventory: ["Healing Potion", "Holy Symbol", "Spider Silk"],
          languages: ["Common", "Elvish", "Undercommon"],
          spells: [
            "Cure Wounds",
            "Bane",
            "Inflict Wounds",
            "Darkness",
            "Faerie Fire",
            "Dancing Lights",
          ],
          specialty: [
            "Poison resistance",
            "Drow magic items",
            "Drow social knowledge",
            "Fey Ancestry",
          ],
          tools: [],
          weapons: ["Mace"],
          initiative: 4,
          armorClass: 16,
          vision: "superior darkvision",
          acrobatics: 4,
          animalHandling: 3,
          arcana: 1,
          athletics: 1,
          deception: 3,
          history: 1,
          insight: 3,
          intimidation: 2,
          investigation: 1,
          medicine: 3,
          nature: 1,
          perception: 3,
          performance: 2,
          persuasion: 2,
          religion: 3,
          sleightOfHand: 4,
          stealth: 4,
          survival: 1,
          alignment: "Neutral Evil",
          appearance: `Zara is a striking Drow with obsidian skin and silver hair cascading down her back. Her lavender eyes gleam with a malevolent glint, betraying her malicious nature. Clad in dark robes adorned with spider motifs, she moves gracefully, like a shadow lurking in darkness. Her voice is soft, yet filled with eerie charm, capable of captivating and manipulating those around her.`,
          background: `Born into the heart of a sinister Drow society, Zara grew up under the rule of the evil goddess Lolth. As a devoted priestess of Lolth, she was taught the ways of deception, cruelty, and dark magic. Embracing the teachings of her goddess, Zara became skilled in manipulation, using her charm and enchantments to bend others to her will. She mastered the art of dark magic, channeling divine power from Lolth to inflict pain and suffering upon her enemies. Zara's loyalty to Lolth is unwavering, and she seeks to advance her position within the Drow society, aiming to become a high priestess and earn the favor of her goddess. With her mace in hand and her spells at her disposal, Zara seeks to further the goals of Lolth, spreading chaos and treachery wherever she goes.`,
          imgUrl: "https://i.imgur.com/Pk86mKN.jpg",
          faith: "Lolth, the Evil Goddess of Spiders and Deceit",
        },
      ],
    });
    console.log("Characters seeded successfully");
  } catch (error) {
    console.error("Error seeding characters:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedUserScenarios() {
  try {
    await prisma.userScenarios.createMany({
      data: [
        // userId 1 has 145
        // userId 5 has 3
        // userId 6 has 2
        // userId 4 has characters 678
        {
          userId: 4,
          scenarioId: 1,
          completed: true,
          characterId: 6,
        },
        {
          userId: 4,
          scenarioId: 2,
          completed: true,
          characterId: 6,
        },
        {
          userId: 4,
          scenarioId: 3,
          completed: true,
          characterId: 7,
        },
        {
          userId: 4,
          scenarioId: 4,
          completed: true,
          characterId: 8,
        },
        {
          userId: 5,
          scenarioId: 5,
          completed: true,
          characterId: 3,
        },
        {
          userId: 5,
          scenarioId: 4,
          completed: true,
          characterId: 3,
        },
        {
          userId: 5,
          scenarioId: 3,
          completed: true,
          characterId: 3,
        },
        {
          userId: 6,
          scenarioId: 3,
          completed: true,
          characterId: 2,
        },
        {
          userId: 6,
          scenarioId: 2,
          completed: true,
          characterId: 2,
        },
        {
          userId: 6,
          scenarioId: 1,
          completed: true,
          characterId: 2,
        },
      ],
    });
    console.log("User scenarios seeded successfully");
  } catch (error) {
    console.error("Error seeding user scenarios:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the seedUsers function to start seeding

async function seedDatabase() {
  try {
    // await clearDatabase();
    await seedUsers();
    await seedCharacters();
    await seedScenarios();
    await seedUserScenarios();

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error during database seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();

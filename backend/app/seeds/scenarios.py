from app.models import db, Scenario, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_scenarios():
    scenarios = [
        Scenario(
            description="""Title: Shadows of the Undercity

Adventure Prompt: In the crumbling city of Veridian, the lower districts have become known as the dangerous Undercity. You are a lone adventurer, seeking to make a name for yourself. One day, you receive a desperate message from a stranger asking for your help to find their missing sibling who was last seen in the treacherous Undercity.

Starting Point: You stand at the entrance to the Undercity, a dimly lit archway casting shadows on the path ahead. The smell of decay and distant echoes of unknown dangers fill the air.

Objective: Your mission is to navigate the treacherous Undercity and find the missing sibling, Timon. Be cautious, for danger lurks around every corner.

Challenges and Encounters:

    Unfriendly Encounters: You encounter a gang of street toughs who block your path and demand something of value as "toll" for entering their territory. How will you handle this situation without getting into unnecessary trouble?

    The Informant: Through various interactions and inquiries, you hear rumors of a mysterious figure known as "Whispering Jax" who might know about Timon's whereabouts. Finding Jax won't be easy, as their identity is shrouded in secrecy.

    Hidden Traps and Obstacles: As you venture deeper into the Undercity, you come across hidden traps, rigged doors, and obstacles set up by gangs to protect their turf. How will you overcome these challenges?

    The Den of Shadows: You discover a hidden underground establishment where illegal activities take place. Here, you can gather more clues about Timon's location, but be careful not to attract too much attention or risk getting caught in the criminal web.

    Confrontation: Eventually, you find Timon in the clutches of a dangerous crime lord who plans to use the innocent boy as leverage. You must make a tough decision—negotiate cleverly or engage in a high-stakes battle to rescue Timon.""",
    img_url='https://i.imgur.com/bGDn420.jpg'
        ),
    Scenario(
        description="""Title: The Lost City of Eldoria

Adventure Prompt: Rumors of a lost city hidden deep within the uncharted jungles have reached your ears. Legends speak of a fabled place called Eldoria, said to hold untold treasures, ancient knowledge, and powerful artifacts. Intrigued by the stories, you embark on an expedition to find the elusive city and claim its hidden riches for yourself.

Starting Point: Your journey begins at the outskirts of the dense and mysterious jungle, where you stand with a map that supposedly leads to Eldoria. The foliage is thick, and the air is humid, concealing the path ahead.

Objective: Your mission is to navigate through the treacherous jungle, decipher the map's clues, and locate the legendary city of Eldoria.

Challenges and Encounters:

    Jungle Perils: The jungle is teeming with dangers, such as quicksand pits, venomous creatures, hostile wildlife, and hidden traps. You must use your wit and resourcefulness to traverse the hazardous terrain safely.

    Ancient Ruins: Along the way, you stumble upon ancient ruins that may hold clues to Eldoria's location and the challenges that await within the city. The ruins might contain puzzles, inscriptions, or even remnants of ancient guardians.

    Tribal Guardians: The jungle is home to various indigenous tribes, some of which are fiercely protective of their territory and the secrets of Eldoria. You may need to interact with these tribes, earning their trust or navigating diplomatic challenges.

    Rival Explorers: Other adventurers have also caught wind of the lost city and are competing to reach it first. You might encounter rival explorers seeking the same goal, leading to potential alliances, rivalries, or high-stakes competitions.

    The City of Eldoria: Upon discovering the hidden city, you must confront its mysteries and overcome the trials that protect its treasures. Ancient traps, puzzles, and perhaps even mythical guardians stand between you and the fabled riches of Eldoria.""",
    img_url='https://i.imgur.com/vZbSclS.jpg'
    ),
    Scenario(
        description="""Title: The Cursed Manor

Adventure Prompt: In a remote and mist-shrouded countryside, stands an ominous and decrepit manor that has long been rumored to be cursed. The locals avoid it at all costs, believing it to be haunted by vengeful spirits and dark entities. Intrigued by the mystery and allure of the unknown, you decide to enter the haunted manor to uncover its secrets and perhaps break the curse.

Starting Point: You stand outside the creaking gates of the cursed manor, its eerie silhouette looming against the darkening sky. An air of foreboding surrounds the place, but your curiosity pushes you forward.

Objective: Your mission is to explore the cursed manor, uncover its dark history, and put an end to the curse that has plagued it for generations.

Challenges and Encounters:

    Haunting Apparitions: As you step inside the manor, you encounter ghostly apparitions and eerie manifestations. These spirits are restless and may lead you to discover the truth behind their torment.

    Malevolent Traps: The cursed manor is full of deadly traps designed to keep intruders away. Beware of hidden pitfalls, moving walls, and other sinister mechanisms set to deter unwelcome visitors.

    Sinister Relics: Throughout the manor, you find relics and artifacts tied to its cursed past. These items might provide clues or unleash supernatural forces that you must deal with skillfully.

    Unraveling the Curse: Through exploration and interaction with the spirits, you begin to piece together the dark history of the manor. Unraveling the curse's origins and finding a way to lift it become essential to your survival.

    Confrontation with the Malevolence: As you delve deeper into the manor's depths, you encounter the malevolent force responsible for the curse. Defeating or pacifying this entity is crucial to breaking the curse's hold over the manor.""",
    img_url='https://i.imgur.com/xsdzqzb.jpg'
    ),
    Scenario(
    description="""Title: The Celestial Observatory

Adventure Prompt: In the mystical realm of Astrion, renowned for its connection to the stars and celestial magic, a wondrous observatory has been discovered. The Celestial Observatory is said to hold ancient knowledge, arcane artifacts, and access to otherworldly realms. Intrigued by the allure of its secrets, you embark on a journey to reach the observatory and unlock its cosmic mysteries.

Starting Point: Your journey commences at the base of the Celestial Mountain, where the observatory lies perched at its peak. The path ahead is filled with celestial wonders, as magical constellations illuminate the night sky.

Objective: Your mission is to ascend the Celestial Mountain, overcome its otherworldly challenges, and reach the awe-inspiring Celestial Observatory.

Challenges and Encounters:

    Astral Guardians: As you ascend the mountain, you encounter ethereal guardians bound to protect the observatory. Each guardian wields unique celestial powers, and you must prove yourself worthy by passing their trials or outsmarting them.

    Starlit Maze: The Celestial Mountain is veiled in a shifting maze of starlit pathways, each leading to different destinations. Navigating this maze requires keen perception, and you must decipher the patterns of the stars to choose the right path.

    Celestial Riddles: Along your journey, you encounter enigmatic celestial riddles that test your knowledge of astronomy and cosmic lore. The answers to these riddles may hold vital clues to reach the observatory.

    Astral Phenomena: The Celestial Mountain is a realm of magic and celestial phenomena. You might encounter gravity-defying areas, time-distorted pockets, and cosmic anomalies that challenge your understanding of reality.

    Cosmic Gateways: Upon reaching the Celestial Observatory, you discover that it holds portals to other planes and distant realms. Exploring these gateways could lead to encounters with otherworldly beings or the acquisition of rare artifacts.""",
    img_url='https://i.imgur.com/daJoxYo.jpg'
    ),
    Scenario(
        description="""Title: Echoes of the Forgotten Cave

Adventure Prompt: In the rugged and untamed wilderness lies a mysterious cave, hidden deep within the heart of the Mistwood Forest. Known only to a few locals as the "Forgotten Cave," it is said to be filled with ancient relics, lost treasures, and untold secrets. Intrigued by the rumors, you set out on an expedition to uncover the truth behind this enigmatic cavern.

Starting Point: Your journey begins at the edge of the Mistwood Forest, where a chilling mist clings to the dense foliage. The cave's entrance is rumored to be concealed within the forest's darkest and most remote corner.

Objective: Your mission is to venture into the depths of the Forgotten Cave, face its challenges, and unveil the long-buried mysteries it holds.

Challenges and Encounters:

    The Forest's Whisper: As you make your way through the Mistwood Forest, you encounter strange sounds and ethereal whispers that seem to guide you toward the cave. These whispers may offer cryptic clues or warnings.

    The Enigmatic Entrance: The cave's entrance is obscured by cunning illusions and natural traps. You must decipher the riddles or navigate the treacherous terrain to access the cave's inner chambers.

    Luminescent Fungi: Inside the cave, you encounter a network of luminescent fungi that light your path but may also attract the attention of curious creatures or reveal hidden dangers lurking in the shadows.

    Guardians of the Past: The cave holds ancient guardians, awakened by intruders. These guardians might be long-forgotten automatons, spectral apparitions, or awakened beasts sworn to protect the cave's secrets.

    The Heart of the Cave: As you delve deeper into the Forgotten Cave, you reach its heart—a vast chamber filled with lost treasures and ancient relics. However, this chamber may also be guarded by the most formidable protector of the cave's secrets.""",
    img_url='https://i.imgur.com/k4wzG7U.jpg'
    )
    ]
    for scene in scenarios:
        db.session.add(scene)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_scenarios():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.scenarios RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM scenarios"))

    db.session.commit()

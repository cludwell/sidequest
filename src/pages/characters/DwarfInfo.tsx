import React, { useState } from 'react';

type DwarfInfoProps = {
  expand: string | null;
  setExpanded: React.Dispatch<React.SetStateAction<string | null>>;
  type: string; 
};

export default function DwarfInfo({ expand, setExpanded, type }: DwarfInfoProps) {
  return (
    <>
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="radio"
          name="my-accordion-2"
          checked={expand === "SHORT_AND_STOUT"}
          onChange={() => setExpanded("SHORT_AND_STOUT")}
        />
        <div className="collapse-title text-xl font-medium">
          Short and Stout
        </div>
        <div className="collapse-content">
          <p>
            Bold and hardy, dwarves are known as skilled warriors, miners, and
            workers of stone and metal. Though they stand well under 5 feet
            tall, dwarves are so broad and compact that they can weigh as much
            as a human standing nearly two feet taller. Their courage and
            endurance are also easily a match for any of the larger folk.
          </p>
          <br />
          <p>
            Dwarven skin ranges from deep brown to a paler hue tinged with red,
            but the most common shades are light brown or deep tan, like certain
            tones of earth. Their hair, worn long but in simple styles, is
            usually black, gray, or brown, though paler dwarves often have red
            hair. Male dwarves value their beards highly and groom them
            carefully.
          </p>
        </div>
      </div>

      {/* Component for "Long Memory, Long Grudges" */}
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="radio"
          name="my-accordion-2"
          checked={expand === "LONG_MEMORY_LONG_GRUDGES"}
          onChange={() => setExpanded("LONG_MEMORY_LONG_GRUDGES")}
        />
        <div className="collapse-title text-xl font-medium">
          Long Memory, Long Grudges
        </div>
        <div className="collapse-content">
          <p>
            Dwarves can live to be more than 400 years old, so the oldest living
            dwarves often remember a very different world. For example, some of
            the oldest dwarves living in Citadel Felbarr (in the world of the
            Forgotten Realms) can recall the day, more than three centuries ago,
            when orcs conquered the fortress and drove them into an exile that
            lasted over 250 years. This longevity grants them a perspective on
            the world that shorter-lived races such as humans and halflings
            lack.
          </p>
          <br />
          <p>
            Dwarves are solid and enduring like the mountains they love,
            weathering the passage of centuries with stoic endurance and little
            change. They respect the traditions of their clans, tracing their
            ancestry back to the founding of their most ancient strongholds in
            the youth of the world, and don't abandon those traditions lightly.
            Part of those traditions is devotion to the gods of the dwarves, who
            uphold the dwarven ideals of industrious labor, skill in battle, and
            devotion to the forge.
          </p>
          <br />
          <p>
            Individual dwarves are determined and loyal, true to their word and
            decisive in action, sometimes to the point of stubbornness. Many
            dwarves have a strong sense of justice, and they are slow to forget
            wrongs they have suffered. A wrong done to one dwarf is a wrong done
            to the dwarf's entire clan, so what begins as one dwarf's hunt for
            vengeance can become a full-blown clan feud.
          </p>
        </div>
      </div>

      {/* Component for "Clans and Kingdoms" */}
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="radio"
          name="my-accordion-2"
          checked={expand === "CLANS_AND_KINGDOMS"}
          onChange={() => setExpanded("CLANS_AND_KINGDOMS")}
        />
        <div className="collapse-title text-xl font-medium">
          Clans and Kingdoms
        </div>
        <div className="collapse-content">
          <p>
            Dwarven kingdoms stretch deep beneath the mountains where the
            dwarves mine gems and precious metals and forge items of wonder.
            They love the beauty and artistry of precious metals and fine
            jewelry, and in some dwarves this love festers into avarice.
            Whatever wealth they can't find in their mountains, they gain
            through trade. They dislike boats, so enterprising humans and
            halflings frequently handle trade in dwarven goods along water
            routes. Trustworthy members of other races are welcome in dwarf
            settlements, though some areas are off limits even to them.
          </p>
          <br />
          <p>
            The chief unit of dwarven society is the clan, and dwarves highly
            value social standing. Even dwarves who live far from their own
            kingdoms cherish their clan identities and affiliations, recognize
            related dwarves, and invoke their ancestors' names in oaths and
            curses. To be clanless is the worst fate that can befall a dwarf.
          </p>
          <br />
          <p>
            Dwarves in other lands are typically artisans, especially
            weaponsmiths, armorers, and jewelers. Some become mercenaries or
            bodyguards, highly sought after for their courage and loyalty.
          </p>
        </div>
      </div>

      {/* Component for "Gods, Gold, and Clan" */}
      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="radio"
          name="my-accordion-2"
          checked={expand === "GODS_GOLD_AND_CLAN"}
          onChange={() => setExpanded("GODS_GOLD_AND_CLAN")}
        />
        <div className="collapse-title text-xl font-medium">
          Gods, Gold, and Clan
        </div>
        <div className="collapse-content">
          <p>
            Dwarves who take up the adventuring life might be motivated by a
            desire for treasure—for its own sake, for a specific purpose, or
            even out of an altruistic desire to help others. Other dwarves are
            driven by the command or inspiration of a deity, a direct calling or
            simply a desire to bring glory to one of the dwarf gods. Clan and
            ancestry are also important motivators. A dwarf might seek to
            restore a clan's lost honor, avenge an ancient wrong the clan
            suffered, or earn a new place within the clan after having been
            exiled. Or a dwarf might search for the axe wielded by a mighty
            ancestor, lost on the field of battle centuries ago.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="radio"
          name="my-accordion-2"
          checked={expand === "SLOW_TO_TRUST"}
          onChange={() => setExpanded("SLOW_TO_TRUST")}
        />
        <div className="collapse-title text-xl font-medium">Slow To Trust</div>
        <div className="collapse-content">
          <p>
            Dwarves get along passably well with most other races. “The
            difference between an acquaintance and a friend is about a hundred
            years,” is a dwarf saying that might be hyperbole, but certainly
            points to how difficult it can be for a member of a short-lived race
            like humans to earn a dwarf's trust.
          </p>
          <br />
          <p>
            <strong>Elves.</strong> “It's not wise to depend on the elves. No
            telling what an elf will do next; when the hammer meets the orc's
            head, they're as apt to start singing as to pull out a sword.
            They're flighty and frivolous. Two things to be said for them,
            though: They don't have many smiths, but the ones they have do very
            fine work. And when orcs or goblins come streaming down out of the
            mountains, an elf's good to have at your back. Not as good as a
            dwarf, maybe, but no doubt they hate the orcs as much as we do.”
          </p>
          <br />
          <p>
            <strong>Halflings.</strong> “Sure, they're pleasant folk. But show
            me a halfling hero. An empire, a triumphant army. Even a treasure
            for the ages made by halfling hands. Nothing. How can you take them
            seriously?”
          </p>
          <br />
          <p>
            <strong>Humans.</strong> “You take the time to get to know a human,
            and by then the human's on her deathbed. If you're lucky, she's got
            kin—a daughter or granddaughter, maybe—who's got hands and heart as
            good as hers. That's when you can make a human friend. And watch
            them go! They set their hearts on something, they'll get it, whether
            it's a dragon's hoard or an empire's throne. You have to admire that
            kind of dedication, even if it gets them in trouble more often than
            not.”
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-1">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expand === "DWARF_NAMES"}
          onChange={() => setExpanded("DWARF_NAMES")}
        />
        <div className="collapse-title text-xl font-medium">Dwarf Names</div>
        <div className="collapse-content">
          <p>
            A dwarf's name is granted by a clan elder, in accordance with
            tradition. Every proper dwarven name has been used and reused down
            through the generations. A dwarf's name belongs to the clan, not to
            the individual. A dwarf who misuses or brings shame to a clan name
            is stripped of the name and forbidden by law to use any dwarven name
            in its place.
          </p>
          <br />
          <strong>Male Names:</strong>
          <p>
            Adrik, Alberich, Baern, Barendd, Brottor, Bruenor, Dain, Darrak,
            Delg, Eberk, Einkil, Fargrim, Flint, Gardain, Harbek, Kildrak,
            Morgran, Orsik, Oskar, Rangrim, Rurik, Taklinn, Thoradin, Thorin,
            Tordek, Traubon, Travok, Ulfgar, Veit, Vondal
          </p>
          <br />
          <strong>Female Names:</strong>
          <p>
            Amber, Artin, Audhild, Bardryn, Dagnal, Diesa, Eldeth, Falkrunn,
            Finellen, Gunnloda, Gurdis, Helja, Hlin, Kathra, Kristryd, Ilde,
            Liftrasa, Mardred, Riswynn, Sannl, Torbera, Torgga, Vistra
          </p>
          <br />
          <strong>Clan Names:</strong>
          <p>
            Balderk, Battlehammer, Brawnanvil, Dankil, Fireforge, Frostbeard,
            Gorunn, Holderhek, Ironfist, Loderr, Lutgehr, Rumnaheim, Strakeln,
            Torunn, Ungart
          </p>
        </div>
      </div>

      <table className="table table-zebra my-4">
        {/* head */}
        <thead>
          <tr>
            <th>Trait</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Ability Scores</td>
            {type === "hill" ? (
              <td>Con +2; Wis +1</td>
            ) : (
              <td>Str +2; Con +2</td>
            )}
          </tr>
          {/* row 2 */}
          <tr>
            <td>Age</td>
            <td>
              Dwarves mature at the same rate as humans, but they're considered
              young until they reach the age of 50. On average, they live about
              350 years.
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>Alignment</td>
            <td>
              Most dwarves are lawful, believing firmly in the benefits of a
              well-ordered society. They tend toward good as well, with a strong
              sense of fair play and a belief that everyone deserves to share in
              the benefits of a just order.
            </td>
          </tr>
          {/* row 4 */}
          <tr>
            <td>Size</td>
            <td>
              Dwarves stand between 4 and 5 feet tall and average about 150
              pounds. Your size is Medium.
            </td>
          </tr>
          {/* row 5 */}
          <tr>
            <td>Speed</td>
            <td>Your speed is not reduced by wearing heavy armor.</td>
          </tr>
          {/* row 6 */}
          <tr>
            <td>Darkvision</td>
            <td>
              Accustomed to life underground, you have superior vision in dark
              and dim conditions. You can see in dim light within 60 feet of you
              as if it were bright light, and in darkness as if it were dim
              light. You can't discern color in darkness, only shades of gray.
            </td>
          </tr>
          {/* row 7 */}
          <tr>
            <td>Dwarven Resilience</td>
            <td>
              You have advantage on saving throws against poison, and you have
              resistance against poison damage.
            </td>
          </tr>
          {/* row 8 */}
          <tr>
            <td>Dwarven Combat Training</td>
            <td>
              You have proficiency with the battleaxe, handaxe, light hammer,
              and warhammer.
            </td>
          </tr>
          {/* row 9 */}
          <tr>
            <td>Tool Proficiency</td>
            <td>
              You gain proficiency with the artisan's tools of your choice:
              Smith's tools, brewer's supplies, or mason's tools.
            </td>
          </tr>
          {/* row 10 */}
          <tr>
            <td>Stonecunning</td>
            <td>
              Whenever you make an Intelligence (History) check related to the
              origin of stonework, you are considered proficient in the History
              skill and add double your proficiency bonus to the check, instead
              of your normal proficiency bonus.
            </td>
          </tr>
          {/* row 11 */}
          <tr>
            <td>Languages</td>
            <td>
              You can speak, read, and write Common and Dwarvish. Dwarvish is
              full of hard consonants and guttural sounds, and those
              characteristics spill over into whatever other language a dwarf
              might speak.
            </td>
          </tr>
          {/* row 12 */}
          <tr>
            <td>Dwarven Toughness</td>
            <td>
              Your hit point maximum increases by 1, and it increases by 1 every
              time you gain a level.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import IconResume from "./IconResume";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16 fade-in-slide-in ">
      {/* <h1 className="federant text-3xl font-bold">About Side Quest</h1>
      <div className="divider" /> */}
      <div className="hero-content text-center m-8">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            SideQuest is a portfolio project I started to best showcase my
            capabilities as a Full Stack Developer. Language models allow a
            level of flexibility difficult to match and table top gaming seems
            like a perfect use case. Experimenting with Chat GPT I realized that
            tons of fan content must have been fed into the model as it was
            frightenly good at what it did.
          </p>
          <p className="py-6">
            SideQuest was made with Next.js, next-auth, DaisyUI, Prisma, and
            TypeScript. I will be continually updating and working on this
            project as character creation in DnD is no small task.
          </p>
          <p className="py-6">
            If there is a junior position open at your organization, please
            consider me for the role 🙏. Please check out my{" "}
            <a
              href="https://cludwell.github.io/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              portfolio
            </a>{" "}
            and my{" "}
            <a
              href="https://www.linkedin.com/in/christian-ludwell-047b18247/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              social media.
            </a>
          </p>
          <div className="flex flex-row justify-evenly">
            <a
              href="https://github.com/cludwell"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Image
                src="https://i.imgur.com/KTjeA0w.png"
                alt="githubicon"
                className="github-icon w-6"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-ludwell-047b18247/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://i.imgur.com/iiYBy1G.png"
                alt="githubicon"
                className=" w-7"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://cludwell.github.io/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconResume type="" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl my-12">
        <div className="divider" />

        <h1 className="federant text-3xl font-bold py-8">
          Recent Updates 10/17
        </h1>
        <ul className="list-disc">
          <li>If you're reading this, the site is live!</li>
          <li>Spells for magic casters on class selection</li>
          <li>Modals for character and scenario selection</li>
          <li>Dice buttons for d20 and other dice rolls</li>
        </ul>
        <div className="divider" />
        <h1 className="federant text-3xl font-bold py-8">Coming Soon</h1>
        <ul className="list-disc">
          <li>AWS hosting of images</li>
          <li>Leveling up upon completion of scenario</li>
          <li>Displaying finished quests and accomplishments</li>
          <li>Edit Characters</li>
          <li>Might experiment with Dall-E for character pictures</li>
        </ul>
      </div>

      <p></p>
    </main>
  );
}

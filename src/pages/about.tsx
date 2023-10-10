export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16 fade-in-slide-in ">
      {/* <h1 className="federant text-3xl font-bold">About Side Quest</h1>
      <div className="divider" /> */}
      <div className="hero-content text-center m-8">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Side Quest is a portfolio project I started because I noticed there
            was huge potential for AI in this specific task and to best showcase
            my capabilities as a Full Stack Developer. Language models allow a
            level of flexibility difficult to match in a video game.
            Experimenting with Chat GPT I realized that tons of fan content must
            have been fed into the model as it was frightenly good at what it
            did.
          </p>
          <p className="py-6">
            SideQuest was made with Next.js, next-auth, DaisyUI, Prisma, and
            TypeScript. I will be continually updating and working on this
            project as character creation in DnD is no small task.
          </p>
          <p className="py-6">
            If there is a junior position open at your organization, please
            consider me for the role 🙏.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl m-8">
        <div className="divider" />

        <h1 className="federant text-3xl font-bold py-8">
          Recent Updates 10/9
        </h1>
        <ul className="list-disc">
          <li>If you're reading this, the site is live!</li>
          <li>User authentication is working</li>
          <li>Connected to ChatGPT with basic prompt</li>
          <li>Modals for character and scenario selection</li>
          <li>
            Character Creation is looking good for all classes except magic
            casters who have spells missing.
          </li>
        </ul>
        <div className="divider" />
        <h1 className="federant text-3xl font-bold py-8">Coming Soon</h1>
        <ul className="list-disc">
          <li>AWS hosting of images</li>
          <li>Leveling up upon completion of scenario</li>
          <li>Displaying finished quests and accomplishments</li>
          <li>Edit Characters</li>
          <li>Might experiment with Dall-E for character pictures</li>
          <li>Inventory management</li>
        </ul>
      </div>

      <p></p>
    </main>
  );
}

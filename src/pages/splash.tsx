import Link from "next/link";
import dm from "../../public/images/dm.jpg";
export default function Splash() {
  return (
    <main className="flex flex-col items-center px-4 md:px-16 fade-in-slide-in">
      <div
        className="hero h-100 m-8 rounded-2xl min-h-[85vh] max-w-screen-xl "
        style={{
          backgroundImage: `url(/images/dm.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl md:text-8xl astloch">side Quest</h1>
            <h1 className="mb-5 text-2xl md:text-4xl font-bold almendra">
              AI Dungeons and Dragons 5e
            </h1>
            <p className="mb-5 text-sm md:text-lg">
              SideQuest facilitates Dungeon and Dragons 5e character creation
              and uses the ChatGPT API for short sessions of tabletop
              roleplaying. Converse with ChatGPT as if your friend were the
              Dungeon Master, roll interactive dice, and ultimately hire me a
              junior developer 😀.
            </p>
            <Link className="btn btn-primary m-2" href={"/characters"}>
              Get Started
            </Link>
            <Link className="btn btn-secondary m-2" href={"/about"}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

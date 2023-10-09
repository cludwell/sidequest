export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-16 fade-in-slide-in">
      {/* <h1 className="federant text-3xl font-bold">What</h1>
      <div className="divider" /> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold almendra">SideQuest: AI guided Dnd 5e</h1>
            <p className="mb-5">
              SideQuest facilitates Dungeon and Dragons 5e character creation to use the ChatGPT API for short sessions of tabletop roleplaying. Converse with ChatGPT as if your friend was playing the Dungeon Master.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}

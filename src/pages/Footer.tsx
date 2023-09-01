import d20 from "../../public/images/d20.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
      <Image src={d20} alt="d20logo" className="w-16 object-cover" />

        <p>
          Side🎲Quest Industries Ltd.
          <br />
          Providing reliable table top tech since 2023
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">

          <a href="https://github.com/cludwell">
            <Image
              src="https://i.imgur.com/KTjeA0w.png"
              alt="githubicon"
              className="github-icon invert w-6"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/christian-ludwell-047b18247/">
            <Image
              src='https://i.imgur.com/iiYBy1G.png'
              alt="githubicon"
              className="invert w-7"
              width={28}
              height={28}
            />
          </a>
          <a href="https://cludwell.github.io/#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53" width="25" height="25"><path d="M45.07 12.12c-.26.25-.62.4-1.01.4h-6.01a2.564 2.564 0 0 1-2.56-2.56V3.91c0-.37.14-.72.37-.98H9.79c-1.03 0-1.87.84-1.87 1.87v43.4c0 1.03.84 1.87 1.87 1.87h33.42c1.03 0 1.87-.84 1.87-1.88V12.23c0-.04 0-.07-.01-.11m-28.31 3.84c.02-.15.04-.29.07-.44.03-.2.06-.39.1-.59.04-.18.09-.37.14-.55.04-.14.08-.28.13-.42.07-.21.14-.41.22-.61.04-.1.09-.2.13-.3.1-.22.2-.44.31-.65.04-.06.08-.12.11-.18a9.469 9.469 0 0 1 1.39-1.89c.09-.1.18-.2.27-.29l.39-.36c.15-.12.29-.24.44-.36.06-.05.11-.1.18-.15.02-.02.04-.02.06-.03a9.794 9.794 0 0 1 3.33-1.6c.03-.01.04-.03.06-.03.07-.02.13-.02.2-.04.25-.06.51-.11.77-.15.11-.01.23-.04.35-.05.37-.04.75-.07 1.13-.07.39 0 .76.03 1.14.07.12.01.23.04.35.05.26.04.51.09.76.15.07.02.14.02.2.04.02 0 .04.02.06.03 1.22.32 2.35.87 3.33 1.6.03.01.05.01.07.03l.18.15c.15.12.29.24.43.36l.39.36c.09.09.18.19.27.29.54.57 1.01 1.21 1.39 1.89.04.06.08.12.11.18.11.21.22.43.31.65a10.262 10.262 0 0 1 .359.91l.12.42c.05.18.102.37.142.55.05.2.078.39.109.59.02.15.05.29.06.44.04.35.07.71.07 1.08 0 2.33-.83 4.6-2.34 6.38a9.878 9.878 0 0 1-7.51 3.47c-2.89 0-5.63-1.27-7.5-3.47a9.88 9.88 0 0 1-2.28-7.46M40.233 44.95H12.852a.5.5 0 1 1 0-1h27.38a.5.5 0 0 1 0 1m0-4.527h-27.38a.5.5 0 0 1 0-1h27.38a.5.5 0 1 1 0 1m0-4.53h-27.38a.5.5 0 1 1 0-1h27.38a.5.5 0 0 1 0 1m0-4.528h-27.38a.5.5 0 0 1 0-1h27.38a.5.5 0 0 1 0 1" fill="#FFFFFF" className="color000 svgShape"></path><path d="M25.9 19.67c.22.04.43.05.65.05a4.18 4.18 0 0 0 2.95-1.22c.94-.95 1.37-2.26 1.16-3.6-.26-1.77-1.69-3.2-3.46-3.47a4.14 4.14 0 0 0-3.62 1.18c-.95.96-1.37 2.28-1.16 3.63.29 1.76 1.72 3.18 3.48 3.43" fill="#FFFFFF" className="color000 svgShape"></path><path d="M26.54 24.89c2.31 0 4.49-1.01 5.99-2.77.31-.37.59-.77.83-1.2a5.036 5.036 0 0 0-2.87-2.04c-.08.11-.18.22-.28.32a5.18 5.18 0 0 1-3.66 1.52c-.22 0-.51-.01-.83-.07-1.24-.17-2.35-.83-3.14-1.77a4.967 4.967 0 0 0-2.85 2.05c.24.42.52.82.83 1.19a7.851 7.851 0 0 0 5.98 2.77m11.508-13.373h6.015a.5.5 0 0 0 .5-.5l-7.57-7.604a.5.5 0 0 0-.5.5v6.05c0 .857.699 1.554 1.555 1.554" fill="#FFFFFF" className="color000 svgShape"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
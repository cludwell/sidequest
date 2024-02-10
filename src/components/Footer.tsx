import d20 from "../../public/images/d20.png";
import Image from "next/image";
import IconResume from "./icons/IconResume";

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
          <a
            href="https://github.com/cludwell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://i.imgur.com/KTjeA0w.png"
              alt="githubicon"
              className="github-icon invert w-6"
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
              className="invert w-7"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://cludwell.github.io/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconResume type="dark"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

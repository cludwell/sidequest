import { animate, motion } from "framer-motion";
export default function LandingPhaseB() {
  const text =
    `Build your own character using DnD 5e rules, and go on an adventure with ChatGPT as the guide. If you can imagine it, anything's possible.`.split(
      " "
    );
  return (
    <div className="max-w-lg mt-24">
      <div className="divider"></div>
      <div className="flex flex-row flex-wrap justify-center text-xl eczar ">
        {text.map((word, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 + i * 0.1 }}
            className=""
            key={word + i}
          >
            {word + "\u2004"}{" "}
          </motion.div>
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
}

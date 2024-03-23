import { motion } from "framer-motion";
export default function LandingPhaseB() {
  const text =
    `SideQuest is an effort to turn the hallucinations of AI into an asset. Conversational AI is uniquely suited for table top role-playing as a large language model is able to pivot and improvise unique scenarios for the user on their adventure.`.split(
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

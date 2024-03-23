import { motion } from "framer-motion";

export default function Logo() {
  const sidequest = "SideQuest".split("");

  return (
    <div className="absolute z-20 flex flex-row left-12 top-12 shadowed" >
      {sidequest.map((char, i) => (
        <motion.div
          className="text-white text-7xl federant"
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 2 + i * 0.2,
            type: "spring",
            stiffness: 170,
            damping: 10,
          }}
          key={char + i}
        >
          {char}
        </motion.div>
      ))}
    </div>
  );
}

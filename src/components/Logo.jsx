import { motion } from "framer-motion";

export default function Logo() {
  const sidequest = "SideQuest".split('');

  return (
    <div className="absolute z-20 left-12 top-12 shadowed" id="">
      {sidequest.map((char, i) => (
        <motion.span
        className="text-white text-7xl federant"
        initial={{ opacity: 0, x: 100, y:200  }}
        animate={{ opacity: 1, x: 0, y:0}}
        transition={{
          delay: 2 + i * 0.15,
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
          key={char + i}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

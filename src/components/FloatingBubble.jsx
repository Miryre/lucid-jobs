import { motion } from 'framer-motion'

const FloatingBubble = ({ delay = 0, duration = 8, size = 60, left = '50%' }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-clear-water opacity-10 blur-sm"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: left,
        bottom: '-100px',
      }}
      animate={{
        y: [0, -1000],
        opacity: [0, 0.3, 0.3, 0],
        scale: [0.8, 1, 1, 1.2],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default FloatingBubble;
import { motion } from 'framer-motion'
import FloatingBubble from '../components/FloatingBubble'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-midnight-water flex items-center justify-center overflow-hidden relative">
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(135deg, #003D5B 0%, #0A1929 25%, #00A8E8 50%, #0A1929 75%, #003D5B 100%)',
          backgroundSize: '200% 200%',
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            background: 'linear-gradient(135deg, #003D5B 0%, #0A1929 25%, #00A8E8 50%, #0A1929 75%, #003D5B 100%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Main Content */}
      <div className='text-center relative z-10'>
        {/* Title - drops down */}
        <motion.h1
          className='text-6xl font-bold text-foam mb-4'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lucid Jobs
        </motion.h1>

        {/* Tagline - fades in after title */}
        <motion.p 
          className="text-2xl text-clear-water mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          See jobs clearly
        </motion.p>
        
        {/* Buttons - slide up from bottom */}
        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="bg-clear-water text-deep-ocean px-6 py-3 rounded-lg font-semibold"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 20px rgba(0, 168, 232, 0.5)",
              backgroundColor: "#5BC0EB"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Find Jobs
          </motion.button>
          
          <motion.button 
            className="bg-deep-gray text-foam px-6 py-3 rounded-lg font-semibold border border-slate"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#5BC0EB",
              boxShadow: "0 0 15px rgba(91, 192, 235, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Post Jobs
          </motion.button>
        </motion.div>
      </div>

      {/* Floating bubbles */}
      <FloatingBubble delay={0} duration={12} size={80} left="10%" />
      <FloatingBubble delay={2} duration={10} size={60} left="25%" />
      <FloatingBubble delay={1} duration={15} size={100} left="50%" />
      <FloatingBubble delay={3} duration={11} size={70} left="70%" />
      <FloatingBubble delay={4} duration={13} size={50} left="85%" />
      <FloatingBubble delay={1.5} duration={14} size={90} left="40%" />
    </div>
  );
};

export default Homepage;
import { motion } from 'framer-motion'
import { useState } from 'react'

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      {/* Glassmorphism container */}
      <div 
        className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl"
        style={{
          boxShadow: isFocused 
            ? '0 0 40px rgba(0, 168, 232, 0.4)' 
            : '0 10px 40px rgba(0, 0, 0, 0.3)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Search input row */}
        <div className="flex gap-4 items-center">
          {/* Search icon */}
          <div className="text-clear-water text-2xl">
            
          </div>

          {/* Main search input */}
          <input
            type="text"
            placeholder="Search jobs... (e.g. Software Engineer, Marketing Manager)"
            className="flex-1 bg-transparent text-foam text-lg placeholder-mist outline-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Search button */}
          <motion.button
            className="bg-clear-water text-deep-ocean px-6 py-3 rounded-lg font-semibold"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 168, 232, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        </div>

        {/* Filters row */}
        <div className="flex gap-4 mt-4">
          {/* Location filter */}
          <select className="flex-1 bg-deep-gray/50 text-foam px-4 py-2 rounded-lg outline-none border border-slate/30 cursor-pointer hover:border-clear-water/50 transition-colors">
            <option>All Locations</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On-site</option>
          </select>

          {/* Industry filter */}
          <select className="flex-1 bg-deep-gray/50 text-foam px-4 py-2 rounded-lg outline-none border border-slate/30 cursor-pointer hover:border-clear-water/50 transition-colors">
            <option>All Industries</option>
            <option>Technology</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Healthcare</option>
          </select>

          {/* Experience level filter */}
          <select className="flex-1 bg-deep-gray/50 text-foam px-4 py-2 rounded-lg outline-none border border-slate/30 cursor-pointer hover:border-clear-water/50 transition-colors">
            <option>All Experience Levels</option>
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior</option>
            <option>Lead/Principal</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
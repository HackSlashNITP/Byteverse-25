'use client'
import React, { useEffect, useState } from 'react'
import {motion} from 'motion/react'
  
const CloudAnimation = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    // Ensure window is available before accessing it
    if (typeof window !== 'undefined') {
      setScreenSize(window.innerWidth + 10);

      const handleResize = () => {
        setScreenSize(window.innerWidth + 10);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <motion.div className="text-white relative w-full">
      <motion.img
        animate={{ x: -screenSize }}
        transition={{ duration: 1.8 }}
        src={'/images/cloudL.png'}
        alt="right cloud"
        className="w-[100vw] h-[230px] absolute z-10 top-[-30px] lg:h-[86vh] md:h-[30vh] md:top-[-60px] lg:top-0"
      />
      <motion.img
        animate={{ x: screenSize }}
        transition={{ duration: 1.8 }}
        src={'/images/cloudR.png'}
        alt="left cloud"
        className="w-[100vw] h-[230px] absolute z-20 top-[-20px] lg:h-[86vh] md:h-[30vh] md:top-2 lg:top-0"
      />
    </motion.div>
  );
};

export default CloudAnimation;
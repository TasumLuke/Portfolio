
import React from 'react';
import { motion } from 'framer-motion';
import { Dna } from 'lucide-react';

interface LoadingAnimationProps {
  size?: 'sm' | 'md' | 'lg';
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        animate={{ 
          rotateY: 360,
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className={`text-primary ${sizes[size]}`}
      >
        <Dna className="w-full h-full" />
      </motion.div>
      <motion.p 
        className="mt-4 text-muted-foreground"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingAnimation;

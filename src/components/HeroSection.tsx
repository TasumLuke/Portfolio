
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, ChevronDown, Dna, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const parallaxLayers = heroRef.current.querySelectorAll('.parallax-layer');
      parallaxLayers.forEach((layer) => {
        const element = layer as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '1');
        
        const xOffset = (x - 0.5) * speed * 30; 
        const yOffset = (y - 0.5) * speed * 30;
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-radial from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
        
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-primary opacity-30 animate-float"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="parallax-layer absolute right-[10%] top-[20%] opacity-10 dark:opacity-20" data-speed="1.2">
          <Dna className="w-64 h-64 text-primary" />
        </div>
        <div className="parallax-layer absolute left-[15%] bottom-[15%] opacity-10 dark:opacity-20" data-speed="0.8">
          <HeartPulse className="w-48 h-48 text-primary" />
        </div>
        <div className="parallax-layer absolute left-[20%] top-[25%] opacity-10 dark:opacity-20" data-speed="1.5">
          <Sparkles className="w-32 h-32 text-primary" />
        </div>
      </div>

      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
            Greetings & Welcome
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hey! I'm <span className="text-gradient">Luke Rimmo Lego! </span><br></br>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-muted-foreground max-w-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I am a Biomedical Engineering Major, and a Pre-medical student exploring the intersection of engineering and medicine, hoping to develop innovative healthcare solutions and improve patient outcomes. My goal is to work towards improving personalised healthcare and make it easily accessible to all strata of society
        </motion.p>
          
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-md" 
            onClick={scrollToContent}
          >
            Explore My Work
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 px-6 py-6 rounded-md"
            onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Publications
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToContent}
      >
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </motion.div>
    </div>
  );
};

export default HeroSection;

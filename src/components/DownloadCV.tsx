import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const DownloadCV: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
      
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/file/d/1i5_b0VBTeoIxqfS5ApJl7aSH1zdEqpby/view?usp=sharing';
      link.download = 'Rimmo Loyi Lego- Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur" />
            <div className="relative bg-white dark:bg-gray-950 rounded-full p-5">
              <FileText className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Download My Curriculum Vitae
          </h2>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Button 
              onClick={handleDownload}
              disabled={isDownloading || isDownloaded}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-md group"
            >
              {isDownloading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Downloading...
                </>
              ) : isDownloaded ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-white" />
                  Downloaded
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce text-white" />
                  Download CV
                </>
              )}
            </Button>
          </motion.div>
          
          <p className="text-xs text-muted-foreground mt-4">
            PDF format • Updated May 2025 • 3.2 MB
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DownloadCV;
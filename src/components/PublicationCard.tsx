
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, BookText, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface PublicationProps {
  id: number;
  title: string;
  journal: string;
  year: number;
  authors: string;
  abstract: string;
  doi: string;
  imageUrl: string;
  category: string;
  citations: number;
}

const PublicationCard: React.FC<PublicationProps> = ({
  id,
  title,
  journal,
  year,
  authors,
  abstract,
  doi,
  imageUrl,
  category,
  citations
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      <motion.div
        className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border hover-card-glow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={(e) => {
          if (!isHovered) return;
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty('--x', `${x}%`);
          card.style.setProperty('--y', `${y}%`);
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
          
          <p className="text-sm text-muted-foreground mb-3">{journal}</p>
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <BookText className="w-4 h-4 mr-1" />
              
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary"
              onClick={() => setShowDialog(true)}
            >
              <BookOpen className="w-4 h-4 mr-1" /> Details
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
            <DialogDescription>
              <div className="flex justify-between items-center">
                <span className="text-sm">{journal}, {year}</span>
              </div>
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-1">Authors</h4>
            <p className="text-sm text-muted-foreground mb-4">{authors}</p>
            
            <h4 className="text-sm font-medium mb-1">Brief</h4>
            <p className="text-sm text-muted-foreground mb-4">{abstract}</p>
            
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <BookText className="w-4 h-4 mr-1" />
                
              </div>
              
              <a
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary text-sm hover:underline"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                <span>View Publication (DOI: {doi})</span>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PublicationCard;


import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Clock, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface VentureProps {
  id: number;
  name: string;
  description: string;
  role: string;
  technologies: string[];
  imageUrl: string;
  status: 'Ongoing' | 'Completed' | 'Early Stage';
  year: number;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Ongoing':
      return 'bg-green-500/20 text-green-600 border-green-200';
    case 'Completed':
      return 'bg-blue-500/20 text-blue-600 border-blue-200';
    case 'Early Stage':
      return 'bg-amber-500/20 text-amber-600 border-amber-200';
    default:
      return 'bg-gray-500/20 text-gray-600 border-gray-200';
  }
};

const VentureCard: React.FC<VentureProps> = ({
  name,
  description,
  role,
  technologies,
  imageUrl,
  status,
  year
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge className={`${getStatusColor(status)} border px-2 py-1 text-xs font-medium rounded-full`}>
            {status}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <div className="flex items-center">
            <span className="text-xs text-white/90 flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {year}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3 flex items-center text-sm text-primary font-medium">
          <Bookmark className="w-4 h-4 mr-1" />
          <span>{role}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary/70 text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 bottom-0 left-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default VentureCard;


import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ArticleProps {
  id: number;
  title: string;
  publication: string;
  date: string;
  summary: string;
  imageUrl: string;
  url: string;
  featured: boolean;
}

const ArticleCard: React.FC<ArticleProps> = ({
  title,
  publication,
  date,
  summary,
  imageUrl,
  url,
  featured
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border hover-card-glow h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-white">Featured</Badge>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        
        <p className="text-sm font-medium text-primary mb-3">{publication}</p>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">{summary}</p>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary text-sm hover:underline mt-auto"
        >
          Read Full Article
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ArticleCard;

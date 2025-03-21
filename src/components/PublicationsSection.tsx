
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import PublicationCard from '@/components/PublicationCard';
import { publications } from '@/data/publicationsData';

const PublicationsSection: React.FC = () => {
  const navigate = useNavigate();
  const featuredPublications = publications.slice(0, 3);
  
  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="inline-block mb-3 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
            Research Papers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Recent Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my contributions to peer-reviewed journals- as an undergraduate.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredPublications.map((publication, index) => (
            <AnimatedSection key={publication.id} delay={index * 0.1}>
              <PublicationCard {...publication} />
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="group"
            onClick={() => navigateTo('/publications')}
          >
            View All Publications
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
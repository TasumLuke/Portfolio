
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import VentureCard from '@/components/VentureCard';
import { ventures } from '@/data/venturesData';

const VenturesSection: React.FC = () => {
  const navigate = useNavigate();
  const featuredVentures = ventures.slice(0, 3);
  
  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="inline-block mb-3 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
            Projects & Initiatives
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Projects & Ventures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the initiatives and Projects I am involed with.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredVentures.map((venture, index) => (
            <AnimatedSection key={venture.id} delay={index * 0.1}>
              <VentureCard {...venture} />
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="group"
            onClick={() => navigateTo('/ventures')}
          >
            Explore All Ventures
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
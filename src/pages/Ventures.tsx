
import React, { useState } from 'react';
import { ArrowLeft, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import AnimatedSection from '@/components/AnimatedSection';
import VentureCard from '@/components/VentureCard';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ventures } from '@/data/venturesData';

type StatusType = 'All' | 'Ongoing' | 'Completed' | 'Early Stage';

const Ventures: React.FC = () => {
  const [status, setStatus] = useState<StatusType>('All');
  
  // Filter ventures by status
  const filteredVentures = ventures.filter(venture => {
    if (status === 'All') return true;
    return venture.status === status;
  });
  
  // Sort ventures by year (newest first)
  const sortedVentures = [...filteredVentures].sort((a, b) => b.year - a.year);

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12">
            <Button 
              variant="ghost" 
              className="mb-6 -ml-3"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Projects & Ventures
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Some of the Initiatives and Work I have done.
            </p>
          </AnimatedSection>
          
          {/* Filters */}
          <AnimatedSection className="mb-12">
            <div className="bg-secondary/30 p-5 rounded-xl">
              <h3 className="text-lg font-medium mb-4">Filter by Status</h3>
              <RadioGroup 
                value={status} 
                onValueChange={(value) => setStatus(value as StatusType)}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-full">
                  <RadioGroupItem value="All" id="all" />
                  <Label htmlFor="all" className="cursor-pointer">All Projects</Label>
                </div>
                
              </RadioGroup>
            </div>
          </AnimatedSection>
          
          {/* Ventures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedVentures.map((venture, index) => (
              <AnimatedSection key={venture.id} delay={index * 0.05}>
                <VentureCard {...venture} />
              </AnimatedSection>
            ))}
          </div>
          
          {/* Empty state */}
          {sortedVentures.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No projects match the selected filter.</p>
            </div>
          )}
          
          {/* Additional information */}
          <AnimatedSection className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-border">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <HeartPulse className="h-24 w-24 text-primary/70" />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-3">Looking for a Partnership?</h3>
                <p className="text-muted-foreground mb-5">
                  I'm always looking for opportunities to collaborate on interesting projects. I'd love to discuss potential collaborations.
                </p>
                <Link href="/contact" passHref>
                <Button className="bg-primary hover:bg-primary/90 text-white" >
                  Contact Me
                </Button></Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Ventures;
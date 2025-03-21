
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AnimatedSection from '@/components/AnimatedSection';
import PublicationCard from '@/components/PublicationCard';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { publications } from '@/data/publicationsData';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading for publications
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter publications by search term
  const filteredPublications = publications.filter(publication => {
    const matchesSearch = 
      publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });
  
  const sortedPublications = [...filteredPublications].sort((a, b) => {
    return b.year - a.year; 
  });

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-6 -ml-3 group"
              asChild
            >
              <Link to="/">
                <motion.div
                  className="mr-2 h-4 w-4" 
                  whileHover={{ x: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowLeft />
                </motion.div>
                <span>Back to Home</span>
              </Link>
            </Button>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Research Publications
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              A comprehensive collection of my peer-reviewed publications.
            </motion.p>
          </AnimatedSection>
          
          {/* Search */}
          <AnimatedSection className="mb-10 mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.3
              }}
            >
              <Input
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md focus-within:ring-2 ring-primary/20 transition-all duration-300"
              />
            </motion.div>
          </AnimatedSection>
          
          {/* Results */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <div key={index} className="flex flex-col space-y-3">
                    <Skeleton className="h-[200px] w-full rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
              >
                {sortedPublications.length > 0 ? (
                  sortedPublications.map((publication, index) => (
                    <AnimatedSection key={publication.id} delay={index * 0.05}>
                      <motion.div
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <PublicationCard {...publication} />
                      </motion.div>
                    </AnimatedSection>
                  ))
                ) : (
                  <div className="col-span-full text-center py-10">
                    <motion.p 
                      className="text-muted-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      No publications match your search criteria.
                    </motion.p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
          <AnimatedSection className="text-center text-sm text-muted-foreground mt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Showing {sortedPublications.length} of {publications.length} publications
            </motion.p>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Publications;
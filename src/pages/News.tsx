
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import AnimatedSection from '@/components/AnimatedSection';
import NewsCard from '@/components/NewsCard';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { news } from '@/data/newsData';

const sources = ['All', ...new Set(news.map(item => item.source))];

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSources, setSelectedSources] = useState<string[]>(['All']);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  
  const toggleSource = (source: string) => {
    if (source === 'All') {
      setSelectedSources(['All']);
    } else {
      const newSelection = selectedSources.filter(s => s !== 'All');
      if (newSelection.includes(source)) {
        const filtered = newSelection.filter(s => s !== source);
        setSelectedSources(filtered.length ? filtered : ['All']);
      } else {
        setSelectedSources([...newSelection, source]);
      }
    }
  };
  const filteredNews = news.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSource = 
      selectedSources.includes('All') || 
      selectedSources.includes(item.source);
    
    const matchesFeatured = showFeaturedOnly ? item.featured : true;
    
    return matchesSearch && matchesSource && matchesFeatured;
  });
  
  const sortedNews = [...filteredNews].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-8">
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
              In The News
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Media coverage and press mentions about my work.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            {/* Sidebar Filters */}
            <AnimatedSection className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Search</h3>
                <Input
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Sources</h3>
                <div className="space-y-2">
                  {sources.map((source) => (
                    <div key={source} className="flex items-center">
                      <Checkbox
                        id={source}
                        checked={selectedSources.includes(source)}
                        onCheckedChange={() => toggleSource(source)}
                      />
                      <label
                        htmlFor={source}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {source}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <Checkbox
                    id="featured"
                    checked={showFeaturedOnly}
                    onCheckedChange={() => setShowFeaturedOnly(!showFeaturedOnly)}
                  />
                  <label
                    htmlFor="featured"
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Show Featured Only
                  </label>
                </div>
              </div>
            </AnimatedSection>
            
            {/* News List */}
            <div className="lg:col-span-3">
              {sortedNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sortedNews.map((item, index) => (
                    <AnimatedSection key={item.id} delay={index * 0.05}>
                      <NewsCard {...item} />
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No news match your search criteria.</p>
                </div>
              )}
              
              {/* News count */}
              <AnimatedSection className="text-sm text-muted-foreground mt-8">
                Showing {sortedNews.length} of {news.length} news items
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default News;

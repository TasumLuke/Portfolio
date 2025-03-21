
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import AnimatedSection from '@/components/AnimatedSection';
import ArticleCard from '@/components/ArticleCard';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles } from '@/data/articlesData';

const Articles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFeatured = showFeaturedOnly ? article.featured : true;
    
    return matchesSearch && matchesFeatured;
  });
  
  const sortedArticles = [...filteredArticles].sort((a, b) => {
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
              Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              The following are articles that I have written for various media outlets.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            {/* Sidebar Filters - Simplified */}
            <AnimatedSection className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Search</h3>
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
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
            
            {/* Articles List */}
            <div className="lg:col-span-3">
              {sortedArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sortedArticles.map((article, index) => (
                    <AnimatedSection key={article.id} delay={index * 0.05}>
                      <ArticleCard {...article} />
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No articles match your search criteria.</p>
                </div>
              )}
              
              {/* Articles count */}
              <AnimatedSection className="text-sm text-muted-foreground mt-8">
                Showing {sortedArticles.length} of {articles.length} articles
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Articles;

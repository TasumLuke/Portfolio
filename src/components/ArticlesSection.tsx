
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articlesData';

const ArticlesSection: React.FC = () => {
  const navigate = useNavigate();
  const featuredArticles = articles.filter(article => article.featured).slice(0, 2);
  
  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="inline-block mb-3 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
            My Writings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are a few articles I have written for different platforms
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {featuredArticles.map((article, index) => (
            <AnimatedSection key={article.id} delay={index * 0.1}>
              <ArticleCard {...article} />
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="group"
            onClick={() => navigateTo('/articles')}
          >
            Browse All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

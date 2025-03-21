
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HobbiesSection from '@/components/HobbiesSection';
import PublicationsSection from '@/components/PublicationsSection';
import ArticlesSection from '@/components/ArticlesSection';
import NewsSection from '@/components/NewsSection';
import VenturesSection from '@/components/VenturesSection';
import DownloadCV from '@/components/DownloadCV';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <HobbiesSection />
        <PublicationsSection />
        <ArticlesSection />
        <NewsSection />
        <VenturesSection />
        <DownloadCV />
      </main>
      <Footer />
    </>
  );
};

export default Index;

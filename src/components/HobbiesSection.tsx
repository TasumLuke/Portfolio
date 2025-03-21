
import React from 'react';
import { Leaf, Bike } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import BadmintonSVG from "@/components/Pics/badminton-svgrepo-com.svg";
import FootballSVG from "@/components/Pics/Tottenham_Hotspur.svg";

const BadmintonIcon = () => (
  <img src={BadmintonSVG} alt="Badminton Icon" className="w-14 h-14 mx-auto mb-2 text-primary" />
);

const FootballIcon = () => (
  <img src={FootballSVG} alt="Football Icon" className="w-16 h-16 mx-auto mb-2 text-primary" />
);


const HobbiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="inline-block mb-3 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
            Beyond Academics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            My Hobbies & Interests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            When I'm not in the lab or studying, you'll find me pursuing these passions.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <AnimatedSection delay={0.1}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center h-full hover:shadow-lg transition-all duration-300 border border-border">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Plant Collection</h3>
              <p className="text-sm text-muted-foreground">Amassed over 250 different species of plants in my own personal herbarium</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center h-full hover:shadow-lg transition-all duration-300 border border-border">
              <Bike className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Biking</h3>
              <p className="text-sm text-muted-foreground">Exploring new trails and enjoying the outdoors on two wheels.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center h-full hover:shadow-lg transition-all duration-300 border border-border">
              <BadmintonIcon />
              <h3 className="font-semibold mb-2">Badminton</h3>
              <p className="text-sm text-muted-foreground">Improving my skills and enjoying friendly matches on the court.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center h-full hover:shadow-lg transition-all duration-300 border border-border">
              <FootballIcon />
              <h3 className="font-semibold mb-2">Tottenham Hotspur</h3>
              <p className="text-sm text-muted-foreground">Loyal fan of Spurs, despite the frequent losses 🥲.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;

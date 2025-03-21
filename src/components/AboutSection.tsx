import React from 'react';
import { Brain, Microscope, FlaskConical, Dna, HeartPulse, TestTube } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <h2 className="section-title">About Me</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            <strong>Hello! No Aidun? </strong> <i>&#40;How are You?&#41;</i> I am Luke Rimmo Loyi Lego, a pre-med student and biomedical engineering major at Stevens Institute of Technology in New Jersey. I am honored to have been recognized as an NTSE Scholar, one of India's most prestigious academic awards.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
            My academic interests are cross-disciplinary and include biomimetics, synthetic biology, neuroscience, public health, and genetics, specifically CRISPR technology. Apart from the academic life, I also co-founded the Northeast Center for High School Research (NECHR) as a non-profit organization to spread research among the high school students across the globe at no cost- for those who might not have the opportunity otherwise. I am also the founder of the Tani Language Foundation for spreading and conserving the Tani, which is spoken by my native people. A project I had undertaken, Ngok Siang, for rescuing the dolphins of Siang River, won the runners-up prize at the 9th Millennium Oceans Prize organized by the Millennium Campus Network (MCN).
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
            Presently, I am working in bulding a stealth startup with my friend Bowen Jiang, concentrating on our shared vision into improving the college experience. As for academia, the following are what truly excites me:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <Brain className="w-8 h-8 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Neural Engineering</span>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <Microscope className="w-8 h-8 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Medical Imaging</span>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <FlaskConical className="w-8 h-8 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Biomaterials</span>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <Dna className="w-8 h-8 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Tissue Engineering</span>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <HeartPulse className="w-8 h-8 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Biomedical Devices</span>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <TestTube className="w-8 h-8 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Biology Wet Lab</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://github.com/TasumLuke/Portfolio/blob/main/src/components/Pics/cachedImage.PNG?raw=true" 
                  alt="Badminton Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl z-20">
                <img 
                  src="https://github.com/TasumLuke/Portfolio/blob/main/src/components/Pics/IMG_7315-removebg-preview.png?raw=true" 
                  alt="Your Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-5 -right-5 w-1/2 h-1/2 bg-secondary rounded-xl -z-10" />
              <div className="absolute -top-5 -left-5 w-1/2 h-1/2 animated-gradient rounded-xl -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

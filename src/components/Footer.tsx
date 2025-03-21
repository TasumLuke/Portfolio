
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeartPulse, Linkedin, Github, Mail, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Here you would normally connect to an API to send the email
    console.log('Form submitted:', data);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      reset();
    }, 1000);
  };

  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 mt-20 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HeartPulse className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold tracking-tight">Rimmo Lego</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Exploring the fascinating intersection of biomedical engineering and medicine as a student. Learning, creating, and growing to make healthcare better for all.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/luke-rimmo-loyi-lego-98a26b249/" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/TasumLuke/" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/publications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Publications
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Articles
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ventures" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Ventures
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    News
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">Interests</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Neural Engineering
                </li>
                <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Medical Imaging
                </li>
                <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Biomaterials
                </li>
                <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Tissue Engineering
                </li>
                <li className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Biomedical Devices
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">Contact Me</h3>
              <form onSubmit={handleSubmit(onSubmit)} form action="https://formsubmit.co/rloyileg@stevens.edu" method="POST" className="space-y-3">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register('name', { required: 'Name is required' })}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={3}
                    {...register('message', { required: 'Message is required' })}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </AnimatedSection>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Student Portfolio. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

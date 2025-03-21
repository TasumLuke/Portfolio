
import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    toast.success('Your message has been sent! I will get back to you soon.');
    reset();
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-10">
            <span className="inline-block mb-3 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contact Me
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question,  proposal, or just want to connect? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start max-w-4xl mx-auto">
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <form action="https://formsubmit.co/rloyileg@stevens.edu" method="POST" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        name="name" 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject" 
                        placeholder="What is this regarding?" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        name="message" 
                        placeholder="Your message" 
                        rows={5} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-2" direction="right">
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    Contact Information
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm currently a 3rd year biomedical engineering student with a focus on pre-medical studies.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The best way to reach me is through this contact form or via my university email.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <h3 className="font-semibold mb-4">Project Inquiries</h3>
                  <p className="text-sm text-muted-foreground">
                    For collaborations or academic inquiries, please include details about your project or proposal in your message.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;

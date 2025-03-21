interface Venture {
  id: number;
  name: string;
  description: string;
  role: string;
  technologies: string[];
  imageUrl: string;
  status: 'Ongoing' | 'Completed' | 'Early Stage';
  year: number;
  websiteUrl?: string; 
}

export const ventures: Venture[] = [
  {
    id: 1,
    name: "Tani Language Foundation",
    description: "Founder, the Tani Language Foundation, which is a non profit working on preserving the Tani Language and Culture. Tani is one of the most widely spoken languages in the states of Arunachal and Assam, in India and is also one of the smallest minority languages of China. This organization was featured in India's National Newspaper: The Hindustan Times.",
    role: "Founder",
    technologies: ["Linguistics", "Research", "Cultural Preservation"],
    imageUrl: "https://static.wixstatic.com/media/f961f7_b1713a0d871c420cbaf091ac1dc9fd01~mv2.jpeg/v1/fill/w_850,h_729,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f961f7_b1713a0d871c420cbaf091ac1dc9fd01~mv2.jpeg",
    year: 2024
    websiteUrl: "https://taniyuzin.wixsite.com/tani-foundation/about-2"
  },
  {
    id: 2,
    name: "Northeastern Centre for High School Research",
    description: "Founder, NEHCR (Northeastern Centre for High School Research): A non-profit organization dedicated to mentoring high school students, particularly those from underprivileged backgrounds in Northeast India and the rest of the country. NEHCR provides free guidance in research and critical thinking, empowering students with the skills and knowledge needed to pursue innovative problem-solving.",
    role: "Founder",
    technologies: ["Mentorship", "Research"],
    imageUrl: "https://mountainecho.in/wp-content/uploads/2024/03/NECHR-Cultivating-research-pioneers-in-Northeast-Indias-High-Schools-1024x678.webp",
    year: 2023
    websiteUrl: "https://nechr-research.us/"
  },
  {
    id: 3,
    name: "Ngok Siang",
    description: "Ngok Siang is a youth-led campaign that was recognized as a runner-up in the Millennium Oceans Prize. Led by Luke Rimmo and Marina Tatin, the project focuses on combating the increasing human interference in the Siang River ecosystem. It works closely with local fishermen, volunteers, and students to promote sustainable fishing practices—such as using nets that protect dolphins and avoiding fishing during critical breeding seasons—while advocating for a balanced approach to development and environmental preservation. This initiative not only raises awareness about the ecological importance of the river but also fosters community engagement in marine conservation efforts.",
    role: "Founder",
    technologies: ["River Conservation", "Research"],
    imageUrl: "https://static.wixstatic.com/media/f1ea87_573e1d10e76949548959cb53e0f5f26d~mv2.png/v1/fill/w_236,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1ea87_573e1d10e76949548959cb53e0f5f26d~mv2.png",
    year: 2024
    websiteUrl: "https://ngoksiang.org/"
  },
  
];

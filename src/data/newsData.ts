
interface News {
  id: number;
  title: string;
  source: string;
  date: string;
  summary: string;
  imageUrl: string;
  url: string;
  featured: boolean;
}

export const news: News[] = [
  {
    id: 1,
    title: "Students fight to keep dwindling languages of Arunachal’s tribespeople alive",
    source: "Hindustan Times",
    date: "February 14, 2025",
    summary: "Lego and 33 others, as members of the TLF, are working overtime and against a raft of challenges to keep the centuries-old languages from flickering away",
    imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/02/13/550x309/Arunchal-Pradesh-has-around-631-000-people-who-spe_1739473695145_1739483072848.jpeg",
    url: "https://www.hindustantimes.com/india-news/students-fight-to-keep-dwindling-languages-of-arunachal-s-tribespeople-alive-101739473703338.html",
    featured: true
  },
  {
    id: 2,
    title: "How Northeast students are promoting research mindset among High school students through NECHR",
    source: "Mokokchung Times",
    date: "March 18, 2023",
    summary: "In an attempt to promote a research-driven mindset among high school students in Northeast India, a group of five young college undergraduates from Arunachal Pradesh, Manipur, Mizoram, and Nagaland founded the Northeastern Centre for High School Research (NECHR) in 2023.",
    imageUrl: "https://mountainecho.in/wp-content/uploads/2024/03/NECHR-Cultivating-research-pioneers-in-Northeast-Indias-High-Schools-1024x678.webp",
    url: "https://mokokchungtimes.com/how-northeast-students-are-promoting-research-mindset-among-high-school-students-through-nechr/",
    featured: true
  },
  {
    id: 3,
    title: "Eco-conscious community practices discussed at riverbed at Brahmaputra Roundtable",
    source: "The Assam Tribune",
    date: "January 18, 2025",
    summary: "The 'Brahmaputra Roundtable,' part of the 14th Jeevan Kite River Festival, was held directly on the riverbed, emphasizing the importance of community-driven, environmentally conscious practices in safeguarding the Brahmaputra River and its ecosystem. The roundtable brought experts to deliberate on pressing environmental issues, emphasising holistic and sustainable development.",
    imageUrl: "https://assamtribune.com/h-upload/2025/01/18/1682850-eqwki3tu0aesgv4.webp",
    url: "https://assamtribune.com/guwahati/eco-conscious-community-practices-discussed-at-riverbed-at-brahmaputra-roundtable-1565128",
    featured: false
  },
  {
    id: 4,
    title: "Awareness on River Dolphins conservation held to give new thrust to Arunachal tourism",
    source: "Arunachal Observer",
    date: "November 13, 2024",
    summary: "With efforts on to tap vast tourism potentials of Arunachal Pradesh, NGO Ngok Siang (NS), working on River Dolphins protection in Siang/Brahmaputra River basin organized an awareness event at Borguli Govt. HSS auditorium on Wednesday last in presence of students, local community members, and Borguli Wildlife Range (BWR) of D. Ering Wildlife Sanctuary staffs.",
    imageUrl: "https://external-preview.redd.it/ngok-siang-sign-to-protect-the-dolphins-of-northeast-india-v0-iV8lPTkbFaIKLMdrrBdfN4Ua-Aw88oIl4LyeuggXpsw.jpg?auto=webp&s=ce8fa2feb0fdfdc0b1d4c9a92039a50e499dd7e2",
    url: "http://arunachalobserver.org/2024/11/13/awareness-on-river-dolphins-conservation-held-to-give-new-thrust-to-arunachal-tourism/",
    featured: false
  }
];

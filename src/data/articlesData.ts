
interface Article {
  id: number;
  title: string;
  publication: string;
  date: string;
  summary: string;
  imageUrl: string;
  url: string;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "The 431-404 BC Peloponnesian War in Ancient Greece",
    publication: "History is Now Magazine",
    date: "March 4, 2025",
    summary: "The Peloponnesian War (431–404 BCE) stands as a seminal conflict in ancient Greek history, pitting the maritime power of Athens against the land-based might of Sparta. This article would, therefore, be intended to discuss the complex interplay of ever-changing alliances, along with the strategic motivations and overall balance of power characteristic of this long conflict.",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/50adfa2ae4b0cc1d786569eb/1392b5e6-7ea2-43fd-9ede-971a612bdc7f/20250306+Destruction_of_the_Athenian_army_at_Syracuse.jpg?format=2500w",
    url: "https://www.historyisnowmagazine.com/blog/2025/3/6/the-431-404-bc-peloponnesian-war-in-ancient-greece",
    featured: true
  },
  {
    id: 2,
    title: "Women and the French Revolution: the start of the modern feminist movement",
    publication: "The Historian",
    date: "March 17, 2023",
    summary: "The study of the French Revolution is often restricted to its impact on the Enlightenment ideas of influential men such as Rousseau, Voltaire, and Locke. The contributions of women to the Revolution and the feminist movement can be overlooked. Despite facing criticism and resistance from some of the very revolutionaries who championed liberty, women played a vital role in the Revolution by advocating for their own rights. They challenged traditional gender roles and adopted positions of political power, becoming the embodiment of liberty, equality, and intellectual growth. The liberal ideas that originated during the French Revolution continue to propel the feminist movement to this day, leaving a lasting legacy... ",
    imageUrl: "https://www.history.org.uk/library/2305/0000/0027/A_depiction_of_the_Womens_March_on_Versailles_640.jpg",
    url: "https://www.history.org.uk/publications/resource/10667/women-and-the-french-revolution-the-start-of-the",
    featured: true
  },
  {
    id: 3,
    title: "The Legend of the Ekki: Tani People and their Dogs",
    publication: "Voices of Rural India",
    date: "November 9, 2024",
    summary: "Tani folklore and tradition showcase the enduring bond between the Tani people and their dogs or Ekki. Set against the backdrop of the Solung festival, this story highlights the special role of dogs amongst the Tani people, from protectors to faithful guardians. Through family memories and cultural insight, the storyteller explores how this relationship intertwines with faith, tradition, and identity amidst a growing global world.",
    imageUrl: "https://www.voicesofruralindia.org/wp-content/uploads/2024/11/Tani_07_Solung_1.jpg",
    url: "https://www.voicesofruralindia.org/tani-heritage-solung-festival-bond-with-dogs/",
    featured: false
  },
  {
    id: 4,
    title: "Was this 1975 Indian Agreement a Betrayal of Naga Sovereignty?",
    publication: "History is Now Magazine",
    date: "January 18, 2023",
    summary: "By late 1975, in the quiet hill station of Shillong, many high ranking officials from the Indian government gathered to sign a document that was meant to end one of the longest-running insurgencies in Asia. This Accord, however, simply meant as a ceasefire agreement between the Government of India and the Naga National Council (NNC), and is indeed celebrated by some as the first step toward lasting peace in the turbulent Naga Hills on the border of India and Myanmar. But for many others, particularly the more radical factions within the Naga leadership, it was a treacherous deal that betrayed the very core of Naga aspirations—sovereignty.",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/50adfa2ae4b0cc1d786569eb/d28c1771-be1a-4b0f-94b3-81fd19809a04/20241115+A_Side_Show-_Naga_Tribesmen_in_their_full_War-paint.jpg?format=2500w",
    url: "https://www.historyisnowmagazine.com/blog/2024/11/15/was-this-1975-indian-agreement-a-betrayal-of-naga-sovereignty",
    featured: false
  },
  {
    id: 5,
    title: "Pinecones and Pinky Promises",
    publication: "Borderless Journal",
    date: "November 30, 2022",
    summary: "A thoughtful examination of the ethical questions surrounding neural engineering technologies, including neuromodulation, neural implants, and cognitive enhancement.",
    imageUrl: "https://borderlessjournal.com/wp-content/uploads/2024/10/screenshot-2024-10-22-082057.png",
    url: "https://borderlessjournal.com/2024/11/14/pinecones-and-pinky-promises/",
    featured: false
  },
  {
    id: 6,
    title: "N-E India: The Role of Christianity in Preserving Tani Identity and Culture",
    publication: "Indian Catholic Matters",
    date: "July 25, 2024",
    summary: "When people speak of Tani's identity and culture, it would often not be complete without mentioning the churches, particularly the catholic church. The Tani people are a Sinitic ethnic group, that traces their ancestry to the Sichuan River Basin, and this is the community that forms the majority in the Northeastern State of Arunachal Pradesh. Besides Arunachal, the Tanis also have a considerable population in Upper Assam, and in the erstwhile province of Sikang (Sisang in the Tani Language), in China.",
    imageUrl: "https://i0.wp.com/www.indiancatholicmatters.org/wp-content/uploads/2024/07/Tani5.png?ssl=1",
    url: "https://www.indiancatholicmatters.org/n-e-india-the-role-of-christianity-in-preserving-tani-identity-and-culture/",
    featured: false
  }
];

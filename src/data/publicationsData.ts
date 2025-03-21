interface Publication {
  id: number;
  title: string;
  journal: string;
  year: number;
  authors: string;
  abstract: string;
  doi: string;
  imageUrl: string;
  category: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Conservative management of patent ductus arteriosus in preterm infants: A systematic review and meta-analysis of randomized controlled trials",
    journal: "Progress in Pediatric Cardiology; Circulation (AHA)",
    year: 2025,
    authors: "Kumar, Rajanikant, Efeoghene Praise Epia, Mark W. Abdelnour, Joo Young Belen Kim Kim, Anne Boakyewaa Anokye-Kumatia, Rimmo Loyi Lego, Vrunda Kulkarni, Syed Ali Farhan Abbas Rizvi, Maryam Asif, Huzaifa Ahmad Cheema, Adeel Ahmad, Wajeeh Ur Rehman, Raheel Ahmed, and Sourbha S. Dani. 2025.",
    abstract: "This study is a systematic review and meta-analysis of conservative versus active treatment of patent ductus arteriosus (PDA) in preterm infants. PDA is a relatively common condition where a fetal artery does not close at birth and could cause problems. Conservative methods—letting it close on its own without surgery or medication—have grown more popular in recent years. The research compares data on six randomized controlled trials (RCTs) to determine if conservative care impacts mortality and other health outcomes compared to active treatment or not. It reveals no differential impact on mortality, bronchopulmonary dysplasia (BPD), or other side effects but necessitates more studies of targeted therapy on high-risk infants.",
    doi: "10.1016/j.ppedcard.2024.101774",
    imageUrl: "https://images.unsplash.com/photo-1559757296-5c84adc6d116?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Cardiology"
  },
  {
    id: 2,
    title: "Hydration Behaviour of Silicone Hydrogels",
    journal: "University of Liverpool Repository",
    year: 2024,
    authors: "Towler, Joseph, Montiel, Roberto, Murari, Nikhil, Zaplachinski, Markus, Deng, Christine, Lego, Luke and Abass, Ahmed (2024)",
    abstract: "Hydrogels are essential for extended-wear contact lenses due to their biocompatibility and moisture retention. This study investigates the growth dynamics of hydrogels to optimize contact lens design. Samples with varying water content (38% to 77%) were observed using high-resolution microscopy and time-lapse imaging. Higher water content correlated with increased swelling, which is consistent with Contamac’s data. This has validated the method for additional insight into contaflex properties, as well as further exploration of other hydrogel materials.",
    doi: "https://livrepository.liverpool.ac.uk/3184653/",
    imageUrl: "https://marvel-b1-cdn.bc0a.com/f00000000241261/coopervision.com/sites/coopervision.com/files/2023-06/solution-dropps-contact-lens-case-banner-1000x265.jpg",
    category: "Biomaterials"
  },
  {
    id: 3,
    title: "Language Enforcement in India: Nationalism or Prejudice",
    journal: "Young Global Scientists",
    year: 2023,
    authors: "Loyi Lego, Rimmo",
    abstract: "At home and abroad, one of post-independence India’s characteristics has largely been the “Hindi language” in defining the culture of her people. Since Independence, the Indian government has implemented various laws and measures to promote the use of Hindi as a singular language to unite the country and its citizens (Ranganathan). However, most ethnic minorities within the country were strongly opposed to this idea, as many began seeing their own native language to be idiosyncratic to their culture. Despite this, since the early 1960s to this date, India’s relentless pursuit to use Hindi for all official purposes and as a required course in schools, have time and again scarred minority beliefs in the country (Ramakrishnan). It can therefore be argued that most of these new language-related educational reforms proposed by the ruling government in India are a means to suppress Ethnic minority cultures rather than uniting these groups under pan-nationalism.",
    doi: "https://www.ygsjournal.com/_files/ugd/389a2b_3d75e05e29ec46dc9179ee48b954e657.pdf",
    imageUrl: "https://images.unsplash.com/photo-1614107151491-6876eecbff89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Political Science"
  },
  {
    id: 4,
    title: "Study of Antibiotic Resistance in E. Coli Against Allopathic Drugs as Compared To Natural Herbs.",
    journal: "Journal of Scientific Exploration",
    year: 2023,
    authors: "Loyi Lego, Rimmo",
    abstract: "The Rising Incidents of Antibiotic Resistance has been increasing at an exponential rate in recent years, and since it is often caused by rampant misuse of drugs such as Penicillin, many bacterial species such as E. coli have been able to mutate and gain Multi-Drug Resistance and Extended Drug Resistance (XDR) - to form what is otherwise known as Superbugs. The main purpose of the research is to investigate the efficacy of Allopathic Drugs as Compared to Natural herbs in treating pathogenic bacterial colonies, so as to find an alternative to reduce antibiotic resistance. Using experimental analysis, this study analysed the effectiveness of the allopathic drugs and natural herbs, in treating an E. coli culture. The experiment was carried out over a span of 14 days, with readings taken on every consecutive 2-day period. The efficacy was measured with respect to the zone of inhibition, and the results were compared for any form of resistance developed. The Allopathic drug, Azithromycin, as hypothesized was found to be the most effective in treating the E. coli culture, but a few resistant strains were observed. However, natural herbs like Tea tree oil were not far behind, and only a few colonies of E. coli showed resistance against them. Erythromycin and Garlic were not found to be as effective. This study answers the questions on alternatives to allopathic drugs and resistance to different substances. Further studies are however needed to establish the mechanism of resistance to these substances and to develop preventative measures",
    doi: "doi.org/10.31275/20222683",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Antibiotics"
  },
  {
    id: 5,
    title: "Defining the Other: Systemic Alienation, and the Perpetual Marginalization of Northeast India in Modern Indian Policy",
    journal: "Impact Policy Research Review",
    year: 2025,
    authors: "Narola Jamir , Luke Rimmo Lego",
    abstract: "This article examines the ongoing marginalization of Northeast India through Indian state policies, focusing on systemic alienation perpetuated by legislation like the Armed Forces Special Powers Act (AFSPA) and socio-cultural exclusions ingrained within Indian society. Northeast Indians frequently experience prejudice, often misrecognized as “foreigners” despite being Indian citizens. Policies have historically deprioritized development in Northeast India, ostensibly to limit resource access for adversaries. Through a critical examination of AFSPA, economic neglect, cultural policing, and media representation, this article argues for policy reforms to dismantle exclusionary frameworks and establish a more inclusive national identity that respects Northeast India’s unique diversity.",
    doi: "https://iprr.impriindia.com/defining-the-other-systemic-alienation-and-the-perpetual-marginalization-ofnortheast-india-in-modern-indian-policy/",
    imageUrl: "https://images.unsplash.com/photo-1562528064-b014e32c46df?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Policy Analysis"
  },
  {
    id: 6,
    title: "Investigation of the Equilibrium Constant and Thermodynamic Properties of Borax Dissolution Using Titration Techniques",
    journal: "Dera Natung Government College Research Journal",
    year: 2024,
    authors: "Rimmo Loyi Lego, Lily Achumi",
    abstract: "This experiment uses the method of titrating saturated Borax aqueous solution with hydrochloric acid to determine the equilibrium constant of Borax as well as its enthalpy change, entropy change, and standard free energy of dissolution. Using this method, the equilibrium constant was found to be 0.172 for the first Borax sample at 41॰ C while it was 0.157 for the second Borax sample at 3.9॰ C. Using a graph of ln (ksp) vs. 1/Temperature, the change in enthalpy was 620,000 J/mol, the change in entropy was-12.72 J/molK, and the standard free energy was 624 kJ/mol.",
    doi: "10.56405/dngcrj.2024.09.01.10",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661430659143-ffbb5ce2b6a7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Chemistry"
  }
];

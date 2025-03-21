import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Dna, Brain, FlaskConical, Microscope, BookOpen } from 'lucide-react';
import { 
  Alert, 
  AlertTitle, 
  AlertDescription 
} from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';

type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: 'genetics' | 'molecular' | 'biomedical' | 'research';
};

const WelcomePopupGame: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);

  // Quiz data - Large pool of biology, genetics, molecular biology, biomedical engineering questions
  const questionPool: QuizQuestion[] = [
    {
      question: "What is the process called when DNA makes a copy of itself?",
      options: ["Translation", "Replication", "Transcription", "Conjugation"],
      correctAnswer: "Replication",
      explanation: "DNA replication is the process by which DNA makes an identical copy of itself during cell division.",
      category: "molecular"
    },
    {
      question: "Which of these is NOT a nucleotide found in DNA?",
      options: ["Adenine", "Uracil", "Guanine", "Cytosine"],
      correctAnswer: "Uracil",
      explanation: "Uracil is found in RNA, not DNA. DNA contains Adenine, Guanine, Cytosine, and Thymine.",
      category: "genetics"
    },
    {
      question: "CRISPR-Cas9 is a technology used for what purpose?",
      options: ["DNA sequencing", "Gene editing", "Protein synthesis", "Cell culture"],
      correctAnswer: "Gene editing",
      explanation: "CRISPR-Cas9 is a revolutionary gene-editing technology that allows researchers to modify DNA sequences.",
      category: "genetics"
    },
    {
      question: "What technique separates proteins based on their size and charge?",
      options: ["Chromatography", "Centrifugation", "Electrophoresis", "Spectroscopy"],
      correctAnswer: "Electrophoresis",
      explanation: "Gel electrophoresis separates proteins or DNA fragments based on their size and electrical charge.",
      category: "molecular"
    },
    {
      question: "Which imaging technique uses magnetic fields and radio waves to visualize body structures?",
      options: ["X-ray", "Ultrasound", "CT scan", "MRI"],
      correctAnswer: "MRI",
      explanation: "Magnetic Resonance Imaging (MRI) uses powerful magnets and radio waves to create detailed images of organs and tissues.",
      category: "biomedical"
    },
    {
      question: "What is the main function of stem cells?",
      options: ["To store nutrients", "To fight infections", "To differentiate into specialized cells", "To produce antibodies"],
      correctAnswer: "To differentiate into specialized cells",
      explanation: "Stem cells have the ability to develop into different cell types and can serve as a repair system for the body.",
      category: "biomedical"
    },
    {
      question: "What does PCR stand for in molecular biology?",
      options: ["Protein Chain Reaction", "Polymerase Chain Reaction", "Peptide Cleavage Reaction", "Primary Cell Response"],
      correctAnswer: "Polymerase Chain Reaction",
      explanation: "PCR is a technique used to amplify DNA segments to create millions of copies of a specific DNA sequence.",
      category: "molecular"
    },
    {
      question: "What is the purpose of a double-blind study in research?",
      options: ["To test twice as many subjects", "To prevent bias by keeping both researchers and participants unaware of treatment assignments", "To compare two different experimental methods", "To verify results with two separate research teams"],
      correctAnswer: "To prevent bias by keeping both researchers and participants unaware of treatment assignments",
      explanation: "In a double-blind study, neither the participants nor the researchers know who is receiving which treatment, reducing bias in the results.",
      category: "research"
    },
    {
      question: "What is the name of the process where mRNA is used to create proteins?",
      options: ["Replication", "Transcription", "Translation", "Transduction"],
      correctAnswer: "Translation",
      explanation: "Translation is the process where the genetic code in mRNA is read to make proteins in the ribosome.",
      category: "molecular"
    },
    {
      question: "Which of the following is NOT a type of RNA?",
      options: ["mRNA", "tRNA", "rRNA", "dRNA"],
      correctAnswer: "dRNA",
      explanation: "dRNA doesn't exist. The main types of RNA are messenger RNA (mRNA), transfer RNA (tRNA), and ribosomal RNA (rRNA).",
      category: "molecular"
    },
    {
      question: "Which cellular organelle is responsible for energy production?",
      options: ["Golgi apparatus", "Endoplasmic reticulum", "Mitochondria", "Lysosome"],
      correctAnswer: "Mitochondria",
      explanation: "Mitochondria are known as the powerhouse of the cell because they generate most of the cell's supply of ATP, used as a source of chemical energy.",
      category: "molecular"
    },
    {
      question: "What is the phenomenon called when an organism has more than two complete sets of chromosomes?",
      options: ["Aneuploidy", "Polyploidy", "Haploidy", "Diploidy"],
      correctAnswer: "Polyploidy",
      explanation: "Polyploidy refers to having more than two complete sets of chromosomes, which is common in plants but rare in animals.",
      category: "genetics"
    },
    {
      question: "Which of these is NOT a type of biomaterial used in medical implants?",
      options: ["Ceramics", "Metals", "Polymers", "Photosynthetics"],
      correctAnswer: "Photosynthetics",
      explanation: "Photosynthetics is not a type of biomaterial. Common biomaterials include ceramics, metals, polymers, and composites.",
      category: "biomedical"
    },
    {
      question: "What is the primary function of white blood cells?",
      options: ["Oxygen transport", "Blood clotting", "Immune defense", "Waste removal"],
      correctAnswer: "Immune defense",
      explanation: "White blood cells (leukocytes) are part of the immune system and help the body fight infections and other diseases.",
      category: "biomedical"
    },
    {
      question: "Which statistical test would be most appropriate for comparing the means of two independent groups?",
      options: ["Chi-square test", "t-test", "ANOVA", "Pearson correlation"],
      correctAnswer: "t-test",
      explanation: "A t-test is typically used to determine if there is a significant difference between the means of two independent groups.",
      category: "research"
    },
    {
      question: "What is the term for an unexpected or harmful effect of a medication or treatment?",
      options: ["Side effect", "Placebo effect", "Hawthorne effect", "Nocebo effect"],
      correctAnswer: "Side effect",
      explanation: "A side effect is an unwanted or unexpected effect produced by a medication or treatment in addition to its intended effect.",
      category: "biomedical"
    },
    {
      question: "Which of the following is an example of epigenetic modification?",
      options: ["Point mutation", "DNA methylation", "Chromosomal translocation", "Nucleotide deletion"],
      correctAnswer: "DNA methylation",
      explanation: "DNA methylation is an epigenetic mechanism that can change the activity of a DNA segment without changing the sequence.",
      category: "genetics"
    },
    {
      question: "What is the main function of the endoplasmic reticulum?",
      options: ["Energy production", "Protein synthesis", "Waste disposal", "Cell movement"],
      correctAnswer: "Protein synthesis",
      explanation: "The endoplasmic reticulum is involved in the synthesis, folding, and transport of proteins, especially the rough ER with its attached ribosomes.",
      category: "molecular"
    },
    {
      question: "Which of these is NOT a common bioethical concern in research?",
      options: ["Informed consent", "Privacy", "Profit maximization", "Animal welfare"],
      correctAnswer: "Profit maximization",
      explanation: "While financial considerations exist in research, profit maximization is not typically considered a bioethical principle, unlike informed consent, privacy, and animal welfare.",
      category: "research"
    },
    {
      question: "Which technique is used to separate and analyze DNA fragments?",
      options: ["Western blot", "Southern blot", "Northern blot", "Eastern blot"],
      correctAnswer: "Southern blot",
      explanation: "Southern blot is used to detect specific DNA sequences, while Western blot analyzes proteins and Northern blot is for RNA analysis. Eastern blot is not a standard technique.",
      category: "molecular"
    }
  ];

  // Icons for categories
  const categoryIcons = {
    genetics: <Dna className="h-5 w-5" />,
    molecular: <FlaskConical className="h-5 w-5" />,
    biomedical: <Brain className="h-5 w-5" />,
    research: <BookOpen className="h-5 w-5" />
  };

  // Check if first visit and show popup
  useEffect(() => {
    const hasPlayed = localStorage.getItem('hasPlayedBioQuiz');
    
    if (!hasPlayed) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Get current question
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Handle game start
  const startGame = () => {
    // Select random questions from the pool
    const randomQuestions = getRandomQuestions(questionPool, 8);
    setQuizQuestions(randomQuestions);
    
    setGameStarted(true);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setGameOver(false);
    setShowExplanation(false);
  };

  // Function to get random questions from the pool
  const getRandomQuestions = (pool: QuizQuestion[], count: number): QuizQuestion[] => {
    // Make a copy of the pool to avoid modifying the original
    const shuffled = [...pool];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Return the first 'count' questions
    return shuffled.slice(0, count);
  };

  // Handle answer selection
  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
      toast({
        title: "Correct! 🎉",
        description: "You got it right!",
        duration: 2000,
      });
    } else {
      toast({
        title: "Not quite! 🤔",
        description: `The correct answer is ${currentQuestion.correctAnswer}`,
        variant: "destructive",
        duration: 2000,
      });
    }
    
    setShowExplanation(true);
  };

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowExplanation(false);
    } else {
      setGameOver(true);
      localStorage.setItem('hasPlayedBioQuiz', 'true');
    }
  };

  // Handle dialog close
  const handleClose = () => {
    if (!gameStarted || gameOver) {
      localStorage.setItem('hasPlayedBioQuiz', 'true');
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl gap-2">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Dna className="h-6 w-6 text-primary" />
            </motion.div>
            Welcome to my Portfolio!
          </DialogTitle>
          <DialogDescription>
            {!gameStarted && !gameOver && (
              "Wanna Play a short Game? "
            )}
            {gameStarted && !gameOver && (
              <div className="text-center font-medium mt-2">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
                <div className="mt-1 text-sm">
                  Score: <span className="font-bold text-primary">{score}</span>
                </div>
              </div>
            )}
            {gameOver && (
              <div className="text-center font-medium mt-2">
                Quiz Complete! Your score: <span className="text-primary font-bold text-xl">{score}</span> out of {quizQuestions.length}
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        
        {!gameStarted && !gameOver && (
          <div className="flex flex-col items-center justify-center py-4">
            <motion.div
              className="relative w-32 h-32 my-4"
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear" 
              }}
            >
              <Microscope className="w-full h-full text-primary" />
            </motion.div>
          </div>
        )}
        
        {gameStarted && !gameOver && currentQuestion && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                {categoryIcons[currentQuestion.category]}
              </div>
              <span className="text-sm font-medium capitalize">{currentQuestion.category} Biology</span>
            </div>
            
            <div className="text-lg font-medium">{currentQuestion.question}</div>
            
            <div className="grid gap-2">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`p-3 rounded-lg text-left border ${
                    selectedAnswer === option 
                      ? option === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-500'
                        : 'bg-red-100 border-red-500 dark:bg-red-900/30 dark:border-red-500'
                      : isAnswered && option === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-500'
                        : 'bg-card border-border hover:bg-accent'
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                  whileHover={!isAnswered ? { scale: 1.02 } : {}}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                >
                  {option}
                </motion.button>
              ))}
            </div>
            
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Alert variant={selectedAnswer === currentQuestion.correctAnswer ? "default" : "destructive"}>
                  <AlertTitle>Explanation</AlertTitle>
                  <AlertDescription>
                    {currentQuestion.explanation}
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </div>
        )}
        
        {gameOver && (
          <div className="flex flex-col items-center justify-center py-4">
            <motion.div
              className="text-4xl font-bold text-primary mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {score > quizQuestions.length / 2 ? "Great job!" : "Good effort!"}
            </motion.div>
            <div className="text-muted-foreground text-center mb-4">
              {score > quizQuestions.length * 0.75 
                ? "Amazing." 
                : score > quizQuestions.length * 0.5
                  ? "Not Bad!"
                  : "Well Biology is complex!"}
            </div>
          </div>
        )}
        
        <DialogFooter className="flex justify-center sm:justify-center gap-2">
          {!gameStarted && !gameOver && (
            <Button 
              onClick={startGame}
              className="w-full sm:w-auto"
            >
              Start Quiz
            </Button>
          )}
          
          {gameStarted && !gameOver && (
            <Button 
              onClick={nextQuestion}
              disabled={!isAnswered}
              className="w-full sm:w-auto"
            >
              {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          )}
          
          {gameOver && (
            <>
              <Button 
                onClick={startGame}
                className="w-1/2 sm:w-auto"
              >
                Play Again
              </Button>
              <Button 
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="w-1/2 sm:w-auto"
              >
                Close
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopupGame;

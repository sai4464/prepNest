// MCQ Question Types
export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Coding Challenge Types
export interface CodingChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  sampleInput: string;
  sampleOutput: string;
  constraints: string;
  timeLimit: number;
  memoryLimit: number;
}

// Mock Interview Types
export interface MockInterviewQuestion {
  id: string;
  question: string;
  category: string;
  expectedAnswer: string;
  followUpQuestions: string[];
  tips: string[];
}

// Code Execution Types
export interface CodeSubmission {
  language: string;
  code: string;
  input?: string;
}

export interface ExecutionResult {
  status: {
    id: number;
    description: string;
  };
  stdout: string;
  stderr: string;
  compile_output: string;
  time: string;
  memory: number;
}
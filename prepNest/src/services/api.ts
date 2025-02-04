import axios from 'axios';

// Mock data for MCQ questions
const mockMCQs = {
  'software-development': [
    {
      id: '1',
      question: 'What is the time complexity of QuickSort in the average case?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      correctAnswer: 'O(n log n)',
      explanation: 'QuickSort has an average time complexity of O(n log n) due to its divide-and-conquer approach.',
      category: 'algorithms',
      difficulty: 'medium'
    },
    {
      id: '2',
      question: 'What is a closure in JavaScript?',
      options: [
        'A function that has access to variables in its outer scope',
        'A way to close browser windows',
        'A method to end a loop',
        'A type of data structure'
      ],
      correctAnswer: 'A function that has access to variables in its outer scope',
      explanation: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.',
      category: 'javascript',
      difficulty: 'medium'
    }
  ]
};

// Mock data for coding challenges
const mockChallenges = {
  easy: [
    {
      id: '1',
      title: 'Two Sum',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      difficulty: 'easy',
      category: 'arrays',
      sampleInput: '[2,7,11,15], target = 9',
      sampleOutput: '[0,1]',
      constraints: '2 <= nums.length <= 104\n-109 <= nums[i] <= 109',
      timeLimit: 1000,
      memoryLimit: 16384
    },
    {
      id: '2',
      title: 'Valid Parentheses',
      description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
      difficulty: 'easy',
      category: 'strings',
      sampleInput: '()',
      sampleOutput: 'true',
      constraints: '1 <= s.length <= 104\ns consists of parentheses only "()"[]{}',
      timeLimit: 1000,
      memoryLimit: 16384
    }
  ]
};

// Mock data for mock interviews
const mockInterviewQuestions = {
  'software-developer': [
    {
      id: '1',
      question: 'Explain the concept of closure in JavaScript.',
      category: 'JavaScript',
      expectedAnswer: 'A closure is the combination of a function and the lexical environment within which that function was declared...',
      followUpQuestions: [
        'How are closures useful in practical programming?',
        'Can you give an example of using closures?'
      ],
      tips: [
        'Focus on practical applications',
        'Provide real-world examples',
        'Explain memory implications'
      ]
    },
    {
      id: '2',
      question: 'What is the difference between REST and GraphQL?',
      category: 'Web Development',
      expectedAnswer: 'REST and GraphQL are different approaches to building APIs...',
      followUpQuestions: [
        'When would you choose REST over GraphQL?',
        'What are the main benefits of GraphQL?'
      ],
      tips: [
        'Compare and contrast key features',
        'Discuss real-world use cases',
        'Mention performance considerations'
      ]
    }
  ]
};

// MCQ Questions API
export const getMCQQuestions = async (category: string) => {
  // Simulating API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMCQs[category] || []);
    }, 500);
  });
};

// Coding Challenges API
export const getCodingChallenges = async (difficulty: string) => {
  // Simulating API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockChallenges[difficulty] || []);
    }, 500);
  });
};

// Mock Interview Questions API
export const getMockInterviewQuestions = async (role: string) => {
  // Simulating API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockInterviewQuestions[role] || []);
    }, 500);
  });
};
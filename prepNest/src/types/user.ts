export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  progress: {
    mcqCompleted: number;
    codingChallengesCompleted: number;
    mockInterviewsCompleted: number;
  };
  preferences: {
    darkMode: boolean;
    emailNotifications: boolean;
  };
  bookmarks: {
    mcqs: string[];
    codingChallenges: string[];
    mockInterviews: string[];
  };
}

export interface StudyPlan {
  id: string;
  userId: string;
  targetRole: string;
  weeklyGoals: {
    mcqs: number;
    codingChallenges: number;
    mockInterviews: number;
  };
  progress: number;
  startDate: Date;
  endDate: Date;
}

export interface InterviewExperience {
  id: string;
  userId: string;
  company: string;
  role: string;
  date: Date;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: string[];
  tips: string[];
  outcome: 'accepted' | 'rejected' | 'pending';
}
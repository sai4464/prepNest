import { useState, useEffect } from 'react';
import { getMCQQuestions, getCodingChallenges, getMockInterviewQuestions } from '../services/api';
import type { MCQQuestion, CodingChallenge, MockInterviewQuestion } from '../types/api';

export const useMCQQuestions = (category: string) => {
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getMCQQuestions(category);
        setQuestions(data as MCQQuestion[]);
      } catch (err) {
        setError('Failed to fetch MCQ questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category]);

  return { questions, loading, error };
};

export const useCodingChallenges = (difficulty: string) => {
  const [challenges, setChallenges] = useState<CodingChallenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const data = await getCodingChallenges(difficulty);
        setChallenges(data as CodingChallenge[]);
      } catch (err) {
        setError('Failed to fetch coding challenges');
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, [difficulty]);

  return { challenges, loading, error };
};

export const useMockInterviews = (role: string) => {
  const [questions, setQuestions] = useState<MockInterviewQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getMockInterviewQuestions(role);
        setQuestions(data as MockInterviewQuestion[]);
      } catch (err) {
        setError('Failed to fetch mock interview questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [role]);

  return { questions, loading, error };
};
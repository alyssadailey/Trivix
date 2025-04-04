import type { Question } from '../models/Question.js';

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch('/api/questions/random');

    console.log('Raw Response:', response);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Question[] = await response.json();

    console.log('Fetched Questions:', data);

    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};

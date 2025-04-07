import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';
import React from 'react';

const mockQuestions = [
  {
    question: "What does JSX stand for?",
    answers: [
      { text: "JavaScript XML", isCorrect: true },
      { text: "Java Syntax Extension", isCorrect: false },
      { text: "JavaScript Extension", isCorrect: false },
      { text: "Just Simple XML", isCorrect: false }
    ]
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    answers: [
      { text: "useEffect", isCorrect: false },
      { text: "useRef", isCorrect: false },
      { text: "useState", isCorrect: true },
      { text: "useContext", isCorrect: false }
    ]
  }
];

describe('<Quiz />', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', mockQuestions).as('getQuestions');
    mount(<Quiz />);
  });

  it('starts the quiz and goes through all questions', () => {
    // Click start
    cy.contains('Start Quiz').click();
  
    // Wait for questions to load
    cy.wait('@getQuestions');
  
    // Question 1
    cy.contains('What does JSX stand for?').should('be.visible');
    cy.contains('JavaScript XML').click();
  
    // Question 2
    cy.contains('Which hook is used to manage state').should('be.visible');
    cy.contains('useState').click();
  
    // Final score page
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score: 2/2').should('be.visible');
  });
});
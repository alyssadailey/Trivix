import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
it('renders quiz correctly and handles answering a question', () => {
    //mounts the Quiz component
mount(<Quiz />);

// Check for start button
cy.contains('Start Quiz').click();

// Should show first question
cy.get('[data-testid="question-text"]').should('exist');

// Click an answer
cy.get('[data-testid="answer-option"]').first().click();

// Should go to next question
cy.get('[data-testid="question-text"]').should('exist');

});
});
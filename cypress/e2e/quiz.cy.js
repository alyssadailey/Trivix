describe('Tech Quiz App e2e', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('lets a user take the quiz and see results', () => {
        //Starts the quiz by checking for the start button click
        cy.contains('Start Quiz').click();

    // Answer all 10 questions
    for (let i = 0; i < 10; i++) {
      cy.get('[data-testid="answer-option"]').first().click();
    }

    // Final score should show
    cy.contains('Your Score').should('exist');

    // Option to start a new quiz
    cy.contains('Start New Quiz').click();

    // Should return to question 1
    cy.get('[data-testid="question-text"]').should('exist');
  });
});
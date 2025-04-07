describe('Tech Quiz App e2e', () => {
    beforeEach(() => {
        // Mocking the /api/questions/random response
        cy.intercept('GET', '/api/questions/random', {
          statusCode: 200,
          body: [
            {
              question: 'What does JSX stand for?',
              answers: [
                { text: 'JavaScript XML', isCorrect: true },
                { text: 'Java Syntax eXtension', isCorrect: false }
              ]
            },
            {
              question: 'Which hook is used to manage state',
              answers: [
                { text: 'useState', isCorrect: true },
                { text: 'useEffect', isCorrect: false }
              ]
            }
          ]
        }).as('getQuestions');
    
        cy.visit('/');
      });

    it('loads the quiz, answers questions, and shows score', () => {
        // Start the quiz
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
    
        // Wait for first question to load (assumes real API)
        cy.contains('What does JSX stand for?').should('exist');
        cy.contains('JavaScript XML').click();
    
        // Wait for second question
        cy.contains('Which hook is used to manage state').should('exist');
        cy.contains('useState').click();
    
        // See results
        cy.contains('Quiz Completed').should('exist');
        cy.contains('Your score: 2/2').should('exist');
      });
    });
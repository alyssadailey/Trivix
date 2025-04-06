import React from 'react';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
it('renders correctly', () => {
cy.mount(<Quiz />);
cy.contains('Quiz').should('exist');
});
});
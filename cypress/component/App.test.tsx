import React from 'react';
import { mount } from '@cypress/react';
import App from '../../src/App';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});
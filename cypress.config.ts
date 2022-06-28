import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '62pyqm',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    },
    setupNodeEvents(on, config) {},
    specPattern: [
      '**/**/*.comp-spec.{js,ts,jsx,tsx}',
      '**/**/*.cy.{js,ts,jsx,tsx}'
    ]
  }
})

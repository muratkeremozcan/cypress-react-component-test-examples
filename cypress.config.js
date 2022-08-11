import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '62pyqm',
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  component: {
    setupNodeEvents(on, config) {},
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    },
    specPattern: [
      '**/**/*.comp-spec.{js,ts,jsx,tsx}',
      '**/**/*.cy.{js,ts,jsx,tsx}'
    ]
  }
})

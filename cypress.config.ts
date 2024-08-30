import { defineConfig } from 'cypress'

export default defineConfig({
  // TODO: there is 1 test in CI that fails with this on, when not parallelized
  // cypress/component/hooks/usehooks.com/useHover.cy.tsx
  // @ts-expect-error it is so
  experimentalSingleTabRunMode: true, //
  projectId: '62pyqm',
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {},
    // baseUrl: 'http://localhost:3000', // need to test index.html in another test...
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  component: {
    // experimentalJustInTimeCompile: true,
    setupNodeEvents(on, config) {},
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    },
    specPattern: ['**/**/*.comp-spec.{js,ts,jsx,tsx}', '**/**/*.cy.{js,ts,jsx,tsx}']
  }
})

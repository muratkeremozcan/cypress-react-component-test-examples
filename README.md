# Cypress React Component Test Examples

[![cypress-react-component-test-examples](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/62pyqm/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/62pyqm/runs)

This repo started as a practice project, replicating & reviving old Cypress React component tests, hidden in the main Cypress repo.
As time passed, new examples were added and are still being added with Cypress 10. It can be used as a starting point for new tests, showing working examples.

```bash
nvm use
yarn install --registry https://registry.yarnpkg.com # specify the registry in case you are using a proprietary one

# e2e
yarn start # start the server
yarn cy:open # for cypress e2e test runner
yarn cy:run # headless version

# component
# no need to have server running for these:
yarn cy:open-ct # for cypress component test runner
yarn cy:run-ct # headless version
```

## CI setup: multi stage caching using Github Actions

```
build  -->  lint
       -->  type check
       -->  Cypress e2e tests
       -->  Cypress component tests
```

[![cypress-react-component-test-examples](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/62pyqm/master&style=plastic&logo=cypress)](https://dashboard.cypress.io/projects/62pyqm/runs)

# Cypress React Component Test Examples

This repo started as a practice project, replicating & reviving old Cypress React component tests, hidden in the main Cypress repo.
As time passed, new examples were added and are still being added with Cypress 10. It can be used as a starting point for new tests, showing working examples.

```bash
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

### The goal

Achieve this in a GitHub Actions CI as efficiently as possible:

```
build  -->  lint
       -->  type check
       -->  Cypress e2e tests
       -->  Cypress component tests
```

### Why?

Especially in large repositories running all the jobs serially is not performant.

Caching is not very easy to optimize. Real / working GitHub Actions examples are scarce and/or needlessly complicated.

### How?

1. `actions/checkout`: used in every job.

2. `actions/setup-node` with `cache: 'yarn'` (or `npm`): used in the build job.

3. `bahmutov/npm-install` : used in every job for installing dependencies with caching and without any configuration.

   - On the build job: install & cache
   - Subsequent jobs: depend on build, and do the same install step, but by this time the cache is present and they get the modules.

   > [useRollingCache](https://github.com/bahmutov/npm-install#cache-snowballing--rolling-cache-expiry) : recommended for large projects.

   > `CYPRESS_INSTALL_BINARY: 0` : no need to install the Cypress binary everywhere, we are already using the docker image in the e2e job

4. `cypress-io/github-action@v3`: used in the Cypress e2e test job

   - `container: cypress/included:10.2.0`: save time on not having to install the Cypress binary
   - `bahmutov/npm-install`: save time on dependencies by caching
   - `install: false`: because if we install, the CI is slower than relying on `bahmutov/npm-install@v1`.

   > Compare these runs:
   >
   > - `install: true`, not using `bahmutov/npm-install@v1`: [2:26 for e2e](https://github.com/muratkeremozcan/multi-stage-caching/actions/runs/1259021046)
   > - `install false`, using `bahmutov/npm-install@v1`: [1:55 for e2e](https://github.com/muratkeremozcan/multi-stage-caching/actions/runs/1259112643)

---

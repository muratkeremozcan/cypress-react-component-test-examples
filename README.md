# Multi stage caching using Github Actions

```bash
yarn install --registry https://registry.yarnpkg.com # specify the registry in case you are using a proprietary registry

yarn start # start the server
yarn cy:open # for cypress e2e test runner
yarn cy:run # headless version

# no need to have server running for these:
yarn cy:open-ct # for cypress component test runner
yarn cy:run-ct # headless version

yarn test # run unit tests with jest

# use server-test to start the app and run e2e (the app should not already be running)
yarn server:test
```

## The goal

Achieve this in a GitHub Actions CI as efficiently as possible:

```
build  -->  unit test   -->  Cypress e2e test + component test
       -->  lint
       -->  type check
```

## Why?

Especially in large repositories running all the jobs serially is not performant.

Caching is not very easy to optimize. Real / working GitHub Actions examples are scarce and/or needlessly complicated.

## How?

1. `actions/checkout@v2`: used in every job.

2. `actions/setup-node@v2` with `cache: 'yarn'` (or `npm`): used in the build job.

3. `bahmutov/npm-install@v1` : used in every job for installing dependencies with caching and without any configuration.

   - On the build job: install & cache
   - Subsequent jobs: depend on build, and do the same install step, but by this time the cache is present and they get the modules.

   > [useRollingCache](https://github.com/bahmutov/npm-install#cache-snowballing--rolling-cache-expiry) : recommended for large projects.

   > `CYPRESS_INSTALL_BINARY: 0` : no need to install the Cypress binary everywhere, we are already using the docker image in the e2e job

4. `cypress-io/github-action@v2.11.7`: used in the Cypress e2e test job

   - `container: cypress/included:9.0.0`: save time on not having to install the Cypress binary
   - `bahmutov/npm-install@v1`: save time on dependencies by caching
   - `install: false`: because if we install, the CI is slower than relying on `bahmutov/npm-install@v1`.

   > Compare these runs:
   >
   > - `install: true`, not using `bahmutov/npm-install@v1`: [2:26 for e2e](https://github.com/muratkeremozcan/multi-stage-caching/actions/runs/1259021046)
   > - `install false`, using `bahmutov/npm-install@v1`: [1:55 for e2e](https://github.com/muratkeremozcan/multi-stage-caching/actions/runs/1259112643)

---

## Component Testing

Followed the instructions at [Getting Started with Cypress Component Testing (React)](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/).

Minimal instructions:

1. `yarn add -D @cypress/react @cypress/webpack-dev-server`, add `cy:open-ct` and `cy:run-ct` scripts to `package.json`.

2. Modify the cypress.json for - distinct from other unit tests hence the naming `comp-test`:

   ```json
   {
   "baseUrl": "http://localhost:3000",
   "component": {
       "testFiles": "**/*.comp-test.{js,ts,jsx,tsx}",
       <!-- "componentFolder": "src"  --> <!-- tests also can be near the source code -->
   }
   ```

3. Enhance the plugins/index file with the component test configuration. The dev server depends on your react setup.

```json
const injectDevServer = require("@cypress/react/plugins/react-scripts")

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}
```

Launch component test runner with `yarn cy:open-ct`.

4. The component test CI setup can be isolated, or can be steps after the e2e steps

```yml
component-test:
    needs: [unit-test, lint, typecheck]
    runs-on: ubuntu-latest
    container: cypress/included:9.0.0 # save time on not having to install cypress
    steps:
    - uses: actions/checkout@v2

    - uses: bahmutov/npm-install@v1 # save time on dependencies
        with: { useRollingCache: true }

    # the docs advise to run component tests after the e2e tests, this part could also be right after e2e tests
    - name: Cypress component tests 🧪
        uses: cypress-io/github-action@v2.11.7
        with:
        # we have already installed everything
        install: false
        # to run component tests we need to use "cypress run-ct"
        command: yarn cypress run-ct
```

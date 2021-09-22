# Multi stage caching using Github Actions

## The goal

Achieve this in a GitHub Actions CI as efficiently as possible:

```
build  -->  unit test   -->  Cypress e2e test
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
  
4. `cypress-io/github-action@v2`: used in the Cypress e2e test job
    - `container: cypress/included:8.4.1`: save time on not having to install the Cypress binary
    - `bahmutov/npm-install@v1`: save time on dependencies by caching
    - `install: false`: because if we install, the CI is slower than relying on `bahmutov/npm-install@v1`.

    >  Compare these runs:
    >  - `install: true`, not using `bahmutov/npm-install@v1`: [2:26 for e2e](https://github.com/muratkeremozcan/multi-stage-caching/actions/runs/1259021046)
    >  - `install false`, using `bahmutov/npm-install@v1`: [1:55 for e2e](https://github.com/muratkeremozcan/multi-stage-caching/actions/runs/1259112643)

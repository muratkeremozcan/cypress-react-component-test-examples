import OnlineStatusComponent from './OnlineStatusComponent'

// https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/server-communication__offline/cypress/e2e/offline-spec.cy.js

const goOffline = () => {
  cy.log('**go offline**')
    .then(() => {
      return Cypress.automation('remote:debugger:protocol', {
        command: 'Network.enable'
      })
    })
    .then(() => {
      return Cypress.automation('remote:debugger:protocol', {
        command: 'Network.emulateNetworkConditions',
        params: {
          offline: true,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1
        }
      })
    })
}

const goOnline = () => {
  // disable offline mode, otherwise we will break our tests :)
  cy.log('**go online**').then(() => {
    // https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
    return Cypress.automation('remote:debugger:protocol', {
      command: 'Network.emulateNetworkConditions',
      params: {
        offline: false,
        latency: -1,
        downloadThroughput: -1,
        uploadThroughput: -1
      }
    })
  })
}

it('useOnlineStatus', () => {
  cy.mount(<OnlineStatusComponent />)
  cy.contains('true')
  // won't work, TODO: need to stub it at the very low level
  // https://glebbahmutov.com/blog/stub-react-import/
  // goOffline()
  // cy.contains('false')
})

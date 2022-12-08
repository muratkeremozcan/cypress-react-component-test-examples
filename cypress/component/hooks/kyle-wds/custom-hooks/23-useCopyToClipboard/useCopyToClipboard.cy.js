import CopyToClipboardComponent from './CopyToClipboardComponent'

it('useCopyToClipboard', { browser: 'electron' }, () => {
  cy.mount(<CopyToClipboardComponent />)

  cy.contains('button', 'Copy Text').realClick()
  cy.contains('button', 'Copied')

  // only for chrome
  // https://www.youtube.com/watch?v=4eEc3x24D64&t=0s
  if (Cypress.isBrowser('chrome')) {
    cy.wrap(
      Cypress.automation('remote:debugger:protocol', {
        command: 'Browser.grantPermissions',
        params: {
          permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
          origin: window.location.origin
        }
      })
    )
  }

  cy.window()
    .its('navigator.permissions')
    .invoke('query', { name: 'clipboard-read' })
    .its('state')
    .should('eq', 'granted')

  // confirm the clipboard content
  cy.window().its('navigator.clipboard').invoke('readText').should('eq', 'This was copied')

  cy.get('input').focus()
  cy.document().invoke('execCommand', 'paste')

  // works in Electron only
  // https://www.youtube.com/watch?v=SExmed1dCL4
  if (Cypress.isBrowser('electron')) {
    cy.get('input').should('have.value', 'This was copied')
  }
})

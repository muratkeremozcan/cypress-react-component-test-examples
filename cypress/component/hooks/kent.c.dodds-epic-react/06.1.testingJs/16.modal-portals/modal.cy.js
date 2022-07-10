import { Modal } from './modal'

it('modal shows the children', () => {
  // render a child wrapped by the modal
  cy.mount(
    <Modal>
      <div data-testid="test" />
    </Modal>
  )

  cy.get('[id=modal-root]').should('exist')
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/16.KEY-modal-portals.js

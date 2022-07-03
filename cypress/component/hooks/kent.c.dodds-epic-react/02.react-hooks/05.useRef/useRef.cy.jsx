import Tilt from './useRef'

describe('useRef', () => {
  it('should work', () => {
    cy.mount(
      <Tilt>
        <div style={{ backgroundColor: 'green' }}>vanilla-tilt.js</div>
      </Tilt>
    )
  })
})

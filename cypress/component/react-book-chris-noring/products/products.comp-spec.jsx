import { getProducts } from './products'

describe('stub window fetch', () => {
  it('should return a list', () => {
    const fetchStub = cy
      .stub(window, 'fetch')
      .withArgs('http://myapi.com/products')
      .resolves({
        json: cy.stub().resolves({
          products: [{ id: 1, name: 'test' }]
        })
      })

    getProducts().then((list) => {
      expect(list).to.have.length(1)
      expect(fetchStub).to.have.been.calledOnce.and.have.been.calledWith(
        'http://myapi.com/products'
      )
    })
  })
})

import add from './add'

describe('add', () => {
  it('testing addition', () => {
    expect(add(2, 2)).to.equal(4)
  })

  it('testing addition with neg number', () => {
    expect(() => add(-1, 2)).to.throw('parameters must be larger than zero')
  })
})

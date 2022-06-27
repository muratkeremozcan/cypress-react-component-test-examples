import App from './hook-flow'
import { mount } from '@cypress/react'

describe('Hook flow', () => {
  it('should render', () => {
    mount(<App />)
  })
})

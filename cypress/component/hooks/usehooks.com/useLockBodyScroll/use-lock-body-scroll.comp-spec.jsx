import App from './App'
import { mount } from '@cypress/react'
import './styles.css'

describe('App', { viewportHeight: 1000 }, () => {
  it('should', () => {
    mount(<App />)
  })
})

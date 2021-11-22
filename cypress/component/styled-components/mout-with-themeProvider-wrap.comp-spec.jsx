/* eslint-disable no-undef */
/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'
import styled, { ThemeProvider } from 'styled-components'

const lightest = '#FFFEFD'
const light = '#FEFCF1'
const darker = '#C49A03'
const darkest = '#382E0A'

const theme = {
  primaryDark: darkest,
  primaryLight: lightest,
  primaryLightDarker: light,
  primaryHover: darker
}

const styledComponentsStyle = 'margin-bottom: 1rem'

const Line = styled.div`
  ${styledComponentsStyle}
`
export const SearchResults = (props) => (
  <div>
    {props.results.map((result) => {
      return <Line key={result.title}>{result.title}</Line>
    })}
  </div>
)

const mountComponent = ({ results }, options) =>
  mount(
    <ThemeProvider theme={theme}>
      <div style={{ margin: '6rem', maxWidth: '105rem' }}>
        <SearchResults results={results} />
      </div>
    </ThemeProvider>,
    options
  )

const inlineStyle = 'body { background: blue; }'
const bulmaCDN =
  'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css'

describe('ThemeProvider', () => {
  it('should inject styles into <head>', () => {
    mountComponent(
      {
        results: [{ title: 'Org 1' }, { title: 'Org 2' }]
      },
      {
        stylesheets: [bulmaCDN],
        style: inlineStyle
      }
    )

    cy.get('link').should('exist')
    cy.get('link').should('have.attr', 'href', bulmaCDN)
  })

  it(`style-components injected styles from previous test, styles and stylesheets should be cleaned up`, () => {
    cy.get('style')
      .should('not.contain.text', styledComponentsStyle)
      .and('not.contain.text', inlineStyle)

    // cleaned up bulma CDN link from previous test
    cy.get('link').should('not.exist')

    mountComponent({
      results: [{ title: 'Org 1' }, { title: 'Org 2' }]
    })
  })
})

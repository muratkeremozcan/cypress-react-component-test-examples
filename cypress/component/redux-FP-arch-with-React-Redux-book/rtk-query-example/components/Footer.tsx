import styled from '@emotion/styled'

export default function Footer() {
  return (
    <Wrapper data-cy="Footer">
      Don't have an account yet?&nbsp;
      <ExternalLink href="https://www.extend.com/contact">
        Contact us
      </ExternalLink>
    </Wrapper>
  )
}

const Wrapper = styled.footer({
  marginTop: 16,
  textAlign: 'center',
})

const ExternalLink = styled.a({
  textDecoration: 'inherit',
  color: '#03c',
})

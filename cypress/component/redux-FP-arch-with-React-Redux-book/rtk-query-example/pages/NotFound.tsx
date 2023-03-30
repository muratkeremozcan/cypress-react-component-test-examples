import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <Wrapper>
      <Header>Page Not Found</Header>
      <Description>
        The page you're looking for isn't available. Try with another page or
        use the go home button below
      </Description>
      <RedirectLink to="/login">Back to login</RedirectLink>
    </Wrapper>
  )
}

const Wrapper = styled.div({
  textAlign: 'center',
})

const Header = styled.div({
  marginBottom: 16,
  color: '#090637',
  fontSize: 24,
  fontWeight: 700,
})

const Description = styled.div({
  marginBottom: 16,
  color: '#090637',
  fontSize: 18,
})

const RedirectLink = styled(Link)({
  color: '#03c',
})

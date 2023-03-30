import styled from '@emotion/styled'

export default function Spinner() {
  return <Wrapper data-cy="Spinner">Loading{'.'.repeat(3)}</Wrapper>
}

const Wrapper = styled.div({
  border: 'none',
  fontSize: 14,
})

import styled from '@emotion/styled'
import type {ButtonHTMLAttributes} from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children, ...props}: Props) {
  return (
    <BaseButton data-cy="Button" {...props}>
      {children}
    </BaseButton>
  )
}

const BaseButton = styled.button({
  border: 'none',
  backgroundColor: '#03c',
  borderRadius: '4px',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: '600' as 'bold',
  lineHeight: '40px',
  padding: '0 8px',
})

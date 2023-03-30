import {useState} from 'react'
import Input from './Input'
import type {Props as InputProps} from './Input'
import Button from './Button'
import styled from '@emotion/styled'

type Props = InputProps

export default function PasswordInput({label, ...restProps}: Props) {
  const [inputType, setInputType] = useState<'password' | 'text'>('password')

  const toggleInputType = () => {
    const newInputType = inputType === 'password' ? 'text' : 'password'
    setInputType(newInputType)
  }

  return (
    <Wrapper data-cy="PasswordInput" className="password-form-input">
      <Input type={inputType} label={label} {...restProps} />
      <Button type="button" id="passwordToggle" onClick={toggleInputType}>
        {inputType === 'password' ? 'Show' : 'Hide'}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: 8,
})

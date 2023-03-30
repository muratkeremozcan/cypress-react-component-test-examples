import Logo from './Logo'
import Input from './Input'
import PasswordInput from './PasswordInput'
import Button from './Button'
import styled from '@emotion/styled'
import {useFormik} from 'formik'
import * as yup from 'yup'

export default function LoginForm() {
  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })

  const {values, errors, handleSubmit, handleChange, handleBlur} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      alert('submitting')
    },
    validationSchema: validationSchema,
  })

  const hasEmailErrors = Boolean(errors.email)
  const hasPasswordErrors = Boolean(errors.password)
  const hasFormErrors = hasEmailErrors || hasPasswordErrors

  return (
    <Form data-cy="LoginForm" onSubmit={handleSubmit}>
      <Logo />
      <Input
        id="email"
        label="Email Address"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {hasEmailErrors && <ErrorMessage>{errors.email}</ErrorMessage>}
      <PasswordInput
        id="passwordToggle"
        label="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {hasPasswordErrors && <ErrorMessage>{errors.password}</ErrorMessage>}
      <Button type="submit" disabled={hasFormErrors}>
        Log in
      </Button>
    </Form>
  )
}

const Form = styled.form({
  backgroundColor: '#fff',
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  padding: 40,
  width: 440,
})

const ErrorMessage = styled.div({
  backgroundColor: '#ff0000',
  padding: 10,
})

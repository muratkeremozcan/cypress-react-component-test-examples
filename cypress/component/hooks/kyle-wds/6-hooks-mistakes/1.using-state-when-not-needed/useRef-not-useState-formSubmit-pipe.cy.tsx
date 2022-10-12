import { useState, useRef, FormEvent, ChangeEvent } from 'react'
import { pipe } from 'ramda'

// https://www.youtube.com/watch?v=GGo3MVBFr1A

function App() {
  // mistake: the state variables are only used in onSubmit;
  // we don't care what state they are in until submitted, but we re-render on every change
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // fix: use useRef instead of useState when you don't care about the form input state until the form is submitted
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  // handleSubmit classic version
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault()
  //   // console.log({ email, password })
  //   console.log({ email: emailRef.current.value, password: passwordRef.current.value })
  // }

  // handleSubmit FP version
  const preventDefault = (e) => {
    e.preventDefault()
    return e
  }
  const destructEvent = () => ({
    email: emailRef.current?.value,
    password: passwordRef.current?.value
  })
  const handleSubmit = pipe(preventDefault, destructEvent, console.log)

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        ref={emailRef}
        /*value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}*/
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        ref={passwordRef}
        /*value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}*/
      />
      <button data-cy="submit" type="submit">
        Submit
      </button>
    </form>
  )
}

it('use useRef instead of useState when you do not care about the form input state until the form is submitted', () => {
  // spy on console.log
  cy.spy(console, 'log').as('consoleLog')
  cy.mount(<App />)

  const email = 'abc@123.com'
  const password = '123456'
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.getByCy('submit').click()

  cy.get('@consoleLog').should('be.calledWith', { email, password })
})

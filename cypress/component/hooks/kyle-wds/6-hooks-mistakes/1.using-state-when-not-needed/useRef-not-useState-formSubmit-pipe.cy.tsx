import { useState, useRef, FormEvent, ChangeEvent } from 'react'
import { pipe } from 'ramda'

// https://www.youtube.com/watch?v=GGo3MVBFr1A

function App() {
  // mistake: the state variables are only used in onSubmit;
  // we don't care what state they are in until submitted, but we re-render on every change
  // const [email, setEmail] = useState('') // (toggle)
  // const [password, setPassword] = useState('')

  // fix: use useRef instead of useState when you don't care about the form input state until the form is submitted (toggle)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  // handleSubmit classic version // (toggle 2)
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault()
  //   // console.log({ email, password }) // toggle
  //   console.log({ email: emailRef.current.value, password: passwordRef.current.value }) // toggle
  // }

  // handleSubmit FP version // (toggle 2)
  const preventDefault = (e) => {
    e.preventDefault()
    return e
  }
  const destructEvent = () => ({
    email: emailRef.current?.value,
    password: passwordRef.current?.value
  })
  const handleSubmit = pipe(preventDefault, destructEvent, console.log)

  console.log('render')

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        // value={email} // (toggle)
        // onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} // (toggle)
        ref={emailRef} // (toggle)
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        // value={password} // (toggle)
        // onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} // (toggle)
        ref={passwordRef} // (toggle)
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
  cy.get('@consoleLog').should('be.calledWith', 'render').its('callCount').should('eq', 1)

  cy.getByCy('submit').click()
  cy.get('@consoleLog').its('callCount').should('eq', 2)
})

// const redirectUrl = async (): Promise<string> => {
//   const state = String(Cypress._.random(16))
//   localStorage.setItem('state', state)

//   const url = 'www.google.com'

//   return url
// }

export const LoginBtn = () => {
  const handleSubmit = () => {
    setTimeout(() => {
      window.location.assign('https://www.cypress.io')
    }, 1000)
  }

  return (
    <button onClick={handleSubmit} data-cy="login-button">
      Log in
    </button>
  )
}

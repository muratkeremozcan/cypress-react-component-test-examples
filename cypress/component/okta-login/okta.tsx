const redirectUrl = async (): Promise<string> => {
  const state = String(Cypress._.random(16))
  localStorage.setItem('state', state)

  const url = 'www.google.com'

  return url
}

export const OktaLoginForm = () => {
  const handleSubmit = async (): Promise<void> => {
    const oktaRedirect = await redirectUrl()
    window.location.assign(oktaRedirect)
  }

  return (
    <form>
      <div onSubmit={handleSubmit}>
        <button data-cy="login-button">Log in</button>
      </div>
    </form>
  )
}

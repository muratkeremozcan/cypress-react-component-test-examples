// const redirectUrl = async (): Promise<string> => {
//   const state = String(Cypress._.random(16))
//   localStorage.setItem('state', state)

//   const url = 'www.google.com'

//   return url
// }

export const OktaLoginForm = () => {
  const handleSubmit = async (): Promise<void> => {
    window.location.assign('www.google.com')
  }

  return (
    <form>
      <div>
        <button onClick={handleSubmit} data-cy="login-button">
          Log in
        </button>
      </div>
    </form>
  )
}

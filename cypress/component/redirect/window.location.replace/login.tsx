/** This common object wraps around things we cannot stub
 * like window.locations methods which are locked for security reasons
 * But, we can stub Location's methods
 */
export const Location = {
  assign(url: string) {
    window.location.assign(url)
  }
}

export const LoginBtn = () => {
  const handleSubmit = () => {
    setTimeout(() => {
      Location.assign('https://www.cypress.io')
    }, 1000)
  }

  return (
    <button onClick={handleSubmit} data-cy="login-button">
      Log in
    </button>
  )
}

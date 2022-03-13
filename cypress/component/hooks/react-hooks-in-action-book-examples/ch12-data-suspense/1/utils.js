/** takes a promise and returns a function that gives us access to the promise’s status */
function getStatusChecker(promiseIn) {
  let status = 'pending'
  let result

  const promise = promiseIn
    .then((response) => {
      status = 'success'
      result = response
    })
    .catch((error) => {
      status = 'error'
      result = error
    })

  return () => ({ promise, status, result })
}

/** takes a data fetching promise and returns a function that uses the promise’s status to act appropriately. */
export function makeThrower(promiseIn) {
  // get a status tracking function for the promise
  const checkStatus = getStatusChecker(promiseIn)

  return function () {
    // get the latest status whenever the function is called
    const { promise, status, result } = checkStatus()

    // throw or return
    if (status === 'pending') throw promise
    if (status === 'error') throw result
    return result
  }
}

export default function fetchMessage(canError, delay = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canError) {
        reject('Oops!')
      } else {
        resolve({ message: 'Hello Data!' })
      }
    }, delay)
  })
}

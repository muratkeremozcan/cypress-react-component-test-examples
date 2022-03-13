const greetings = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'こんにちは']

let greetingIndex = 0

const getNextIndex = () => {
  greetingIndex = (greetingIndex + 1) % greetings.length
  return greetingIndex
}

export function fetchMessageAtIndex(i, canError, delay = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canError) {
        reject('Oops!')
      } else {
        resolve({ message: greetings[i] })
      }
    }, delay)
  })
}

export const fetchFirstMessage = (i, canError, delay) =>
  fetchMessageAtIndex(i, canError, delay)

export const fetchNextMessage = (canError, delay) =>
  fetchMessageAtIndex(getNextIndex(), canError, delay)

export const fetchMessage = (canError, delay) =>
  fetchMessageAtIndex(greetingIndex, canError, delay)

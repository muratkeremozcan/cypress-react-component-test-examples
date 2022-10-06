export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const initialState = 0

export default function reducer(counter = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return counter + 1
    case DECREMENT:
      return counter - 1
    default:
      return counter
  }
}

// https://www.youtube.com/watch?v=XEQ9nEHYIbw
import useEventListener from '../13-useEventListener/useEventListener'

export default function useClickOutside(ref, cb) {
  return useEventListener(
    'click',
    (e) => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    document
  )
}

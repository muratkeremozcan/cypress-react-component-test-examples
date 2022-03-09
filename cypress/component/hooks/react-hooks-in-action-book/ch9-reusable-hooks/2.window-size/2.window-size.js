import useWindowSize from './use-window-size'

export default function WindowSize() {
  // [9.4.1] destructure as needed
  const { width, height } = useWindowSize()

  return (
    <p>
      Width: {width}, Height: {height}
    </p>
  )
}

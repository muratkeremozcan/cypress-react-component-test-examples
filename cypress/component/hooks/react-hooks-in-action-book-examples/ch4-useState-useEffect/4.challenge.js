import { useState, useEffect } from 'react'

export default function Challenge() {
  // https://usehooks.com/useWindowSize/
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  })

  // Initialize state
  const [size, setSize] = useState(getSize)

  const getMeasure = (width) => {
    let measurement
    if (width < 400) {
      measurement = 'small'
    } else if (width >= 400 && width <= 800) {
      measurement = 'medium'
    } else {
      measurement = 'large'
    }
    return measurement
  }

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => setSize(getSize)

    // Add event listener
    window.addEventListener('resize', handleResize)
    // window.addEventListener('resize', handleReMeasure)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    document.title = getMeasure(size.width)

    return () => window.removeEventListener('resize', handleResize)
  })
  // try making this empty array, it will not re-render when cy.viewport changes

  return (
    <p>
      {getMeasure(size.width)} {size.width}
    </p>
  )
}

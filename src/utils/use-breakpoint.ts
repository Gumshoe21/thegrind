import { useState, useEffect } from 'react'

const useBreakpoint = () => {
  const breakpoints = {
    0: 'xs',
    600: 'sm',
    960: 'md',
    1280: 'lg',
    1920: 'xl',
  }

  const [breakpoint, setBreakPoint] = useState('')
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    if (0 < windowSize.width && windowSize.width < 600) {
      setBreakPoint(breakpoints[0])
    }
    if (600 < windowSize.width && windowSize.width < 960) {
      setBreakPoint(breakpoints[600])
    }
    if (960 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint(breakpoints[960])
    }
    if (1280 < windowSize.width && windowSize.width < 1920) {
      setBreakPoint(breakpoints[1280])
    }
    if (windowSize.width >= 1920) {
      setBreakPoint(breakpoints[1920])
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize.width])
  return { breakpoint, windowSize }
}

export default useBreakpoint

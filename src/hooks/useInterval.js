import{ useRef, useEffect } from 'react'

/**
 * Custom hook to repetitively execute code at a specified interval 
 * @param {function} callback - function to be executed at interval 
 * @param {*} delay - the time between each call of the callback function 
 */
export const useInterval = (callback, delay) => {
  /* save the callback function to persist between renders */
  const cb = useRef()
  useEffect(() => cb.current = callback, [callback])

  useEffect(() => {
    // retrieve the reference to the callback function 
    const tick = () => cb.current() 
    // set the interval and execute the callback at the 
    // specified interval assuming there is one 
    // then reset the interval 
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])

}
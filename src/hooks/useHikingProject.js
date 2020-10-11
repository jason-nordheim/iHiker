import { useEffect, useRef, useState } from 'react'
import { getNearbyTrails, getTrails } from '../util/hikingProject'






/**
 * Custom hook to access data from the Hiking Project API 
 * based on the position provided 
 * @param {object} pos - the position object returned by the navigator 
 */
export const useHikingProject = (pos) => {
  const [ready, setReady] = useState(false)
  // save the position 
  // and update the position any time it changes 
  const position = useRef();
  useEffect(() => {
    setReady(false)
    position.current = pos 
    if (position.current !== {} && position.current.coords && position.current.coords !== {}) {
      setReady(true)
    } 
  }, [pos]);


  const getNearby = async (number = 10) => {
    return getTrails(position.current.coords.latitude, position.current.coords.longitude, number);
  }
 

  return [ready, getNearby]
}
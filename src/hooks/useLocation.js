import { useState, useEffect } from 'react' 

/**
 * Hook to pull location of client 
 */
export function useLocation(){
  const [location, setLocation] = useState({})
  const [error, setError] = useState({})

  /** creating a function, allows us to update the location if it changes */
  function updateLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => setLocation(position), // success
      (error) => setError(error)
    ); // failure
  }

  /** location should be updated when the component mounts */
  useEffect(() => updateLocation(), [])

  



  return [location, error, updateLocation]
}


export default useLocation
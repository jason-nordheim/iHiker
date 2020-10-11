import React, { useEffect } from 'react';
import { AppName } from '../config/appConfig'
import { useHikingProject } from '../hooks/useHikingProject'
import { useLocation } from '../hooks/useLocation'

/**
 * Root Application Component 
 */
function App() {
  const [location, error, updateLocation] = useLocation();
  const [ready, getNearby] = useHikingProject(location);
  
  // when the location has been established, retrieve the nearby trails 
  useEffect(() => {
    const getTrails = async () => await getNearby() 

    if (ready) {
      const getThem = async () => await getTrails()
      const result = getThem() 
      console.log(result)
    } 
  }, [ready])

  return (
    <div className="app">
      <header>
        <h1>{AppName}</h1>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;

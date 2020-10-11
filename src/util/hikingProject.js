import { hikingProjectApiKey } from "../config/appConfig";
import { getLocation } from './location'

/**
 * Function to retrieve a location from the Hiking Project API and
 * return the results
 * @param {number} lat - the latitude of the search position
 * @param {number} long - the longitude of the search position
 * @param {number} dist - the distance in miles for the search area from center
 */
export const getTrails = async (lat, long, dist) => {
  const url = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=${dist}&key=${hikingProjectApiKey}`;
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

// /**
//  * Function to get a specified number of trails for a location
//  * @param {number} number
//  */
// export const getNearbyTrails = async (position, number = 15) => {
//   console.log(position)
//   const center = position.coords;
//   let queryPosition = center;
//   let trails = [];

//   // keep retrieving trails until we have the specified number
//   while (trails < number) {
//     let queryResult = await getTrails(
//       queryPosition.latitude,
//       queryPosition.longitude,
//       10
//     );
//     // add the newly retreived trails to the result
//     trails = [...trails, queryResult.trails] 
//     // remove any duplicates
//     const reduced = trails.reduce((acc, curr) => {
//       // if the array is empty, just return a new array with 
//       // the inspected trail 
//       if (acc = []) {
//         return [curr]
//       }
//       const trail = [...acc].find((t) => t.id === curr.id)
//       console.log('boo', trail)
//       console.log('acc', acc)
//       console.log('cur', curr)

//       // if we find the same ID in the list of retrieved
//       // trails, we do not need to add any more
//       if (trail) {
//         return [...acc];
//       } else {
//         return [...acc, curr];
//       }
//     }, []);

//     console.log("reduced", reduced);

//     queryPosition = getLocation(center.latitude, center.longitude);
//   }

//   console.log(trails);

//   return trails;
// };

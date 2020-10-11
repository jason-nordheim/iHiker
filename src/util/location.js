
export const NORTH ='north'
export const SOUTH = 'south'
export const EAST = 'east'
export const WEST = 'west'

const oneDegree = 69 // miles per degree  


export const randomDirection = () => {
  const rand = Math.random();
  if (rand < 0.25) return NORTH;
  else if (rand < 0.5) return EAST;
  else if (rand < 0.75) return SOUTH;
  else return WEST;
};


/**
 * Function to get a new position in a specified direction
 * @param {number} latitude - current latitude
 * @param {number} longitude - current longitude
 * @param {'north'|'south'|'east'|'west'} direction - the cardinal direction from the provided position to the returned position
 * @param {number} miles - the number of miles the new location should be from the current position
 * @return {{number, number}} - new position with represented as an object with latitude and longitude properties
 */
export const getLocation = (
  latitude,
  longitude,
  direction = randomDirection(),
  miles = 2
) => {
  console.log("oldPosition", { latitude, longitude });
  const degrees = (1 / oneDegree) * miles;
  let newPosition;

  if (direction === NORTH) {
    newPosition = { latitude: latitude + degrees, longitude };
  } else if (direction === EAST) {
    newPosition = { latitude, longitude: longitude + degrees };
  } else if (direction === WEST) {
    newPosition = { latitude, longitude: longitude - degrees };
  } else {
    newPosition = { latitude: latitude - degrees, longitude };
  }
  console.log("newPositio", newPosition);
  return newPosition;
};

// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */

export function randomShipRegistryNumber() {
  function getRandomInt(min, max) {
    return Math.floor(min + Math.random()*(max - min+1));
  }
  return `NCC-${getRandomInt(1000,9999)}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  function generateStardate(min,max)
    {
      return (min+ Math.random()*(max-min));
    }

  return generateStardate(41000,42000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let planetClass = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  function getRandomInt(min, max) {
    return Math.floor(min + Math.random()*(max - min+1));
  }
  return planetClass[getRandomInt(0,planetClass.length-1)]
}

// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return (Number(String(array1).replaceAll(',','')))+(Number(String(array2).replaceAll(',','')));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value == String(value).split('').reverse().join('') ? true : false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(Number(input))
  {
    return '';
  }
  else if(!Boolean(input))
  {
    return 'Required field';
  }
  else
  {
    return 'Must be a number besides 0'
  }
}

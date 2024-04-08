/**
 * Gets the first [n] element(s) of `array`.
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @param {Number} n The number of elements.
 * @returns {*} Returns the first [n] element(s) of `array`.
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([1, 2, 3], 2)
 * // => [1, 2]
 *
 * head([])
 * // => undefined
 */
function head(array = [], n = 1) {
    const results = array.slice(0, n);
    return results.length > 1 ? results : results[0];
}

export default head;

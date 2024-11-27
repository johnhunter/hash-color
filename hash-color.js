//@ts-check

/**
 * Given color saturation and lightness percentages,
 * returns a function that generates a unique css `hsl`
 * color value for a given text.
 *
 * @license MIT https://github.com/johnhunter/hash-color
 *
 * @param {number} saturation
 * @param {number} lightness
 * @returns {(text: string) => string}
 */
const hashColor = (saturation, lightness) => (text) => {
  const hash = Array.from(text).reduce(
    (acc, char) => char.charCodeAt(0) + ((acc << 5) - acc),
    0
  );

  const hue = hash % 360;
  return `hsl(${hue}deg,${saturation}%,${lightness}%)`;
};

export default hashColor;

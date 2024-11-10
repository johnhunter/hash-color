//@ts-check

/**
 * Given color saturation and lightness percentages,
 * returns a function that generates a unique css `hsl`
 * color value for a given text.
 *
 * @param {number} saturation
 * @param {number} lightness
 * @returns {(text: string) => string}
 */
const hashColor = (saturation, lightness) => (text) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = hash % 360;
  return `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
};

export default hashColor;

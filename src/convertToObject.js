'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // This onbject will be returned.
  const styledObject = {};

  // Who the hell write sourceString like that? My grandma can do better...
  // If i ever see this during actuall job, i'll leave the company.
  //                                         (through window)
  const cleanString = sourceString
    .replace(/\s*;\s*$/, '')
    .replace(/\s*:\s*/g, ':')
    .trim();

  // Split into elements.
  const splitToElements = cleanString.split(';').filter(Boolean);

  for (const currentElement of splitToElements) {
    // "background-color:#fff" -> "background-color", "#fff";
    //                                    0              1
    const splitElement = currentElement.split(':');

    // Make sure to not read undefined value.
    if (splitElement.length === 2) {
      const property = splitElement[0].trim();
      const value = splitElement[1].trim();

      styledObject[property] = value;
    }
  }

  return styledObject;
}

module.exports = convertToObject;

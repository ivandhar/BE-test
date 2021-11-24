/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  let uniqueChars = [];
  data.forEach((i) => {
    if (!uniqueChars.includes(i)) {
      uniqueChars.push(i);
    }
  });
  return uniqueChars;
}

console.log(result(data));

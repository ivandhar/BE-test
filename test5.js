/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function result(words) {
  var sortArr = words.sort();
  var arrFirstElem = words[0];
  var arrLastElem = sortArr[sortArr.length - 1];
  var arrFirstElemLength = arrFirstElem.length;
  var i = 0;
  while (
    i < arrFirstElemLength &&
    arrFirstElem.charAt(i) === arrLastElem.charAt(i)
  ) {
    i++;
  }
  return arrFirstElem.substring(0, i);
}
prefix = result(words);
array = words.map(function (item) {
  return item.substring(prefix.length, item.length);
});

console.log(result(words));

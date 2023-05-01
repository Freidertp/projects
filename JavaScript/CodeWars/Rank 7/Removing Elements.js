/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.*/

function removeEveryOther(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArray.push(arr[i]);
  }
  return newArray;
}

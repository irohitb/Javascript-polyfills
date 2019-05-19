// Implementation of map function 
// ------ 
const dummyArray = [89, 68, 848, 56, 87]

Array.prototype.map = function (cb) {
  let arr = []
  for (let element of this) {
      arr.push(cb(element))
  }
  return arr
}


//Implementation of sort method 
//Using Merge sort 
const dummyArray = [89, 68, 848, 56, 87, 23, 118, 78]

const mergeMain = (arr) =>  {
  if (arr.length === 1) return arr
  // Divide the array into two parts 
  const arrayMiddle = parseInt(arr.length/2)
  const leftHalf = arr.slice(0, arrayMiddle)
  const rightHalf = arr.slice(arrayMiddle)
  return mergeSub(mergeMain(leftHalf), mergeMain(rightHalf))
}

const mergeSub = (leftArray, rightArray) => {
  const result = []
  let leftIndex = 0
  let rightIndex = 0 

  while (leftArray.length > leftIndex && rightArray.length > rightIndex) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex])
      leftIndex++
    } else {
      result.push(rightArray[rightIndex]) 
      rightIndex++
    }
  }
  //Adding the last remaining element in the array 
  return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
}

console.log(mergeMain(dummyArray))
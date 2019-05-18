// Implementation of map function 
// ------ 

const dummyArray = [89, 68, 848, 56]

Array.prototype.map = function (cb) {
  let arr = []
  for (let element of this) {
      arr.push(cb(element))
  }
  return arr
}



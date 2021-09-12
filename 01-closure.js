/**************************************************************
 Write a function called splicer accepts a number. This function
 will return  another function that accepts an array and splices
 in the word 'spliced' from 0 to the indicated index (inclusive)
 and returns the result. The word 'spliced' will go between the
 original entries.

 hint : think about how this will change the indices we are
 working with.

 hint : there are many ways to solve this problem, you _do not_
 need to use the splice method.

ex:
const spliceNDice = splicer(3)
const result = spliceNDice([1,2,3,4,5,6])
console.log(result) // [1, 'spliced', 2, 'spliced', 3, 'spliced', 4, 'spliced', 5, 6]


 * ***********************************************************/

// const splicer = (num) => (array) => {
//   return array.reduce((accum, ele, i) => {
//     accum.push(ele);
//     if (i <= num) accum.push("spliced")
//     return accum;
//   }, [])
// }

function splicer(num){
  return function(array){
    let count = 0
    let idx = 1
    while(count <= num){
      array.splice(idx,0,'spliced')
      count++
      idx += 2;
    }
  }
}

const arr = [1,2,3,4,5,6]
console.log(splicer(4)(arr))
console.log(arr)

/**************************************************************
 Write a function called splicer accepts a number. This function 
 will return  another function that accepts an array and splices 
 in the word 'spliced' from 0 to the indicated index (inclusive)
 and returns the result. The word 'spliced' will go between the
 original entries. This function may or may not mutate the
 original array.

 hint : think about how this will change the indices we are
 working with if you do spluce 

 hint : there are many ways to solve this problem, you _do not_
 need to use the splice method.
 
ex:
const spliceNDice = splicer(3)
const result = spliceNDice([1,2,3,4,5,6])
console.log(result) // [1, 'spliced', 2, 'spliced', 3, 'spliced', 4, 'spliced', 5, 6]


 * ***********************************************************/

// const splicer = (num) => (arr) => {
//     const res = []
//     for (let i = 0; i < arr.length; i++){
//         res.push(arr[i])
//         if (i <= num){
//             res.push('spliced')
//         }
//     }
//     return res;
// }

const splicer = (num) => (arr) => {
    let idx = 1
    let count = 0
    while (count <= num){
        arr.splice(idx, 0, 'spliced')
        idx += 2
        count++
    }
    return arr
}

console.log(splicer(3)([1,2,3,4,5,6]))
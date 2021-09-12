/**************************************************************
 Write a function called nameSorter that accepts an array of names
 and returns a new array of those same names but in alphabetical order.
 You don't have to use recursion to solve this, but you might benefit
 from doing so. Make sure you give yourself a default parameter called
 sorted when building this function

 const bridge4 = [
                    'Kaladin',
                    'Teft',
                    'Lopen',
                    'Dabbid',
                    'Rock',
                    'Sigzil',
                    'Skar',
                    'Moash',
                    'Rlain',
                    'Renarin',
                 ]

                 const bridge4Sorted = nameSorter(bridge4) // ['Dabbid', 'Kaladin', 'Lopen', 'Moash', 'Renarin', 'Rlain', 'Rock', 'Sigzil', 'Skar', 'Teft']

                 * ***********************************************************/
const bridge4 = [
                   'Kaladin',
                   'Teft',
                   'Lopen',
                   'Dabbid',
                   'Rock',
                   'Sigzil',
                   'Skar',
                   'Moash',
                   'Rlain',
                   'Renarin',
                ]

function nameSorter (array, sorted = []) {
   if (!array.length) return sorted;
   const lowest = array.reduce((accum, ele)=> {
      if (accum < ele) return accum
      return ele
   })
   const idx = array.indexOf(lowest)
   sorted.push(lowest)
   array.splice(idx, 1)
   return nameSorter(array, sorted)
}

console.log(nameSorter(bridge4))

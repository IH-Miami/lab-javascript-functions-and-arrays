// Iteration #1: Find the maximum
function maxOfTwoNumbers(x,y) {
  if (x>y){
    return x
  } else {
    return y
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(w) {
  if (w.length === 0){
    return null
  } else {
    let length = []
    for (i=0; i<w.length; i++){
      length[i] = w[i].length
    }
    return w[length.indexOf(Math.max(...length))]
  }
}

findLongestWord(words)

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(n) {
  let sum = 0
  for (let i=0; i<n.length; i++){
    sum += n[i]
  }
  return sum
}

sumNumbers(numbers)

// Iteration #3.1 Bonus:

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]

function sum(n) {
  if (n.length === 0){
    return 0
  }
  let total = 0
  for (let i=0; i<n.length; i++){
    if (typeof n[i] === 'object' || typeof n[i] === 'array'){
      throw new Error("Unsupported data type sir or ma'am")
    } else if (typeof n[i] === 'string' && typeof n[i] !== 'number'){
      total += n[i].length
    } else if (typeof n[i] === "string"){
      total += Number(n[i])
    } else if (typeof n[i] === "true"){
      total+=1
    } else{
      total += n[i]
    }
  }
  return total
   
  }

sum(mixedArr)

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(n) {
  if (n.length === 0){
    return null
  }
  let total=0
  for (let i = 0; i<n.length; i++){
    total += n[i]
  }
  let average = total/n.length
  return average
}

console.log(averageNumbers(numbersAvg))

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(w) {
  if (w.length === 0){
    return null
  }
  let totalLength = 0
  for (let i = 0; i < w.length; i++){
    totalLength += w[i].length
  }
  let averageWordLength = totalLength/w.length
  return averageWordLength
}

averageWordLength(wordsArr)

// Bonus - Iteration #4.1

function avg(n) {
  if (n.length === 0){
    return null
  }
  let total = 0
  for (let i=0; i<n.length; i++){
    if (typeof n[i] === 'object' || typeof n[i] === 'array'){
      throw new Error("Unsupported data type sir or ma'am")
    } else if (typeof n[i] === 'string' && typeof n[i] !== 'number'){
      total += n[i].length
    } else if (typeof n[i] === "string"){
      total += Number(n[i])
    } else if (typeof n[i] === "true"){
      total+=1
    } else{
      total += n[i]
    }
  }
  let average = Number((total/n.length).toFixed(2))
  return average
  }

avg(mixedArr)

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
array = []

function uniquifyArray(w) {
  if (w.length === 0){
    return null
  }
  let words = []
  for (let i = 0; i<w.length; i++){
    if (words.indexOf(w[i]) === -1){
      words.push(w[i])
    }
  }
  return words
}

uniquifyArray(wordsUnique)


// Bonus - Iteration #5.1: Unique arrays using Set

function uniquifyArrayWithSet(w) {
  if (w.length === 0){
    return null
  } else {
    let mySet = new Set()
    for (let i = 0; i<w.length; i++){
      mySet.add(w[i])
    }
    array = Array.from(mySet)
    return array
  }
}

uniquifyArrayWithSet(wordsUnique)

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr.length === 0){
    return null
  }
  let flag = false
  for (let i = 0; i<arr.length; i++){
    if (word === arr[i]){
      flag = true
    }
  }
  return flag
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, word) {
  count = 0
  for (let i = 0; i<arr.length; i++){
    if (word === arr[i]){
      count++
    }
  }
  return count
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    uniquifyArrayWithSet
  };
}

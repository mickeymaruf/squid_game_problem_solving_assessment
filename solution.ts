// problem 1. Reverse a String
const reverseString = (s: string) : string => {
  return s.split("").reverse().join("")
}

// problem 3. Find the Largest Number in an Array
const findMax = (nums: number[]): number => {
  let max = nums[0]

  for(let i = 1; i < nums.length; i++){
    if(nums[i] > max){
      max = nums[i]
    }
  }

  return max
}

// problem 4. Check for Palindrome
const checkPalindrome = (s: string): boolean => {
  const cleaned = s.toLocaleLowerCase()

  const reversed = reverseString(cleaned)

  return cleaned === reversed
}

// problem 5. Sum of Array Elements
const getSum = (nums: number[]): number => {
  let total = 0

  nums.forEach((n) => {
    total += n
  })

  return total
}

// problem 6. Count Vowels
const countVowels = (s: string): number => {
  const vowels = new Set(["a", "e", "i", "o", "u"])
  let count = 0

  s.toLowerCase().split('').forEach((c) => {  
    if(vowels.has(c)) count++
  });

  return count
}

// problem 8. Even or Odd List
const findEven = (nums: number[]): number[] => {
  return nums.filter(n => n % 2 === 0)
}

// problem 10. Find the Minimum in an Array
const findMin = (nums: number[]): number => {
  let min = nums[0]

  for(let i = 1; i < nums.length; i++){
    if(nums[i] < min){
      min = nums[i]
    }
  }

  return min
}

// problem 13. Remove Duplicates from a List
const removeDuplicates = (nums: number[]): number[] => {
  const set = new Set(nums)
  return [...set]
}

// problem 14. Convert Celsius to Fahrenheit
const convertCelsiusToFahrenheit = (c: number): number => {
  return (c * 9/5) + 32 
}

// problem 15. Count Occurrences of a Character
const countOccurrences = (s: string, c: string): number => {
  let count = 0

  s.toLocaleLowerCase().split("").forEach((ch) => {
    if(ch === c.toLocaleLowerCase() ) count++
  })

  return count
}

// console.log(reverseString("hello"))
// console.log(findMax([-1, 10, 4, 3]))
// console.log(checkPalindrome("racecar"))
// console.log(getSum([1,2,3,5,6,7,8,9]))
// console.log(countVowels("maruf"))
// console.log(findEven([2, 4, 5]))
// console.log(findMin([2, 4, 5]))
// console.log(removeDuplicates([ 4, 5, 6, 7, 2, 4]))
// console.log(countOccurrences("kakathegoat", "a"))
// console.log(convertCelsiusToFahrenheit(5))

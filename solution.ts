// problem 1. Reverse a String
const reverseString = (s: string) : string => {
  return s.split("").reverse().join("")
}

// problem 3. Find the Largest Number in an Array
const findLargestNum = (nums: number[]): number => {
  let largestValue = nums[0]

  for(let i = 1; i < nums.length; i++){
    if(nums[i] > largestValue){
      largestValue = nums[i]
    }
  }

  return largestValue
}

// console.log(reverseString("hello"))
// console.log(findLargestNum([-1]))

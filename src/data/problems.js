const problems = [
  {
    id: 1,
    title: "Sum of Two Numbers",
    description: "Write a function that returns the sum of two numbers.",
    difficulty: "Easy",
    functionSignature: "function sum(a, b) {",
    testCases: [
      { input: [1, 2], expected: 3 },
      { input: [-1, 5], expected: 4 },
      { input: [10, 15], expected: 25 },
    ],
  },
  {
    id: 2,
    title: "Factorial",
    description: "Return the factorial of a number.",
    difficulty: "Easy",
    functionSignature: "function factorial(n) {",
    testCases: [
      { input: [3], expected: 6 },
      { input: [5], expected: 120 },
      { input: [0], expected: 1 },
    ],
  },
  {
    id: 3,
    title: "Palindrome Checker",
    description: "Check if a string is a palindrome.",
    difficulty: "Intermediate",
    functionSignature: "function isPalindrome(str) {",
    testCases: [
      { input: ["racecar"], expected: true },
      { input: ["hello"], expected: false },
      { input: ["madam"], expected: true },
    ],
  },
  {
    id: 4,
    title: "Fibonacci Sequence",
    description: "Return the nth number in the Fibonacci sequence.",
    difficulty: "Easy",
    functionSignature: "function fibonacci(n) {",
    testCases: [
      { input: [0], expected: 0 },
      { input: [1], expected: 1 },
      { input: [6], expected: 8 },
    ],
  },
  {
    id: 5,
    title: "Find Maximum Number",
    description: "Return the largest number from an array.",
    difficulty: "Easy",
    functionSignature: "function findMax(arr) {",
    testCases: [
      { input: [[1, 3, 2, 8, 5]], expected: 8 },
      { input: [[-10, -3, -1]], expected: -1 },
      { input: [[7]], expected: 7 },
    ],
  },
  {
    id: 6,
    title: "Reverse a String",
    description: "Return the reversed version of the input string.",
    difficulty: "Easy",
    functionSignature: "function reverseString(str) {",
    testCases: [
      { input: ["hello"], expected: "olleh" },
      { input: ["world"], expected: "dlrow" },
      { input: [""], expected: "" },
    ],
  },
  {
    id: 7,
    title: "Check Prime Number",
    description: "Return true if the number is prime, false otherwise.",
    difficulty: "Intermediate",
    functionSignature: "function isPrime(n) {",
    testCases: [
      { input: [2], expected: true },
      { input: [15], expected: false },
      { input: [17], expected: true },
    ],
  },
  {
    id: 8,
    title: "Sum of Array Elements",
    description: "Return the sum of all elements in an array.",
    difficulty: "Easy",
    functionSignature: "function sumArray(arr) {",
    testCases: [
      { input: [[1, 2, 3, 4]], expected: 10 },
      { input: [[-1, -2, -3]], expected: -6 },
      { input: [[]], expected: 0 },
    ],
  },
  {
    id: 9,
    title: "Merge Two Sorted Arrays",
    description: "Merge two sorted arrays into one sorted array.",
    difficulty: "Intermediate",
    functionSignature: "function mergeSortedArrays(arr1, arr2) {",
    testCases: [
      { input: [[1,3,5], [2,4,6]], expected: [1,2,3,4,5,6] },
      { input: [[0,10], [5,15]], expected: [0,5,10,15] },
      { input: [[], [1,2]], expected: [1,2] },
    ],
  },
  {
    id: 10,
    title: "Count Vowels",
    description: "Count the number of vowels in a string.",
    difficulty: "Easy",
    functionSignature: "function countVowels(str) {",
    testCases: [
      { input: ["hello"], expected: 2 },
      { input: ["xyz"], expected: 0 },
      { input: [""], expected: 0 },
    ],
  },
  {
    id: 11,
    title: "Find Missing Number",
    description: "Find the missing number in an array containing numbers from 1 to n.",
    difficulty: "Intermediate",
    functionSignature: "function findMissingNumber(arr, n) {",
    testCases: [
      { input: [[1, 2, 4, 5], 5], expected: 3 },
      { input: [[2, 3, 1, 5], 5], expected: 4 },
      { input: [[1], 1], expected: null }, // no missing number
    ],
  },
  {
    id: 12,
    title: "Check Anagram",
    description: "Return true if two strings are anagrams, false otherwise.",
    difficulty: "Intermediate",
    functionSignature: "function isAnagram(str1, str2) {",
    testCases: [
      { input: ["listen", "silent"], expected: true },
      { input: ["hello", "world"], expected: false },
      { input: ["aabbcc", "abcabc"], expected: true },
    ],
  },
  {
    id: 13,
    title: "Find Second Largest Number",
    description: "Return the second largest number in an array.",
    difficulty: "Intermediate",
    functionSignature: "function secondLargest(arr) {",
    testCases: [
      { input: [[10, 5, 8, 12, 15]], expected: 12 },
      { input: [[1, 1, 2, 2]], expected: 1 },
      { input: [[5]], expected: null }, // no second largest
    ],
  },
  {
    id: 14,
    title: "Remove Duplicates from Array",
    description: "Return a new array with duplicates removed.",
    difficulty: "Easy",
    functionSignature: "function removeDuplicates(arr) {",
    testCases: [
      { input: [[1, 2, 2, 3]], expected: [1, 2, 3] },
      { input: [[5, 5, 5, 5]], expected: [5] },
      { input: [[]], expected: [] },
    ],
  },
  {
    id: 15,
    title: "Check Balanced Parentheses",
    description: "Return true if parentheses in the string are balanced.",
    difficulty: "Hard",
    functionSignature: "function isBalanced(str) {",
    testCases: [
      { input: ["(())"], expected: true },
      { input: ["(()"], expected: false },
      { input: ["()()()"], expected: true },
    ],
  },
];

export default problems;

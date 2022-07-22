// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// This video explains some approaches and why this approach was used: https://www.youtube.com/watch?v=Q-7-ErtYr5c
//O(n) time complexity because only going over everything once
//O(n) space complexity also
//first sets up arrays showing each letter and frequency and then iterates over each section of p.length, erasing the last character as it goes, and then marking the index by taking i's position minus p.length.


 /**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

  const arrayValuesEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) if(arr1[i] !== arr2[i]) return false;
    return true;
  }
  
  var findAnagrams = function(s, p) {
    const sArr = new Array(26).fill(0);
    const pArr= new Array(26).fill(0);
  
    const result = [];
  
    for (let i = 0; i < p.length; i++) {
      let index = p.charCodeAt(i) % 26;
      pArr[index]++;
    }
  
    for (let i = 0; i < s.length; i++) {
  let index = s.charCodeAt(i) % 26;
  sArr[index]++;
  
  if (i > p.length -1) {
    let headIdx = s.charCodeAt(i - (p.length)) % 26
    sArr[headIdx]--;
  }
  
  if (i >= p.length - 1) {
    if (arrayValuesEqual(sArr, pArr)) { result.push(i-(p.length-1)) 
   }
  }
    }
    
    return result;
  
  };
  
  var s = "cbaebabacd", p = "abc"
  // Output: [0,6]
  // Explanation:
  // The substring with start index = 0 is "cba", which is an anagram of "abc".
  // The substring with start index = 6 is "bac", which is an anagram of "abc".
  console.log(findAnagrams(s,p))
  
  
  var s1 = "abab", p1 = "ab"
  // Output: [0,1,2]
  // Explanation:
  // The substring with start index = 0 is "ab", which is an anagram of "ab".
  // The substring with start index = 1 is "ba", which is an anagram of "ab".
  // The substring with start index = 2 is "ab", which is an anagram of "ab".
  console.log(findAnagrams(s1,p1))
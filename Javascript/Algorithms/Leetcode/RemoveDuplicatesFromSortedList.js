// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var deleteDuplicates = function(head) {
//   let dups = []
//   let filter = []
//   for (let i = 0; i < head.length; i++) {
//       if (head[i] === head[i+1]) {
//         dups.push(head[i])
//       }

//   }
//   for (let k = 0; k < head.length; k++) {
//     if (dups.indexOf(head[k]) === -1) {
//       filter.push(head[k])
//     }
//   }
//   return filter
// };

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// needed some help figuring this one out - don't use these much in the wild
// this is where I found the answer: 
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/discuss/2107984/JS-Easy-Fast-Solution
// added my explanation to it from what I can see it doing, hope I'm right below
var deleteDuplicates = function(head) {
 let ans = new ListNode(-1, head); //sets up as linked list rather than an array
  let prev = ans, pun = ans.next; //prev is current ans pun is next entry
  while(pun) {
      let count = 0, val = pun.val;
      while(pun && pun.val == val) {
          count++; //shows dups
          pun = pun.next;
      }
      if(count > 1) {
          prev.next = pun; //advance
      }
      else {
          prev = prev.next;
          pun = prev.next;
      }
  }
  return ans.next;
};

var head = [1,2,3,3,4,4,5]
//Output: [1,2,5]
console.log(deleteDuplicates(head))
//these don't really show the output console.log is useless here

var head1 = [1,1,1,2,3]
//Output: [2,3]

console.log(deleteDuplicates(head1))
//these don't really show the output console.log is useless here
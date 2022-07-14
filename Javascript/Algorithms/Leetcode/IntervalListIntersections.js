// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let returnArr = [];
  let i = 0,
    j = 0;
  while (i < firstList.length && j < secondList.length) {
    let low = Math.max(firstList[i][0], secondList[j][0]); //highest of the low
    let high = Math.min(firstList[i][1], secondList[j][1]); //lowest of the high
    if (low <= high) {
      returnArr.push([low, high]);
    }

    //advance depending on larger number
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return returnArr;
};

var firstList = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ],
  secondList = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ];
//Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
console.log(intervalIntersection(firstList, secondList));

var firstList1 = [
    [1, 3],
    [5, 9],
  ],
  secondList1 = [];
//Output: []
console.log(intervalIntersection(firstList1, secondList1));

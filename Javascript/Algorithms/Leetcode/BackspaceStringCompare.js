// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let newStr = (string) => {
    var temp = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] == "#") {
        temp = temp.substring(0, temp.length - 1);
      } else {
        temp = temp + string[i]; // had this as concat but is faster to do + instead cut down on load time by a significant margin 128 ms concat vs 70 ms +
      }
    }
    return temp;
  };
  if (newStr(s) === newStr(t)) {
    return true;
  } else {
    return false;
  }
};

var s = "ab#c",
  t = "ad#c";
//Output: true
//Explanation: Both s and t become "ac".
console.log(backspaceCompare(s, t));

var s1 = "ab##",
  t1 = "c#d#";
//Output: true
//Explanation: Both s and t become "".
console.log(backspaceCompare(s1, t1));

var s2 = "a#c",
  t2 = "b";
//Output: false
//Explanation: s becomes "c" while t becomes "b".
console.log(backspaceCompare(s2, t2));

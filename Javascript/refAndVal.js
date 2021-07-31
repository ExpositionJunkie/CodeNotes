//objects copied by reference
//primitives copied by value

let v1 = 5;
let v2 = v1;

let arr1 = [5];
let arr2 = arr1;

v2++;
arr2[0]++; //any manipulation to array 2 will actually manipulate array 1

console.log({v1}, {arr1}); //v1 5 arr1 [6]

arr2.push(6) // arr1 gets changed, arr2 gets changed by ref
arr2 = [5,6] // this one will remain [5,6] as it creates a new place in memory since it is re-declared


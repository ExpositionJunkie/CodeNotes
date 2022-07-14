//https://www.youtube.com/watch?v=UOxTMOCTEZk&t=77s

function hashStringToInt(string, tableSize) {
  let hash = 17;
  for (let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(3333);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);

    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = hashStringToInt(key, newTable.length);
          if (newTable[index]) {
            newTable[index].push([key, value]);
          } else {
            newTable[index] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.numItems++;

    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.8) {
      //resize
      this.resize();
    }

    const index = hashStringToInt(key, this.table.length);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  };

  getItem = (key) => {
    const index = hashStringToInt(key, this.table.length);

    if (!this.table[index]) {
      return null;
    }

    return this.table[index].find((x) => x[0] === key)[1];
  };
}

var myTable = new HashTable();
myTable.setItem("firstname", "bob");
console.log(myTable.table.length);
myTable.setItem("lastname", "tim");
console.log(myTable.table.length);
myTable.setItem("age", 5);
console.log(myTable.table.length);
myTable.setItem("dob", "1/2/3");
console.log(myTable.table.length);
console.log(myTable.getItem("firstname"));
console.log(myTable.getItem("lastname"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));
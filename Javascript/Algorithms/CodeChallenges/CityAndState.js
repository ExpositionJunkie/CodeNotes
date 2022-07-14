const cities = [
    { id: 1, city: "Salem", state: "OR" },
    { id: 2, city: "Seattle", state: "WA" },
    { id: 3, city: "Portland", state: "OR" },
    { id: 4, city: "Vancouver", state: "WA" },
    { id: 5, city: "Albany", state: "OR" },
    { id: 6, city: "Springfield", state: "IL" },
    { id: 7, city: "Spokane", state: "WA" },
    { id: 8, city: "Chicago", state: "IL" },
    { id: 9, city: "Boise", state: "ID" },
  ];
  
//sorting by state and then city.
//this ref was helpful on nested sorts
//https://gomakethings.com/sorting-an-array-by-multiple-criteria-with-vanilla-javascript/
  const sortCities = (c) => {
    let sortedStates = [];
  
    sortedStates = c.sort(function (a, b) {
      if (a.state < b.state) {
        return -1;
      }
      if (a.state < b.state) {
        return 1;
      }
      if (a.state === b.state) {
        if (a.city < b.city) {
          return -1;
        }
        if (a.city > b.city) {
          return 1;
        }
        return 0;
      }
      return 0;
    });
  
    let returnArr;
    returnArr = sortedStates.map((s) => {
      
      return { [s.state]: s};
    });
  
    return returnArr;
  };
  
  console.log(sortCities(cities));
  
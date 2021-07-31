// Filter example with some code golf
const students = [
    { email: "foo" },
    { email: "bar" },
    { email: "baz" }
]

const student = { email: "foo" }


// Using filter:
const result = students.filter(
    function(current) {
        return current.email === student.email
    }
)

    // remember, an instantiated object returns true even if empty
    // this is why we use length below

if (!result.length) {
    console.log("does not exist");
} else {
    console.log("exists");
}

// Using Includes:

    // if you want to do includes you must turn the emails into an array of strings rather than objects
    // note that this will loop over the array twice becuase map iterates and includes also iterates

const result2 = students.map(
    function(current){
        return current.email
    }
)

console.log(result2.includes(student.eamil));


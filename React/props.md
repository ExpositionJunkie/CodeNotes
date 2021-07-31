https://www.youtube.com/watch?v=SbwtUHxRej8

## Props
variable that a component can pass into one of its children components.
whenever you pass in any variable you use props
* convention is props.whateverPropertyYouNeed
props is an object composed of the properties that you have made on your displaying code (where things are rendering) that can be passed to functional components and jsx

## Destructuring
instead of just using props.someVariableName, you can actually take props and turn it into objects by decoupling
    example:
    const {firstname, lastname} = props;
makes it so in the code you don't have to write props.firstname and props.lastname
    Instead, you can refer to them only as firstName or lastName
takes each field from that object and makes it its own variable

* if you want to name a variable something different than it is normally called, you can name it by adding a semicolon and the new variable name
    example (look at "age"):
    const { firstName, lastName, age: employeeAge } = props;

## Looping
You wouldn't want to have to rewrite info for a bunch of employees by hand
frequently for this reason you would store information somewhere else.
Often this is through the back end
Sometimes in early practice you can create a const array with a bunch of objects and instead loop through that array.
* This is essentially what happens with APIs - which are JSON objects returned in an array
Common practice is to use the .map function on the array which will return jsx
* When uising map, don't forget that you need a key - a unique identifier!
    * (React yells if you don't)

## Spread syntax
allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals)
for instance, if you were going to use all of the elements of a json file in order, you would be able to pass it as a single object using spread notation.

https://www.youtube.com/watch?v=qGtLO-v645U

## Computed Property Names
Allow you to pass in variables for use as property names when initializing an object

see below:

<script>
const myProperty="foo";
cosnt myObject = {
    [myProperty]: "This is a test"
}
</script>

[myProperty] will change into "foo" when the object is created.

This allows you to create a property more dynamically.

You will sometimes need to create an object that doesn't know in advance what the property names wil be and will create them from variables that are passed to it. 

## Spread Syntax
Can be used with both arrays and objectws
Allows you to pull out ("spread") a copy of what's inside the array object.
There are various reasons to do this, in the nucamp course the reason will generally be to create a new array or object
later, you will see how this can be used in redux

example: you have two arrays and want to combine them into a new aray. Do so like this using elipses:

<script>
const landVehicles = ["sedan", "truck", "van"];
const waterVehicles = ["canoe", "sailboat", "submarine"];
const vehicles = [...landVehicles, ...waterVehicles];
</script>

Can also be done with strings like so:

<script>
const moreLandVehicles = [..landVehicles, "tank"];
</script>

It is possible to spread and recombine multiple arrays along with any other kind of data that you could normally store in an array.

ex:

<script>
const mixNMatch = [...landVehicles, "banana", 3, 3, { someObjPRoperty: "someObjPropValue"}, ...waterVehicles];
</script>

Gives us an easy way to also do this with objects:

<script>
const objOne = { color: "blue", height: 12 };
const objTwo = { material: "ceramic", width: 6 };
const objOneandTwoCombined = {...objOne, ...objTwo};

//If you try to combine two objects that have properties in common:
const objThree = { color: "red", width: 7 };
const objOneAndThreeCombined = {...objOne, ...objThree};
// will print:
// {color: "red", height: 12, width: 7}
// objThree overwrites the properties it shares with objOne

// if you switch the order of the objects, and write objOne last, then the shared properties will be that of objOne
</script>

You can also use the spread syntax to create a new object from an existing object while updating one or more of its properties

<script>
const objOneUpdatedHeight = {...objOne, height: 300 };
// here we spread out the properties from objOne, updated height, and put it together in a new object
</script>

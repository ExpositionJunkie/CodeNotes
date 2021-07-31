
## Truthy Vs Falsy
    Boolean value of a question

## Array vs Object
    Object uses key value pairs
    Array is indexed list - can maintain order

## Method Vs Function
    Method is a function that belongs to an object
    Method normally works on the data of the object

## Classes vs Instances
    One class many instances

## DRY vs KISS
    DRY = Don't Repeat Yourself
        Easier to refactor if you need to 
    KISS = Keep It Stupid Simple
        Find the solution that is the simplest for your problem that is still readable

## Iterate
    Looping or moving through data

## Mutator vs non Mutator
    Mutator will change the original array
    Non-Mutator will create a different array

## Framework vs Library
    Framework calls your code - hollywood principal (don't call us, we'll call you)
    Library you call this within your code

## Filter
    will retrun items in the array that return that condition
## Map
    returns a new array that has a function acting on each of the elements in order
## Reduce
    returns a single value after iterating over the array - can be anything, object, array, number

## Element, Tags, Component, Text Node
    Element is full text of HTML entity<h1>Hello</h1>
    Tag is just the <h1></h1> part of that
    Component is React entity
    Text node is Hello between the HTML tags

## Parent, Child, Sibling
    <div>
        <span>
            Hello
        </span>
        <span>
            Hello
        </span>
    </div>

    div here is the parent
    span is both child and sibling

## Webpack
    manages dependencies on our project
    added in the create-react pack

## Module
    file that has at least one export

## Import
    defualt - can name anything you want if it has been "export default blahablah"
    import YO from 'yomama';
    not default
    import {joke} from 'yomama';

## props and state
    State changes throughout lifecycle
    props always sent down to child component

## DOM
    Document object model
    API that changes anything on the page based on HTML and JS
    HTML is not the DOM
    HTML is original page mode
    DOM makes things appear on the string

## React Class Component

example: 
class Hello extends Component {
    constructor (
        super(props);

        this.state = isOptionalStoresState;
    )
    render(
        return(

        );
    );
}

## DOM and Virtual DOM
DOM - API elements
Virtual DOM - react

## Server Side Rendering
requesting something from the server - creates the page for you dynamically

## Single Page Applications
makes it look like you have created multiple pages but js is shifting things around instead

## Presentational Components VS Container
presentational -> visual rendering
container -> state

## Ternary Operator
shortened if statement
ifThis? whatToReturnIfTrue : whatToReturnIfFalse

## Pure Function
a pure function doesn't manipulate anything outside of its scope
a not pure function may contain an iterator or act on a variable outside of itself

## Higher Order Functions
function is_range(min,max){
    return function(n){
        if (n >= min && n <= max) {
            return true;
        }
        return false
    }
}

const num = 11;
const validator = is_range(5,10);
const result = validator(num)
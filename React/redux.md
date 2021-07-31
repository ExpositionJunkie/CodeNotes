# Redux
https://www.youtube.com/watch?v=hw-_MiXaILk

Flux is an architecture/design pattern taht describes an approach to structuring an applications front end
A design pattern does not provide actual code
js libraries that implement Flux include: Flummox, Alt, Redux

## Background
Redux has some differences from Flux but is inspired/influenced by Flux and can be considered an evolution
Created by Dan Abramov for use with react, co written with Andrew Clark, author of Flummox
Aside from Flux, also inspired by: the Elm functional programming language  and three js libraries: Immutable.js, Baobab.js, RxJs

###
* A predictable container for js apps
* provides code that stores application state and a consistent way to acces and update that state from anywhere in the app
* Not just for react- can be used with any js application (but most popularly used with React)

#### Relevancy to Nucamp Coursework
* Course project is simple - container component Main stores state and passes data as props to several presentational components; changes to state only occur in Main
* In the real world, can have 100s or 1000s of components that have more complicated heirarc hies and groupings
* State management becomes much more tricky at scale - redux handles predictable, consistent, state management

##### Redux in Theory
Fundamental Principals
* Single source of truth
    Flux: there can be multiple stores and the dispatcher directs actions to the right one
    Redux: Only one store; holds a single state object tree that contains the whole state of your entire application as objects within that tree
    Object tree: tree-like data structure; each node contains an object; DOM is another example of an object tree.
* State is Read-Only
    Only way to chagne state is with an action - an object that describes what happened
* Changes are made with Pure Functions
    Changes are made with pure functions called reducers
    Pure functions are functions that have no side effects and given the same inputs, always return the same outputs.
    A Redux reducer is a pure function that takes the previous state and an action and returns the next state
    Similar to how array methods like map work where they always return a new array and do not mutate the original.
    Reducers always return NEW state objects instead of mutating the previous state
    Programming concept: immutability --data does not get mutated, only replaced by new data.
    Objects are cheap to create and this approach creates advantages such as "time travel" - ability to step back and forward from previous state.
    Think of it like frams in an animation sequence or flipbook. Every frame is different slightly from the one before, but is its own page. When you want to make a change, you create a new page.

###### Redux in Practice
View (React Components) => Redux Actions => Reducers => Redux Store => (Back to view)
One way data flow

## React-redux library
createStore()
    Creates the redux store which holds the state (as an object tree)
connect()
    Generates a container component that wraps around other components to subscribe them to the store
mapStateToProps()
    Passed as callback to the connect() function
    Called whenever state changes
    Recieves entire state tree & returns an object taht contains only the data needed by the component
<Provider>
    Wraps around the root component of the app
    Takes the store variable as an attribute
    Makes store accessible to all child components that are connected using the connect() function


# Actions and Reducers
https://www.youtube.com/watch?v=5OqjJYEnsiI

## Redux Actions
Plain javascript objects contianing payloads of information to be sent to the Redux store
Actions are the only way that updates get sent to the store
Teh only required property for an action is type = the type will be a unique string
Best practice: gather all action types into a separate module
You will be able to see all of the different changes of state viewing these

### Dispatching an Action
React components will dispatch an action in response to some user interaction. - e.g. loading a new video, clicking a button etc.
In react-redux you will never dispatch directly 0 you will suply an argument called mapDispatchToProps to the connect() function, which will call the store's dispatch method for you.
Whenever an action is dispatched a new action object must be created.
Typically, you will write a function called an action creator that will create the object in a consistent, error free way.

Action creator example:
export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

For every action, you will create:
1.) An action type defined as a string constant
2.) An action creator, a function taht returns the action object and has a type property, plus any data (payload) to send to the store to update it.

You will need to connect each action to a React component using the connect() function and a mapDispatchToProps argument.

Every time an action is dispatched, the Redux store will check all its reducers for a matching action type, then run the code for that action type, which will then update the state.

#### Reducers
example reducer function:

export const Campsites = (state = {campsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, campsites: action.payload};
        default:
            return state;
    }
};

while there are not mult stores in redux, there can be mult reducers that handle different parts of the state.
This reducer only modifies part of the state. 

State is read only - you never mutate the existing state, you only replace it with the new state.
One way that we can create a new state from the existing is via the spread syntax like above - not the only way but v. common in React.
Basically this makes a copy of its properties and then adds the payload and surrounded by curly braces to show it is an object. It will overwrite teh campsites property. 

## Splitting the Reducer
you can separate reducers into separate functions and later combine them into one function. 
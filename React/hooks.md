https://www.youtube.com/watch?v=TNhaISOUy6Q

hooks - low level primitives of the react framework that give you special abilities you may not have had in vanilla js.

always start with the word "use"

always call them at the very top of the Javascript function - cannot be used further down in the function.
* the only exception to this rule is when buidling your own custom hooks * 

Basic Hooks
* useState
    handles reactive data
    any data that changes is called reactive data
    when data changes, useState re-renders the UI so the latest changes are accessible by the user
    takes one optional argument which is the default state
* useEffect
    takes a function you define as its first argument
    takes an array of dependencies as its second argument
    to allow you to choose what to do on which state changes, put your dependencies in the array in the second argument.
        Any time the state changes, it will rerun this function.
    You may want to run a teardown function any time a component is destroyed
* useContext
    allows you to work with react's context api which allows you to share data without passing props
    Since the parent of that context may be many levels higher, can make it a lot easier to access the context state.
    consumes value from the nearest parent provider

Additional Hooks
* useReducer
    uses redux pattern 
    action > reducer > store
    returns an array of two values:
        first is state, second value is the function that can dispatch an action
        action: object that has a "type:" and an optional data "payload:"
    Reducer function is something that you define
    takes the current state and the action as arguments
    and uses the two to compute the next state
    this is normally handled inside a switch statement
    example:
    function reducer(state, action){
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                retrun state -1;
            default:
                throw new Error();
        }
    }
    Redux pattern is used to manage complexity as a project grows. As it grows, it becomes harder and harder to reliably access different states.
* useCallback
    memoizes an entire function.
    can be useful for a function that is called by a lot of children making it unweildy 
    wraps a function in useCallback allowing you to avoid unneccessary computation time of creating new instances of that function on large scale
* useMemo
    optimize computation cost and improve performance
    memoization: cache result of function call
    don't want to prematurely try to optimize performance
    use only as needed for expensive calculations
* useRef
    allows you to create a mutable object that will keep the same reference between reference.
    does not trigger a re-render as state change like setState does
    grab native html elements from the dom/JSX
* useImperativeHandle
    use is rare.
    wraps a ref that was forwarded
* useLayoutEffect
    use is rare.
    runs after rendering component but before printing to screen
    blocks visual updates until your callback is finished
* useDebugValue
    make it possible to define your own custom labels when you build custom hooks

Component lifecycle:
componentDidMount() {
    // initialized
}

componentDidUpdate() {
    // state updated
}

componentWillUnmount() {
    // destroyed
}
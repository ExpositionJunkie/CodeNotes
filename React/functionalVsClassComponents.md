https://www.youtube.com/watch?v=wwl6iH5D0LU

## Functional Component
regular js function that can take in props as argument and renders
some take in props some don't
props are pieces of data htat your component may need whether it's for display purposes or data used within the logic of the component itself.
return => JSX
do not come with a constructor

# Old School Vs Now Functional Component
did not allow you to manage the state of a function, so were considered stateless originally.
do not give you access to lifecycle functions originally
react Hooks now give you this option through a set of predetermined and custom options.

# Hooks
allow you to set things like the state through predetermined functions with less lines of code
used in functional components only
you can make your own


## Class Component
syntactically different from functional component
needs to extend from component class
come with a constructor and a constructor is used to set up some initial state
also comes with a render function
in order to render something in a class you need to put it in the render function
render function => returns => JSX
you're allowed to manage the state of your compoennt ex "this.setState"
    * can control lots of things - opened or closed windows, etc.
constructor is used for setting up initial state of your component and other things
access to "lifecycle functions"

# Lifecycle Functions
* Functions that invoked in the lifecycle of a component

Example: you have a component that you want to see if it updated:

            componentDidUpdate() {

            }

Each time the component updated the site would call the ^above function and any code inside would be executed.
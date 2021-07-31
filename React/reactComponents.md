## Ready Made tools
    https://github.com/enaqx/awesome-react

## Components
Each component must return a single react element or component (which can contain more elements/components)
Each component represents a part of the view in the browser
Data goes down always 

## Import/Export

## reactstrap
* Lbirary of react + bootstrap components
- integrates bootstrap 4 components and react together
- Not the only way to do this, there are others, but we will use this one
- We will also use just plain bootstrap at times

## JSX 
* helps visualize UI inside Javascript, easier to read
* Similar to HTML Syntax, some differences
* Transpiles to Javascript

## Props
* Read only data passed from parent to child

## Lists and Keys
* Each object needs a key

## Functional Components
* written just like a function
* typically you will only see them written as function declarations or arrow functions
* Need to have first letter capitalized
* Need to accept props as an argument
* they will return at least one react element but they do not use the render method around the return
* when you refer to props, you do not use the "this" keyword
* no constructor method and cannot hold state
* cannot use lifecycle methods
* in recent version react v.16.8 hooks were introduced to make functional components access lifecycle methods but nucamp course does not cover this.

To use:
yarn add react-router-dom@5.2.0
# MVC Design Pattern
https://www.youtube.com/watch?v=L4W2MMwEXdM

aka MVC framework
A software design pattern, not a library
reusable approach for how to structure an application
created in the 70s for use with desktop application GUIs
Typically used to develop presentation layer/client side
popular in web dev

# Separation of concerns
facilitates independent developement, testing, and maintenance of different parts of an app
presentation layer divided into 3 parts - Model, View and Controler

## Model
    Handles application state and logic

    Not a database, but the code that retrieves data from a database, stores it in application state, and updates it

    Will respond to queries about its state (from View/Controller) and will respond to requests to update staet (from Controller)

    May also notify View/Controller when its state changes

## View
    Presents informaiton to the user

    Renders Model into a form suitable for display, typically a UI element

    Can query Model directly about its staet and update itself based on changes

## Controller
    handles events and mediates between model and view

    recieves and processes info from the View (from user interaction, ex. mouse events, form submission)

    Can instruct both Model and View to update

### Note:
Though MVC pattern is very common in programming and youi should know about it, React does not use MVC

React state management is often handled with a newer design pattern called Flux

We will be using a state management library called Redux which owes some of its parentage to Flux
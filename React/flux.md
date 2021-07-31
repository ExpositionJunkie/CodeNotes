# Flux
https://www.youtube.com/watch?v=2VU2WK5LmHs

MVC did not scale well for facebook - became unpredictable at this scale - hard to add new features without causing unexpected cascading effects in other parts of the code
This was largely due to bi-directional design of MVC data flow


Flux works like this:
separation of concerns:
Action => Dispatcher => Store => View

One way data flow

When an action enters it goes to the dispatcher

## Dispatcher
* One Central dispatcher, multiple stores
* Dispatcher acts as traffic controller, routes actions to stores
* Stores hold application state and logic
* Views update when stores are changed

## Store
* Tells the view to update whenever the store says something has changed

## View
* Another action can enter the system from View - travels back to the dispatcher
* The Dispatcher makes sure that actions are processed one at a time, prevent cascading effects.
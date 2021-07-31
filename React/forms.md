https://www.youtube.com/watch?v=wKcs9HH6K70

## React Controlled Forms
Form values directly tied to the state of the React component that the form is in
in this approach, react reaches in and takes control of the form elements
It becomes the "single source of truth" for the react form - meaning no conftlicts between HTML form state and React
Any changes that the user makes to the form fields are immediately reflected in the components state, and can easily be responded to with javascript such as form validation showing error messages etc.
Then the form is easily able to respond by updating the javascrip with validation showing error emssages etc.

See video for example of how this fits together
using a bind method or an arrow function ensures that the handleChange event is targeting the proper item.
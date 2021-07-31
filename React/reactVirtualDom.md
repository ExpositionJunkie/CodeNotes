# DOM
Dom is not HTML or js
elements tab is a representation of the DOM
The browser DOM is an API - an Application Programming Interface - a set of specifications for how programming languages and HTML can interface with each other.
Maps HTML elements to a node-based, tree-like representation that programming languages can understand, traverse, and modify.

## Browser DOM
Cross platform and language independent - so not only used with JS  but usually is used with JS
Any changes you amke with js to a webpage's view causes the DOM to be recreated and the affected DOM nodes and all their children, the entire branch
Whenever the browser DO)M is recreated, then the graphical view is also re-rendered, which can be an expensive process

## Virtual DOM
Technique not unique to react, react is one implementation of it
React application maintains a lightweight representation of the browser DOM in memory
Much faster and easeir to update the virtual dom because it doesn't require re-rendering of the graphical display.
Any DOM changes you make with React are first made to the virtual DOM.
When chagnes are made in react, react uses a process called "reconciliation" to compare and find differences between ("diff") the Virtual DOM and the Browser DOM
* Done through a sophisticated reconciliation engine named Fiber
Looks for which nodes have changed in the dom tree then finds the most optimized way to patch the brower DOM with the changes with minimal re-rendering, such as by combining updates in batches instead of multiple single changes.
This is the reason why we use setState to change the application state instead of changing it directly

USE:
this.setState({selectedCampsite: campsiteId});

NOT:
this.state.selectedCampsite = campsiteId;

setState sends your change through the virtual DOM - if you don't use it, you are missing out on one of the most useful features of React.

This is also why you should set a unique key attribute to elements rendered as a list using map, as you have learned before - this helps the React reconciliation process figure out what items have changed and should be updated and which to leave alone.
* This way you are not re-rendering items unneccessarily

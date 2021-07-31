# Single PAge Application
One page that locally downloads all the front-end application code for the website (html, css, js)
Example: Gmail, Google Maps, Facebook
When switching views, the application intelligently handles the front end rendering, making minimum requests to the server and re-rendering only what has changed.

## Pros
Much faster experience due to fewer server requests
Streamlined development: easier to divide back end and front end tasks
Easily reuse back end code for mobile app development
Easy to debug in the browser

## Cons
Search engines can have trouble indexing SPAs (though they are improving), so SPAs are typically best for websites behind a login that would not be indexed anyway
Dependeng on js being enabled in browser
Initial download of application code can be slow
Must be careful of memory leaks

## Navigation and Routing in SPA
Do not use traditional browser nav of going to new html page for each view
Concerns such as clicking on links to render different views, using back and forward buttons for browser history, etc
This is what React Router provides
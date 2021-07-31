# Fetch API
https://www.youtube.com/watch?v=7QFuBFokia8

## Web APIS
* Provide code constructs (objects, methods, etc) that are not technically part of JS
* Built into browsers by default, so you can use them in client-side JS

Many examples: document.getElementByID is a part of the Document Web API

Prior to Fetch, the most common web API to use for making client-side HTTP server requests was the XMLHttpRequest API
Fetch is meant to be its modern replacement with a more powerful and flexible feature set, but you will still see it in older code.
Some third-party library Fetch alternatives such as Axios and Superagent are both built using XMLHttpRequest as the base, but wrapped with more powerful code.

### Fetch

Request object
.headers
.method
.status
.credentials
.body

...

Response object
.headers
.ok
.status
.type
.body
...

the fetch function (or global method) has only one required parameter - the path to the resource that you are trying to fetch from
the fetch API is entirely promise based. Fetch returns a promise containing the response object
by default, the repsonse will contain a boolean ok property.
Ok property is set to true or false based on the http response that it gets from the server
we can quickly check if a fetch was successful by checking if response.ok is true and if not we can throw an error

We can then get a response.json() from that data if we know that the body will contain data to parse it.
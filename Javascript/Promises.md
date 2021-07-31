<script>
/* 

https://www.youtube.com/watch?v=JO2MgKjKLxQ

Promises 
* Added to js formally in es6 to handle async computation
* Allow app to procede without waiting for a response
* Acts as a proxy for a value that is not avail the moment the promise is created

A promise has three states:
Pending: you've ordered the pizza but it has not arrived
Fulfilled: The pizza has been baked and delivered
Rejected: The pizza delivery has failed for some reason
 */

//Creating a promise


const somePromise = new Promise((resolve, reject) => {
    /* run some code*/
    /*call the resolve function if successful and the reject function if failed */
});

/*
Consuming a promise:
.then()
.catch()
.finally()

*/

// one way using then and error as a secondary optional response

somePromise.then(
    response =>
        /* handle the response returned from the promise's resolve function */
    error =>
        /* Handle the error returned from the reject function */
);

// another way using catch:

somePromise
    .then(response => /*handle the response returned from the promise's resolve function */)
    .catch(error => /* handle the error returned from the reject function */);


// Promise chaining: 
// Sometimes you will want a promise to generate another promise which you can do by chaining thens like seen below:

somePromise
    .then(response => /*handle resolve response, return a new promise */)
    .then(response => /*handle resolve response, return new promise */)
    .catch(error => /*handle any reject errors*/);

// you should have a catch at the end of a promise chain so that it can catch that reject. 

// If you need to go directly to catch, you can use throw as seen below:

somePromise
    .then(response => {
        if (/* some condition */){
            throw new Error("Uh oh, we have an error!"); /* Will throw to nearest catch */
        }
        /* handle resolve response, return new promise */
    })
    .then(response => /*handle resolve response, return new promise */)
    .catch(error => /* handle any reject errors */)

// you may wish to have some of the thens handle their own errors, but then set up a catch for those that don't handle their own errors.
</script>
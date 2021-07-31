"use strict";

const obj1 = {
    id: 100,
    whatIsThis(){ //1
        console.log(this)
    }
}

obj1.whatIsThis = obj1.whatIsThis.bind(obj1) // creates a new function //2

const obj2 = {
    id: 200,
    whatIsThis: obj1.whatIsThis //2
}

//bind

obj2.whatIsThis(); //2

// No Matter where you call what is this it is bound to obj 1


// with arrow functions
    // no arguments
    // always references the parent

// Example:
/* 

const obj1 = {
    id: 100,
    whatIsThis = () => {
        console.log(this)
    }
}

*/
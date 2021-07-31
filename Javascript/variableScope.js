"use strict";

// Demonstrating Variable Scope

const value = 100;

function showValue(){
    console.log({value});
}

function myFunction(){
    const value = 200;
    showValue();
}

myFunction()

// ^ will return 100 because showValue() cannot see the value = 200,
// just the globally defined value = 100;


function myFunction1(){
    const value = 200;

    function showValue1(){
        console.log({value});
    }

    showValue1();
}

myFunction1()

// ^ this one will show 200 becuase the showValue1's parent scope is now myFunction1
// so this is accessing the value inside of myFucntion1
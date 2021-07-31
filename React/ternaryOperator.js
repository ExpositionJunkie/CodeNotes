// https://www.youtube.com/watch?v=oKXqxtkxtLo

/*
The Ternary Operator 
    aka conditional operator
    called ternary (meaning three) because it is the only js operator to take 3 operands.

    ex:

    condition ? expression if truthy : expression if falsy

    shortcut for the if statement

*/

const lightswitch = {
    switchState: "on",
    flipSwitch() {
        if (this.switchState === "on"){
            this.switchState = "off";
        } else {
            this.switchState = "on";
        }
    }
};

// writing flipSwitch with ternary instead:

lightswitch.flipSwitch = function() {
    (this.switchState ==="on") ? this.switchState = "off" : this.switchState = "on";
}

function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// cannot be rewritten this way bc cannot take returns inside of the truthy/falsy parts:

/*
function canVote(age) {
    (age > 18) ? return true : return false;
}
*/


// can be rewritten this way, however:
function canVote(age) {
    return (age >= 18) ? true : false;
}


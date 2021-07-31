# Data Types
Number
String
Boolean
Undefined
Null
Object
Symbol
BigInt

# Basic Ways to Use Variables
## Declaration
    declare all variables priopr to use, at the top of their scope.

    use var/let/const to create and name a variable, e.g.: let houseType;

## Assignment
    assign a value to the variable using an assignment operator, usually =, e.g.: houseType="wood";

## Initialization
    the first time a variable is assigned a value, which can be done togetehr with declaration, e.g.: let houseType="wood;

# Javascript Grammar
    Use semicolons at the end of a statement to show that it has finished.

    You do not need semicolon after the ending curly brace at the end of a code block, such as for function, if, for, and while/do code blocks

    If you leave out a semicolon where one is needed, the Javascript engine will automatically insert one for you (Automatic Semicolon Insertion) 
    
    //^ don't think this is accurate. An add on?

    Name js variables using camelCase

    Give concise but readalbe variable names

# Arithmetic Operators
## ++ Increment Operator
    Takes a single operand, no spaces between ++ and variable name: myNum++

    Operand must be a variable containing a number

    Will increment the value of the variable by 1

    Actually changes the variable itself
    
    Can be used prefix or postfix:
        Prefix: ++myNum 
            increments the number before returning the number
        Postfix: myNum++
            increments it after returning the number

## -- Decrement Operator
    Takes a single operand, no spaces between ++ and variable name: myNum--

    Operand must be a variable containing a number

    Will decrement the value of the variable by 1

    Actually changes the variable itself

    Can be used prefix or postfix:
        Prefix: --myNum
            decrements the number before returning number
        Postfix: myNum--
            decrements the number after returning the number

## Equality Operators
    == Equality Operator - more relaxed truthy 
        loose equality - data types of operands do not need to match

    === Strict Equality Operator = exact
        data types of operands must match
        best practice to use this one

    != loose not equals

    !=== strict not equals

    < or > for letters, these evaluate less as closer to the beginning of the alphabet

    && Logical And

    || Logical Or

    ! Logical Not

    ## Difference between == and ===
    "1" == 1 (truthy) - checking for equality
    "1" === 1 (falsy) - equality adn identity

## Type Coercion
    2 ways that a value's data type can be converted:
        Explicitly - type conversion - aka type casting
        example: String(1)
        Implicitly - JS changes them in order to perform functions on its own
        
    Rules for determining wehther a non-boolean value would be converted to true or false is truthy or falsy:
        Any value that is 0, "", undefined, null or NaN converts to false (is falsey)

## Arrow function
    uses the this of the parent object

## Byref and ByVal
    Primitives copied by value
    objects copied by reference


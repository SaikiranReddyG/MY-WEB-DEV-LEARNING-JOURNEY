/*
function
--A function is a block of JavaScript code that is defined once but may be executed, or
invoked, any number of times
*/


/*defining functions
--functions are defined with the "function" keyword
--function definitions begin with the keyword function followed by these
components:
> An identifier that names the function. The name is a required part of function
declaration statements: it is used as the name of a variable, and the newly defined
function object is assigned to the variable
>A pair of parentheses around a comma-separated list of zero or more identifiers.
These identifiers are the parameter names for the function, and they behave like
local variables within the body of the function
>• A pair of curly braces with zero or more JavaScript statements inside. These statements are the body of the function: they are executed whenever the function is
invoked
examples are shown below
*/

//print the name and property of o, return undefined
function printprops (o) {
    for (var p in o) {
        console.log(p + ":" + o[p] + "\n");
    }
}

//compute the distance between cartesian points (x1, y1) & (x2, y2)
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);;
}

console.log(distance(3, 4, 5, 6));


//a fuction that squares its args
var square = function(x) {return x*x;}

console.log(square(5));

/*
the "return" statment causes the function to stop executing and return the value of its expression
& if the return statment does not have any associated expression then returns a undefined value
*/


/*
nested functions
--in JS functions may be nested inside another funcions
--for nested functions the variable scoping rules can access the 
parameters and variables of the functions they are nested in
*/

function hypotenuse(a, b) {
    function square(x) {return x*x}
    return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(2, 3));

/*
in the above example, the inner function(square) can read  &  write the parameters(a, b) of the outer function(hypotenuse) 
*/

//invoking functions
/*
--a function is not executed when it is defined but when it is invoked
--JS function can be invoked by 4 different ways
1>>as functions 
2>>as meathods
3>>as constructors
4>>indirectly through call() & apply() meathods
*/

//1>>function invocation
/*
a function is invoked as an function using "invocation expression"
it is an expression consisting of fuction expression followed by closed parenthesis of within list of args
*/

var total = distance(0, 0, 9, 8) + distance(7, 6, 5, 4);
console.log(total);  //here the distance function is invoked as fuction

//2>meathod invocation
/*
--a meathod is JS function that is stored in a property of an object
--if you have a fuction "f" of an object "o", theb a meathod "m" of "o" is
o.m =f;
--to invoke this meathod
o.m();
--if "m" expects 2 args x, y then
o.m(x, y);
*/

var calculator = {
    operand1: 1,
    operand2: 1, 
    add: function()  {
        //the use of "this" keyword 
        this.result = this.operand1 + this.operand2;
    }
};

console.log(calculator.add);
console.log(calculator.result)

/*
"""this"""
--it is a keyword, not a variable or property name
--JS does not allow you to assign values to it
*/

//constructor invocation
/*
--it is a fuction or meathod invocation is preceeded by the keyword "new",
--constructor invocations may include args list in parenthesis & they are
passed to the fuction same as function or meathod invocation
--if the constructor invocation has no parameters then the args are ommited completely 
*/

var o = new Object;

//indirect invocation

/*
--JS functions  two have mathods >call() >apply()
--they invoke the function indirectly
--call()>>uses its own arguments list as arguments to the function
--apply()>>expects an array of values to be used as args
*/

/*
>>function arguments and parameters

>>optional parameters
--when a fuction is invoked with fewer args than the declared parameters
the additional parameters are set to "undefined"
*/

function propertyNames(o, a) {
    if (a === undefined) a = [];  //if a is undefined, use a new array
    for (var propertyy in 0) a.push(propertyy);
    return a; 
}

//variable length argument list  :  the Arguments object
/*
--when a function is invoked with more argument values than the parameters
the "arguments" object will provide solution to this
--the "arguments" object is an array-like object that allows arguments values passed 
to the function to be retrived by number rather than name
*/

/*function (x, y, z){
    {if (arguments.length != 3) {
        throw new Error("function f called with" + arguments.length + "arguments, but not 3");

    }
}

}*/

//using object properties as Arguments

//argument types


//functions as values
/*
functions are not only syntax, but also values which means they can 
be assigned to varables, stored in properties of objects or the elements of arrays
*/
var s = square;
console.log(square(4));
console.log(s(4));

//defining your own function properties
/*
functions are not primitive values but a specilized kind of object
they can have properties
*/

//functions as namespace
/*
--as function scope specifies, variables declared within a function 
are visible throught the function but not outside the function 
and variables that are defined outside the function are globlal varibles
--sometimes it is useful to define a function  simply to act as a temperoray
namespace in which you can define varaibles without polluting global namespace 
*/

//closures
/*
--JS uses lexical scoping i.e the functions are executed using the variable scope that was in effect 
when they were defined not the variable that is in effect when they are invoked  
--the combination of a function object and a scope in which the function variable are
resolved is called a ""closure"" 
*/

//function properties, meathods, and constructor

/*
--length property
within the body of a function "arguments.length" specifies the no of
arguments that are passed to the function 

--prototype property
it refers to ab object known as the prototype object
when a function is used as a constructioe the newly created object inherts properties from the 
protoype object

--call() & apply()


--bind() meathod
it binds a function to an object
any arguments that you pass to the bind() after the first are bound along 
with the this value


--toString() meathod

--function() constructor


--callable objects


*/

/*
//functional programming

--JS can manipulate functions as objects means that we can use functional progamming
techniques in JS

>processing arrays with functions

>higher order functions
it is a function that operates on functions taking one or more 
functions as argumests and returning a new function

>partial application of functions

>memoaization
--the menoize() function creates a new object to use as the cache and assign
this object to a local varable, so that it is a private to returned function
*/
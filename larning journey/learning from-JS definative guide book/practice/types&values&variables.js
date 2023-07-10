/*
types
-JS types can be divided to 2 types primitive and object types
-primitive types (numbers, strings, boolean)(null & undefined)
-any type other than primitive is considered as a object
an ordinary object is an unordered collection of named values, some examples are:

1>array--ordered collection of the numbered values
2>functions--an object that has executable code associated with it
these are true values and JS treates them as real objects
these are written to be used (using "new" operator) to initialze a
newly created objects called "constuctors"  (a class of objects)
<in additon to these 2 objects, core java has 3 more objects >
3>dataclass(objects that represent data)
4>regExp(objects that represent regular expressions(pattern matching tool))
5>error(objects that represent syntax and runtime errors) 


mutable(objects & arrays)
immutable(numbers, booleans, null & undefined)(strings)


//numbers
-integer literals
-floating point literals
-arthmetic in JS (+ - * / // ......)
-binary floating point and rounding errors
-dates and times

//text (string)
>has zero based indexing
-string literals(closing the charecters in single or double quotes)

--escape sequences in string literals (\ & \n........)

--working with strings
(join or concatenate using +)
(find length usig .length)
and many similar meathods like (slice, charAt, indexOf, split ..........)

--pattern matching
both strings and regExp objects have meathods for performing pattern matching & search and replace operations using regExp
regExp are  simply a specilized kind of objects 

//boolean values
(true or false & yes or no & on or off.....)
--these are commonly used in JS contol structure (if/else....)
--boolean values have "toString()" meathod that convert them to strings ("true", "false")
--&&>>boolean AND operation (check if both operands are true)
--||>> booleab OR operation (check if either one of the operands are true)
--!>>boolean NOT opeation (returns opposite boolean value)


//null and undefined
null==no value
undefined == value not been initialized or does not exist 

//global object


//wrapper objects


//immutable primitive values and mutable object references 

//type convresions
JS is very flexible about the type of the values it requires i.e
when JS expects boolean value, whatever the value you supply to JS,
it will convert it as needed
*/
var a = 10 + "objects";
console.log(a); //"10 objects" here number 10 converted to a string

/*
--conversion and equality
Because JavaScript can convert values flexibly, its == operator is also flexible
but convertability of of one value to another does not mean thoese two values are equal

--explicit conversion

--object to primitive conversions
all objects inhert two conversion meathods 
1>>toString()--it returns a string representation of the object
for an array class--convert each array element to a string and joins the result strings with commas
for a function class--returns an implementation defined representation of a function 
for a date class-- returns a human readable date and time string
for a regExp class--convert to a string that looks like regExp literal

2>>valueOf()--convert to a primitive value that represent the object
for array, function, regExp classes ---returns the object itself
for date class-- returns the date in its internal representation 

//variable declaration
varables are declared using the key word (var)
you can declare multiple varables with one var keyword

--repeated and ommited declaration
you can declare a variabl more than once with var keyword
reading an undeclared values generate error

//variable scope
it is the region of the code where the variable is declared 
--a globla varable has a global scope & defined everywhere in the code
--a local varable has a local scope  & defined within the function
--in a function a local variable takes precedence over the global variable with same names

--function scope and hoisting
in c-like languages each block of code within curly brackets has its own scope
and the varables used inside it are not visible outside, this is called block scope 
in JS the function scope is used ,here the variables are visible within the function 
in which they are defined and within any function that are nested inside that function
sometimes this also means, variable are visible even before they are declared--this feature
of JS is called as "hoisting"

--variables as properties


--scope chain
*/
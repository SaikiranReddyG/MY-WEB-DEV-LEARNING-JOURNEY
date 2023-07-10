/*
//expression--meaning that the JS interpreter can evaluate to produce a value
some examples are (a varable name....)
complex expressions are built from simple expressions

//operators--the most common way to bulild an complex expression is
using operators(+ - * & % .......)
*/

/*
//primary expressions
--these are stand alone expressions and cannot be further simplified
--the examples are (constants or literals...)

//object and array intializers
--the expressions whose value is newly created object or array

//function defination expressions
--it is a newly defined JS function
--consists of "function"keyword followed by comma saperated list of identifiers & some JS code inside({})

//property access expression
there are 2 ways of using this:
1>>expression.identifier 
expression specifies the object & identifier specifies the name of desired property

2>>expression[expression]
1st expression is a object or an array & 2nd expression is name of desired property 

//invocation expression
syntax for calling a function or meathod

object creation expressions
it creates a new object and invokes a function(constructor) to initialize the properties of the obj
--these are prefixed with the key word "new"

//operator overview
--operators are used for (arthematic, comparison, logical, assignment.......)


--no of operators

--operand and result type


--Lvalues
expressions that appear on the left side of the assignment expression

--operator side effects


--operator precedence
the operator presedence controls the order in which the operations are performed
to change the precedence of operators, brackets are used

--operator associativity

--order of evaluation
*/

//arthemetic expressions
//--(+)operator
1 + 2            //3(addition)
"1" + "2"        //12 (concatination)
"1" + 2          //12  (concatination after num to string)
1 + {}           //1 
true + true      //2 (addition after boolean to number)
2 + null         //2
2 + undefined    //NaN 

1 + 2 + "string"   //"3 string"
1 + (2 + "string")  //"12 string"

/* unary arthemetic operators
they modify the value of a single operand to produce a new value

--unary plus(+) 
converts its operand to a number and returns the converted value

--unary minus(-)
converts its operand to a number and if necessary changes the signof the result

--increment(++)
1>pre-increment(++i)
increments operand and evaluates the incremented value of that operand
2>post-increment(i++)
increments the operand but evaluates the unincrimented value of that operand

--decrement(--)
it converts the value of the operand to a number, subracts 1, assign the value back to the operand
>pre-decrement(--i)
decrements and returns the decremented value
>post-decrement(i--)
decrements and returns the undecremented value

--bit-wise operators
perform low-level manipulation of the bits in the binary representation of numbers
bitwise AND(&)
bitwise or(|)
bitwise EXOR(^)
bitwise NOT(~)
bitwise SHIFT-LEFT(<<)
bitwise SHIFT-RIGHT(WITH SIGN)(>>)
bitwise SHIGT RIGHT (ZERO FILL)(>>>)

//relational expressions
test for relationship btw values and return true or false based on the relation btw them

--equality and inequality operators
(==)equality & (===)strict equality
both accept operands of any type, both return true if operamds are same
but the strict equality checks for completly identical
(=)---gets or is assigned
(==)---is equal to 
(===)---strictly equal to

--comparision opertors
they test the relative order of their two operands
>less than(<)
greater than(>)
less than & equal(<=)
greater than & equal(>=)

--in operator
the "in" operator expects left side operand to -is or can be converted to a string
& right side operand to -- an object
it evaluates to true if the left side value is the name of a property of the right side object

--the "instance of" opertor
in left side-- is an object
in right side -- identifies a class
evaluates if the left side object is an instance of the right side class 


//logica expressions
combine two relExp into one complex expression

--logical and(&&)
at simplest level--returns true only if both the operands are true

--logical OR (||)
if one or both of the operands are true, then it returns true

--logical NOT(!)
it is a unary operator 
it is placed before a single operand , its purpose is to invert the value of this operand


//assignment expressions

assignment with operation
(+=)
(-=)
(*=)
(/=)
(%=)
(<<=).............

//evaluation expressions
-it is a globalfunction that has the ability to interpret strings of JS source code

eval()
expects one argument
if passed anything other than a string it returns the value
for strings, it attempts to prase the string as JScode

global eval()
strict eval()

//miscellaneous operators
--conditional operators(?:)
it is a trenary operator(three operands)
ex:  x > 0 ? X : -x  //the absolute value of x
1st operand is evaluate and interpreted as boolean if it is true--second operand evaluated
other wise 3rd operand is evaluate and returned

--typeof operator
unary operator , returns a string that specifies the type of the operand

--delete operator
attempts to delete the object property or array element specified as its operand

--void operator

--comma operator+



*/
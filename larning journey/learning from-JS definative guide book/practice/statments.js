/*
statments
Js interprets and executes these statments one after anothe in the order they are written
>>conditional statments are (if , switch )
>>loop statments are (while, for)
jumps statments are (break , return, throw)

//expression statments
the simplest statments


//compound and empty statments
a statment block combines multiple statments into a single compound statment
--empty statment 
JS interpreter takes no action when executing an empty statment
the empty statment occasionally used when you want a to create a loop with no body

//declaration statments
var, functions
they declare or define functions 

//conditionals
statments execute or other statments depending on the value of a specified expression

--if
the fundamental control system that allows JS to make decision or
execute statments conditionally

--else if
an idiom which is frequemtly used when repeated if/else statments are used

--switch
the switch statments handles the situation when all of the branches depend on the value of a same expression

//loops
JS has 4 looping statments while, do/while, for, for/in

--while
basic loop
the interpreter evaluates the statments inside the while loop repreatedly
until the main expression is true
if the main expression is false it skips to outside the loop statments

--do/while 
similar to while loop, expect the loop expression is tested at the bottom 
of the loop rather than at the top
this means the body of the loop is always executed atleast once

--for 
more convinent than the while loop
follows a common pattern
most loops have a counter variable , the variable is initialized before the loop
and the variable is tested before each iteration of the loop
and then the counter variable is incremented or updated at the end of the loop body

for (initalize; test; increment)
     statment

--for/in
for (variable in object)
    statment



--jumps
make the interpreter to jump to a new location in the code

label statments 
by giving a loop a name, you cam use break or continue statements inside the body of the loop to exit the loop or to jump
directly to the top of the loop to begin the next iteration.

break
used alone causes the innermost enclosing loop or switch statement to exit immediately
legal only if it appears inside the loops


--continue
similar to break
insted of exiting a loop it restarts a loop at the next iteration
can only be used within the body of a loop
when used the current iteraiton of the loop is terminated, this means differnt for differnt loops
>for while loop--expression at the top is tested again
>do/while--execution skips to bottom of the loop, the loop condition is tested again before restartinng the loop
>for loop--increment is evaluated and test is testd again for another iteation
>for/in--loop starts over with next property name 


--return 
used within a function & specifies the value of invocations of that funnction
must appear only inside the body of a function

--throw
an exception is a signal that some sort of error has occured 
throw is a signal that such an error or exceptiona condition
to catch an error is to handle it or take action neccesary

in JS exception are thrown when a runtime error are occured 
and exceptions are caught using try/catch/finally
syntax: throw expression;

when an exception is thrown JS interpreter stops excecution and jumps to 
near exception handler 

//try/catch/finally
exception handling mechanism
try--defines the block of code whose exceptions are to be handled
catch --block of statments which are invoked when an exception occur within the try block
finally--contains cleanup code that is gurenteed to be executed regardless of what 
happens in the try block  

//miscallaneous statments

--with
used to  temporarily extend the scope chain
with (object)
     statment

this statment adds object to the front of the scope chain, executes statment and restores the scope chain
with statment is forbidden in strict mode
common uaw is to make it easier to work with deeply nested object hierarchies


//debugger
if a debugger program is available and runnig then an implementation may perform 
some kind of debugging action
acts as a breakpoint


//use strict
the purpose of thsi is to indicate that the code that follows is strict code
-with statment is not allowed
--all variables must be declared
*/
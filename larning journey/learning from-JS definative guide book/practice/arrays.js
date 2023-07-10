/*
Arrays
-ordered collection of values
-each value is calle an element
-each element has numeric position in the array called "index"
-an element may be of any type
-they are dynamic(grow and shrink as needed)

//creating arrays
-the easiest way is array literals--a comma seperated list  of array elements within square bracks
-another way to create arrays is array()constructor
>call it with no arguments
var a = new Array();

>call it with single numeric argument that specifies lenght 
var a = new Array(10);

>explicitly specify elements
var a = new Array(4,5,24,4....);

//reading and writing arrays
-to acess an element of an array use [] operator with non negative number inside it

//sparse arrays
-it is an array in which the elements do not have contiguous indexes starting at 0
-if the array is sparse the value of the lenght is greater than the no of elements

//array lenght
-when an array is dense, the lenght of the array is no of elements in the array
-when the array is sparse, the length of the array is more than the elments in the array

//adding and deleting array elements
-for adding new elements, just assign values to new indexes
-use push() meathod to add one or more values to the end of an array
-use unshift() meathod to insert a value at the begining of the array

-delete an element with "delete" operator
-you can delete an element from the end of an array just by setting the length of an array to new desired length
-use pop() meathod it reduces the length of an array by 1 and also returns the value of the deleted element
-use shift() meathod to remove an element from the begining of an array

//iterating arrays
-most common way to loop through an array is using "for" loop

//multidimesional arrays
-to access a value in array of arrays, use [] twice

//array meathods

-array.join()
converts all the elements of an array to  strings and concatenates them, returning the resulting string
you can specify a seperator to be used

-reverse()
reverses the order of the elements of an array and returns the reversed array

-sort()
sorts the elements of an array and returns the sorted array(in alphabetical arder)

-concat()
creates and return a new array that contains the elements of both arrays

-slice()
>returns the slice or subarray of the specified array
>its two args specify the start and end of the slice to be returned
>if only one arg is specified, then it returns form the start to the specified index

--splice()
>it is a general purpose meathod for inserting or removing elements form an array
>it modifies an array on which it is invoked
>using this arrays insert themselves into other arrays

--push() & pop()
--shift() and unshift()
--toString() & toLocalString()

//array mathods

--forEach()
this meathod iterates through an array invoking a function you specifiy for each element

--map()
meathod passes each element of the array on which it is invoked to the specified function
and returns an array containing the values returned by the function

--filter()
returns an array containing a subset of the element of the array on which it is invoked
the function passed to it should be predicate (a function that returns true or false)

--every() & some()
these meathods are array preadicates (they apply a predicate function specified to elements of array and return true or false)
>the every(), is like mathematical "for all": returns true if and only if your predicate function returns true for all elements in the array
>the some(), is like mathematical "there exists"
it returns if there exists at least one element in the array returns true for the predicate

--reduse & reduseRight()
they combine the elements of an array, using the function specified & produce single value
>reduce(), takes 2 args the first is a function that performs the reduction operation
2nd args is an intitial value to pass to the function
>reduceright(), works just like reduce() except that it processes the array from the highest index to lowest

--indexof() & lastIndexof()
they search an array for an element with a specified value and return the index of 
the first such element found or (-1) if none is found
>indexOf()--searches the array from beginigng to end 
>lastIndexOf()--searches the array from end to begining

//arrayType
given an unknown object, it is often useful to be able to determine 
weather it is an array or not
this is done with--array.isArray()

//array-like objects
JS arrays have some special features 
-length property is automatically updated as new elements added to list
-setting length to a smaller value truncates the array
--arrays inhert useful meathods from array.prototype()
--arrays have a class attribute of "Array"

//strings as arrays

*/
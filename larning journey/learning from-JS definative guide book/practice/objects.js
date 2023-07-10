/*
objects
-fundamental datatype
-agregates multiple values, and allows to store and retrevie those valuse
-JS objects can maintain their own propreties and also inhert the 
properties of other objects


//creatinh objects

>>>object literals
-easiest way to create an object
-it is a comma seperated list, of colon seperated name: value pairs,  enclosed within curly brackets
--it is an expression that creates and initializes a new and distinct obj each time it is evaluated

>>"new" meathod
-creates and initializes a new object
--must be followed by a function invocation
--the function used this way is called constructor

>>prototypes 
--every JS object has a second JS object with in , called as prototye 
--first obj inhert properties of prototype 
--is is refered using keyword "object.proptotype"
--ex: object.array()  uses array.prototype

>>object.create()
--creates a new object


//querying and setting properties
to obtain the value of a property 
>use dot(.)
the right hand must be a simple identifier name of property
>square bracs ([])
the value within the brackets must be an expression that evaluates to a string of property name

-objects as assosiative arrays


--inheritance
>"inherit()" function is used to create objects with specified prototypes
>inhertance occurs when querying properties but not when setting them & this is
key feature of JS as it allows us to selectively override inherited properties

--property access errors


--deleting properties
>delete operator removes a property from an object
>but the delete operator only deletes own properties but not inherited ones
>to delete an inherited property you must delete it from the prototype object it is defined in
     
--testing properties
>to check whether an object has a property with a given name
1. hasOwnProperty()--tests whether that object has an own property withthe given name
and returns false foe inherited properties

2. propertyIsEnumerable()--it returns true only if the named property is an own property ans its 
"enumerable" attribute is true 

--enumerating properties
>insted of testing for the existance of individual properties 
we sometimes want to iterate through or obtain a list of the ptoperties of an object
>>the for/in loop does this as it runs the bofy of the loop once for each
enumerable property of the specified object assigning the name of the property 
to the loop variable

>in addition to for/in loops two otherfunctions are also used
1.  "object.keys()"--returns the names of the enumerable own properties of an object
it works like keys()
2. objects.getOwnPropertyNames()--retuen names of all of the own properties 
of the specified objects not just enumerable objects

property getters and setters
>object property is a name, value and a set of attributes 
and these values may be replaced by one or two meathods(getter, setter)
>these are accesor properties

>when a program queries he value of an accessor property JS invokes "getter meathod"
the return value of this meathod becomes the value of the property access expression

>when the program sets the values of an accessor property JS invokes "setter meathod"
this meathod is responsible for setting the property value
the return value is ignored 

--property attributes
>in addtion to name and value, properties have attributes
these specify weather they can be written, enumerated and configured 
these cannot be written or changed 
>a property has name and 4 attributes(value, writable, enumerable, configurable)
>to obtain the property discriptor for a named property of a specified object 
object.getOwnPropertyDescriptor()

> to set the attributes of a property or to create a new property with specified attributes
object.defineProperty()

--legacy API for getters and setters
>most JS implementations support obj literal "get" & "set" 
these implementations suppoet a non standard legacy API foe queryong and setting getters and setters
these API consist of 4meathods 
(these names have double underscore to show they are non standerd meathods)
__loopupGetter__()
__lookupSetter__()
__defineGetter__()
__defineSetter__()


//object attributes
--every object has 
associated prototype
class
extnesible attributes

--ptortotype attribute
>specifies the object which it inherts properties from

--the class attribute
>it is a string that provides information obout the type of the object


--the extensible attribute
>specifies wheather a new ptopertie can be added to the object or not
>to  detemine weather the object is extensible--object.isExtensible()
>to make an object non extensible -- object.preventExtensions()
>object.seal()--makes the object non extensibel and also makes all of the own properties of that object non configurable
>object.isSealed()--to determine the object is sealed or not
>object.freeze()--locks objects down more tightly, and also makes the object properties read only

--seializing objects
>converting an object state to a string from which it can be later restored
>this can be done using 
-JSON.stringify()
-JSON.parse()
(JSON= JAVASCRIPT object notation)
these functions use JASON data interchange format


//object meathods

-the toString() meathod

-the toLocalString() mathod
return a localized string representation  of the object

-the toJASON() meathod

-the valueOf() meathod

*/
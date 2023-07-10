/*
classes
it is a way of writing modular, reusable code,

classes and prototypes
--a class is a set of objects that inhert properties from the same prototype object
this prototype object is the central feature of a class

for example
*/

//this is a factory function that returns a new range object
function range(from, to) {
    /*use the inherit() function to creatte an object that inherits from the
    prototype object defined below. the prototype object  is stored as a
    property  of this function, and defines the shared meathods 
    fo all range of objects*/
    var r =  inherit(range.meathods);
    //store the start and end of this new range object
    r.from = from;
    r.to = to;
    //finally return the new object
    return r;
}

//this prototype object defines meathods inherited by all range objects
range.meathods = {
    //return true if x is in the range false otherwise
    includes: function(x) {
        return this.from <= x && x <= this.to; 
    },
    foreach: function(f) {
        for (var x = Math.ceil(thsi.from); x <= this.to; x++ ) f(x);
    },
    toString: function() { return "(" + thsi.form + "....." + this.to + ")"; }
};

var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);

//classes and constructors
/*
--all objects created with the same constructor inherit from the same object 
and are therefore members of the same class
--constructors invoked with new keyword does not hace to call inherit to create a new object
--constructor as given names starting  with capital letters, to keep them different from other regular functions
*/

//constructors and class identity
/*
--prototype objects are fundamental to the identity of a class
--the constructors serve as public face of a class & more obvuously the name of the constructor is used as the name of the class
*/

//the constructor property


//java style classes in JS


//augmenting calsses
/*
an object inherits propertues form its prototype even if the prototype
changes after the object is creaated this means that we can augment JS classes simply by adding new meathods
to their prototype objects
*/
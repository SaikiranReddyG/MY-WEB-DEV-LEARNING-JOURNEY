/*
object-oriented programming is a way to to design
and write programs so that all of the programs 
important parts are  represented by objects
*/

/*
adding meathods to objects 
when you save a function as a property in an object 
that property is called a meathod
*/


/*
""this"" key word
you can use ""this"" keyword inside a meathod 
to refer to the object on which the meathod is 
currently being called
this keyword makes meathods more versetile 
allowing you to add the same meathod to a multiple objs
it is currently being called on
*/
var dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true
   };

dog.bark = function () {
    console.log('woof woof! my name is ' + this.name + "!!!");
};

dog.bark();

//sharing a meathod btw multiple objs
var speak = function () {
    console.log(this.sound + "!my name is " + this.name + "!");
};

var cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
   };

cat.speak();

/*
when we call cat.speak meathod, it retrevies two properties from
the cat obj >>this.sound and this.name
*/

var pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak
   };
   var horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
   };

pig.speak();
horse.speak();

/*
to share meathods btw multiple objs you can simply add them to each
obj
but if  you have lots of meathods or objs adding them individually
becomes annoying
 */

//creating objects using constructures
/*
a java script constructior is a function that creates objects 
and gives them a set of built in properties and meathods 
something, like a specilized machine for creating objects 
like, once you have set up a constructor you can use it to 
make as many as same objs as you want
 */
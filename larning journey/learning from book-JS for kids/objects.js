/* objects in JS are similar to arrays but objects use strings
insted of numbers to access the different elements
these strings have keys and values 
together these keys and values form key valule pairs
these pairs used to represent single things with multiple charecters
*/
//acessing values in objects
var cat = { legs: 3, names: "Harmony", color: "Tortoiseshell" };

console.log(cat["names"]);
console.log(cat.names); //this style is called dot notation

//adding values to objects
cat.sound= 'meow_meow'
console.log(cat);

//combining arrays and objects
var dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
   ] //you can only use dot notations in objects not on arrays

   //array of friends
var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];

console.log(friends[1]);
console.log(friends[0].luckyNumbers[1]);

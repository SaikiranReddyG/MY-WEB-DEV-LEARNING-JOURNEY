/*a function is a way to bundle code
 so that it can be used again
 they allow us to run the same peice of code
 from multiple places in the program without 
 having to copy paste the code repeatedly   
 it helps in splitting up your code and
 managable*/
 //simple function
 var first_function = function() {
    console.log("Hello world!!!!");
 };

 first_function();

 //passing arguments to a function
 var say_hello = function(name) {
    console.log("hello  " + name + "!!!!!!!");
 };

 say_hello("saikiran");

 //cat faces
 var cat_faces = function(times) {
    for (var i = 0; i < times; i++) {
        console.log(i + "=^.^=");
    }
 };

 cat_faces(5);

 //multiple arguments to a function
 var multiple_times = function(timess, what_to_draw) {
    for (var i = 0; i < timess; i++) {
        console.log(i + " " + what_to_draw)
    }
 };

 multiple_times(5, "$$$$$");


 //returning values from functions
 var double = function(number) {
    return number * 2;
 };

console.log(double(2));
console.log(double(2) + double(9));
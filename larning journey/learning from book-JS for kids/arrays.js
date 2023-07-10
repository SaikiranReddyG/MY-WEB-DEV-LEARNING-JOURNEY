var dinosaurs = [
    "T-Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Pteranodon",
    "Apatosaurus",
    "Diplodocus",
    "Compsognathus"
   ];

//accessing arrays
console.log(dinosaurs[0]);
console.log(dinosaurs[3]);

//setting or changing arrays
dinosaurs[0] = "saikiran";
console.log(dinosaurs);

dinosaurs[33] = "reddy";
console.log(dinosaurs);

//mixing datatypes in a array
var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
console.log(dinosaursAndNumbers[2]);
console.log(dinosaursAndNumbers[2][0]);


//working with arrays 
//finding the length of an array
console.log(dinosaurs.length);
//adding elements to an array
dinosaurs.push("cat")
console.log(dinosaurs);
//removing elements from an array
dinosaurs.pop()
console.log(dinosaurs);

//remove and return first element of an array 
var first_dinosour = dinosaurs.shift();
console.log(first_dinosour);

//adding arrays
var total_dinosours = dinosaurs.concat(dinosaursAndNumbers);
console.log(total_dinosours);


//finding the index of an elemnt in an array
console.log(dinosaurs.indexOf("reddy"));

//turning an array into an array
console.log(dinosaurs.join());
console.log(dinosaurs.join("$"));



//project -- to find a way home
var landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");
//going in reverse using pop
console.log(landmarks);

console.log(landmarks.pop());
console.log(landmarks.pop());   
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());
console.log(landmarks.pop());

//decisoin maker
var phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's a great idea",
    "Maybe not today?",
    "Computer says no."
   ];

//should i have another milkshake??
console.log(phrases[Math.floor(Math.random() * 5)]);



//random insult generator
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//pick a random body part
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
//pick a random adjective 
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
//pick a random word
var randomWord = randomWords[Math.floor(Math.random() * 3)];
//join all the random strings to a sentence
var random_insult = "your " + randomBodyPart + " is like a" + randomAdjective + " " + randomWord + "!!!!!!!!!";
console.log(random_insult);98


//extending
var animal = ['cat', 'dog', 'donkey', 'elephant', 'cow']
var random_animal = animal[Math.floor(Math.random() * 5)]
var large_random_inslult = "your " + randomBodyPart + " is more " + randomAdjective + ' than a ' + random_animal + ' ' +  randomBodyPart;
console.log(large_random_inslult);
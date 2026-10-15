
//temprature converter 
let c = 100;
let f= (c * 9/5) + 32;
console.log(f);

//simple profile Generator
let name = "Rishabh Barnwal";
let age = 20;
let occupation = "Software Engineer";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Occupation: " + occupation);

//Traffic Light Simulation
let trafficLight = "yellow";

if (trafficLight == "red") {
    console.log("Stop");
} else if (trafficLight == "yellow") {
    console.log("Get Ready");
} else if (trafficLight == "green") {
    console.log("Go");
} else {
    console.log("Invalid traffic light color");
}

//FizzBuzz Basic
    let i = 15;
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }



//Multiple by 5
for(let i  = 1; i<51; i++){
    if(i%5==0){
        console.log(i);
    }    
}

//Factorial Calculator
let num = 5;
let fac = 1;
let n = 1;
while (n <= num) {
    fac *= n;
    n++;
}
console.log(fac);




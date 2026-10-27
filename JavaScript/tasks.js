
1.//temprature converter 
let c = 100;
let f= (c * 9/5) + 32;
console.log(f);

2.//simple profile Generator
let name = "Rishabh Barnwal";
let age = 20;
let occupation = "Software Engineer";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Occupation: " + occupation);

3.//Traffic Light Simulation
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

4.//FizzBuzz Basic
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



5.//Multiple by 5
for(let i  = 1; i<51; i++){
    if(i%5==0){
        console.log(i);
    }    
}

6.//Factorial Calculator
let num = 5;
let fac = 1;
let n = 1;
while (n <= num) {
    fac *= n;
    n++;
}
console.log(fac);

7.//Area of Rectangle
let length = 10;
let width = 5;
let area = length * width;
console.log(area);

8.//plalindrome checker
let str = "racecar";
let reversedStr = str.split("").reverse().join("");
if (str === reversedStr) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}

9.//High School Grader
let t = [85, 90, 78, 92, 88];
function calcAvg(t) {
    let total = t.reduce((sum, t) => sum+t, 0);
    return total/t.length;
}
let avgscore = calcAvg(t);
console.log("Avg Score "+ avgscore);

10.// Even Number Filter

let numb = [85, 79, 56, 32, 45, 67, 59, 46, 76, 34];
function even(numb) {
    let filter = numb.filter(n => n % 2 == 0);
    return filter;
}
let evennum = even(numb);
console.log("even "+ evennum);

11.//shopping cart total
function shoppingcart(cart){
    let total = cart.reduce((sum, item) => sum + item, 0);
    return total;
}
console.log("Total: " + shoppingcart([10, 20, 30, 40, 50]));

12.//book inventory 
let book = {
    title: "october Junction",
    author: "Rishabh Barnwal",
    isRead: false
};

if (book.isRead) {
    console.log(`You have read ${book.title} by ${book.author}.`);
} else {
    console.log(`You have not read ${book.title} by ${book.author}.`);
}

13.//object array finder
let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    { title: "To Kill a Mockingbird", author: "Harper Lee"},
    { title: "1984", author: "George Orwell" }
];
let foundBook = books.find(book => book.author === "Harper Lee");
if (foundBook) {
    console.log(`Found book: ${foundBook.title} by ${foundBook.author}`);
} else {
    console.log("Book not found");
}

14.//random dice roller
let dice = Math.floor(Math.random() * 6) + 1;
console.log("You rolled a " + dice);

15.//vowel counter: write a fun that loop through a string and counts the number of vowels in it.
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
let inputString = "Hello World";
console.log("Number of vowels in '" + inputString + "': " + countVowels(inputString));
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//map
let newArr = arr.map(n => n * n);
console.log(newArr);

//filter
let filteredArr = arr.filter(n => n % 2 == 0);
console.log(filteredArr);

//reduce
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

//find
let foundNum = arr.find(n => n > 3);
console.log(foundNum);

//forEach
arr.forEach(n => console.log(n));

//some
let hasEven = arr.some(n => n % 2 === 0);
console.log(hasEven);

//every
let allPositive = arr.every(n => n > 0);
console.log(allPositive);

//sort
let sortedArr = arr.sort((a, b) => b - a);
console.log(sortedArr);

//reverse
let reversedArr = arr.reverse();
console.log(reversedArr);

//sum
let total = arr.reduce((acc, num) => acc + num, 0);
console.log(total);

//average
let average = total / arr.length;
console.log(average);
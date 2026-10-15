let arr = [1, 2, 3, 4, 5];
console.log(arr);

//map
let newArr = arr.map(num => num * num);
console.log(newArr);

//filter
let filteredArr = arr.filter(num => num % 2 === 0);
console.log(filteredArr);

//reduce
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

//find
let foundNum = arr.find(num => num > 3);
console.log(foundNum);

//forEach
arr.forEach(num => console.log(num));

//some
let hasEven = arr.some(num => num % 2 === 0);
console.log(hasEven);

//every
let allPositive = arr.every(num => num > 0);
console.log(allPositive);

//sort
let sortedArr = arr.sort((a, b) => b - a);
console.log(sortedArr);

//reverse
let reversedArr = arr.reverse();
console.log(reversedArr);
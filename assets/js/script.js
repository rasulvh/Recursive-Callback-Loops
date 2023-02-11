//Task1

// let user1={
//     name:"Rasul",
//     surname: "Hasanov",
//     age: 15
// }

// let user2={
//     name:"Eli",
//     surname: "Veliyev",
//     age: 19
// }

// let user3={
//     name:"Ugur",
//     surname: "Quliyev",
//     age: 21
// }

// let user4={
//     name:"Eli",
//     surname: "Huseynov",
//     age: 37
// }

// let user5={
//     name:"Emil",
//     surname: "Allahverdili",
//     age: 25
// }

// let users = [user1,user2,user3,user4,user5]

// function usersBiggerThanTwenty(arr){
//     let date =  new Date().getFullYear();
//     let filteredUsers=arr.filter(m=>m.age>20)

//     for(let i=0;i<filteredUsers.length;i++){
//         console.log(`Ad: ${filteredUsers[i].name} Soyad: ${filteredUsers[i].surname} Dogum Tarix: ${date - filteredUsers[i].age}`);
//     }
// }

// usersBiggerThanTwenty(users);

//Practice

// function getCount(num) {
//   console.log(num);

//   if (num > 1) {
//     getCount(num - 1);
//   }
// }

// getCount(5);

// function getSumOfNumbers(num) {
//   if (num == 1) {
//     return num;
//   } else {
//     return num + getSumOfNumbers(num - 1);
//   }
// }

// console.log(getSumOfNumbers(5));

// function getFactorial(num) {
//     if (num == 1) {
//       return num;
//     } else {
//       return num*getFactorial(num - 1);
//     }
//   }

//   console.log(getFactorial(5));

// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach((element, index) => {
// //   console.log(`Index: ${index}, Element: ${element}`);

//     numbers[index] = element*2
// });

// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 6];

// for (const item of numbers) {
//     console.log(item);
// }

// let user = {
//     name: "Rasul",
//     surname: "Hasanov",
//     age: 15
// }

// for (const key in user) {
//     console.log(key+"/"+user[key]);
// }

// let user1 = {
//   name: "Rasul",
//   surname: "Hasanov",
//   age: 15,
//   email: "rasul@gmail.com",
// };

// let user2 = {
//   name: "Eli",
//   surname: "Veliyev",
//   age: 27,
//   email: "eli@gmail.com",
// };

// let user3 = {
//   name: "Ugur",
//   surname: "Quliyev",
//   age: 21,
//   email: "ugur@gmail.com",
// };

// let users = [user1, user2, user3];

// for (const item of users) {
//   for (const key in item) {
//     console.log(key + "/" + item[key]);
//   }
// }

// users.forEach((element, index) => {
//   for (const key in element) {
//     console.log(key + "/" + element[key] + "/" + index);
//   }
// });

// let nums = [1,2,3,4,5,6,7,8,9]

// let copyArr = [...nums]

// console.log(copyArr);

// let result = nums.map(m=>{
//     return m*2;
// })

// console.log(nums);
// console.log(result)

// function getNumbers(...arr){
//     for (const item of arr) {
//         console.log(item);
//     }
// }

// getNumbers(1,2,3,4,5)

// const showMeanAge = (arr) => {
//   sumOfAge = 0;

//   for (const item of arr) {
//     sumOfAge += item.age;
//   }

//   return sumOfAge / arr.length;
// };

// console.log(showMeanAge(users));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const checkOdd = (num) => num % 2 == 1;
// const checkEven = (num) => num % 2 == 0;
// const checkGreaterThanFive = (num) => num > 5;

// function sumOfNumsByCondition(arr, callback) {
//   let sum = 0;

//   for (const item of arr) {
//     if (callback(item)) {
//       sum += item;
//     }
//   }

//   return sum;
// }

// let result1 = sumOfNumsByCondition(numbers, checkOdd);
// let result2 = sumOfNumsByCondition(numbers, checkEven);
// let result3 = sumOfNumsByCondition(numbers, checkGreaterThanFive);

// console.log(result1);
// console.log(result2);
// console.log(result3);

// function checkAge(item) {
//   return item.age > 18;
// }

// function checkName(item) {
//   return item.name == "Rasul";
// }

// function checkEmail(item) {
//   for (let i = 0; i < item.email.length; i++) {
//     if (item.email[i] == "r") {
//       return true;
//     }
//   }

//   return false;
// }

// function getDatasByFilter(users, callback) {
//   for (const item of users) {
//     if (callback(item)) {
//       console.log(`${item.name} ${item.surname}`);
//     }
//   }
// }

// getDatasByFilter(users, checkAge);

// getDatasByFilter(users, (m) => m.age > 20);

// getDatasByFilter(users, checkName);

// getDatasByFilter(users, (m) => m.name == "Rasul");

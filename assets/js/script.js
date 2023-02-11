// function Factorial(num){
//     if(num==1){
//         return 1;
//     }
//     else{
//         return num*Factorial(num-1)
//     }
// }

// console.log(Factorial(3));



// let stu1={
//     name:"Rasul",
//     surname: "Hasanov",
//     age: 15
// }

// let stu2={
//     name:"Eli",
//     surname: "Veliyev",
//     age: 20
// }

// let stu3={
//     name:"Ugur",
//     surname: "Quliyev",
//     age: 32
// }

// let stu4={
//     name:"Eli",
//     surname: "Huseynov",
//     age: 37
// }

// let stu5={
//     name:"Emil",
//     surname: "Allahverdili",
//     age: 25
// }

// let students = [stu1,stu2,stu3,stu4,stu5]

// function meanAge(arr){
//     let ageSum=0;

//     for (const item of arr) {
//         for (const key in item) {
//             if (key=="age") {
//                 ageSum+=item[key]
//             }
//         }
//     }
    
//     console.log(ageSum/arr.length);
// }

// meanAge(students)



let user1={
    name:"Rasul",
    surname: "Hasanov",
    age: 15
}

let user2={
    name:"Eli",
    surname: "Veliyev",
    age: 19
}

let user3={
    name:"Ugur",
    surname: "Quliyev",
    age: 21
}

let user4={
    name:"Eli",
    surname: "Huseynov",
    age: 37
}

let user5={
    name:"Emil",
    surname: "Allahverdili",
    age: 25
}


let users = [user1,user2,user3,user4,user5]

function usersBiggerThanTwenty(arr){
    let date =  new Date().getFullYear();
    let filteredUsers=arr.filter(m=>m.age>20)

    for(let i=0;i<filteredUsers.length;i++){
        console.log(`Ad: ${filteredUsers[i].name} Soyad: ${filteredUsers[i].surname} Dogum Tarix: ${date - filteredUsers[i].age}`);
    }
}

usersBiggerThanTwenty(users);
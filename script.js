// function num2(a) {
//     if (a > 0) {
//         return "positive"
//     } else if (a < 0) {
//         return "negative"
//     }
//     return "equal"
// }
//
// console.log(num2(2))
// console.log(num2(-2))
// console.log(num2(0))


// function a(number) {
//     if (number % 2 === 0) {
//         return "Четное число"
//     }
//     return "Нечетное число"
// }
//
// console.log(a(24))
// console.log(a(27))


// function divide(a, b) {
//     if (a % b === 0) {
//         return "delitsya"
//     }
//     return "ne delitsya"
// }
//
// console.log(divide(10, 9))
// console.log(divide(10, 2))


// function task6(s) {
//     if (typeof s === "string") {
//         return "String"
//     } else if (typeof s === "number") {
//         return "Number"
//     } else if (typeof s === "boolean") {
//         return "Boolean"
//     }
// }
//
// console.log(task6(14))
// console.log(task6(true))
// console.log(task6("Hello!"))


// function num3(a) {
//     if (a > 1 && a < 99) {
//         return "Верно"
//     }
//     return "Неверно"
// }
//
// console.log(num3(76))
// console.log(num3(0))
// console.log(num3(100))


// function num4(a) {
//     if (a === 3 || a === 7) {
//         return a + 7
//     }
//     return a / 10
// }
//
// console.log(num4(3))
// console.log(num4(9))
// console.log(num4(7))
// console.log(num4(0))


// function num5(a, b) {
//     if (a <= 0 && b >= 5) {
//         return a + b
//     }
//     return a - b
// }
//
// console.log(num5(-2, 8))
// console.log(num5(0, 5))
// console.log(num5(1, 4))


// function num6(a, b) {
//     if (a > 7 && a < 12 || b >= 7 && b < 27) {
//         return "Верно"
//     }
//     return "Неверно"
// }
//
// console.log(num6(8, 20))
// console.log(num6(5, 15))


// function season(month) {
//     if (month === 1 || month === 2 || month === 12) {
//         return "Winter"
//     } else if (month >= 3 && month <= 5) {
//         return "Spring"
//     } else if (month >= 6 && month <= 8) {
//         return "Summer"
//     } else if (month >= 9 && month <= 11) {
//         return "Autumn"
//     }
// }
//
// console.log(season(1))
// console.log(season(2))
// console.log(season(3))
// console.log(season(4))
// console.log(season(5))
// console.log(season(6))
// console.log(season(7))
// console.log(season(8))
// console.log(season(9))
// console.log(season(10))
// console.log(season(11))
// console.log(season(12))


// function decade(day) {
//     if (day >= 1 && day <= 10) {
//         return "First decade"
//     } else if (day >= 11 && day <= 20) {
//         return "Second decade"
//     } else if (day >= 21 && day <= 31) {
//         return "Third decade"
//     }
// }
//
// console.log(decade(2))
// console.log(decade(12))
// console.log(decade(22))


// function num7(a) {
//     if (a.toString()[0] === "1" || a.toString()[0] === "2" || a.toString()[0] === "3") {
//         return "DA"
//     }
//     return "NET"
// }
//
// console.log(num7(1))
// console.log(num7(2))
// console.log(num7(3))
// console.log(num7(8))


// function num8(age) {
//     if (age === 1 || age % 10 === 1) {
//         return `Мне ${age} год`
//     } else if (age >= 10 && age <= 20) {
//         return `Мне ${age} лет`
//     } else if (age % 10 >= 2 && age % 10 <= 4) {
//         return `Мне ${age} года`
//     }
//     return `Мне ${age} лет`
// }
//
// console.log(num8(2))
// console.log(num8(31))
// console.log(num8(23))
// console.log(num8(25))
// console.log(num8(1))
// console.log(num8(12))
// console.log(num8(32))


// function num9(time) {
//     if (time >= 0 && time <= 15) {
//         return "Первая четверть"
//     } else if (time >= 15 && time <= 30) {
//         return "Вторая четверть"
//     } else if (time >= 30 && time <= 45) {
//         return "Третья четверть"
//     } else if (time >= 45 && time <= 60) {
//         return "Четвертая четверть"
//     }
//     return "Неверное число"
// }
//
// console.log(num9(0))
// console.log(num9(15))
// console.log(num9(30))
// console.log(num9(45))
// console.log(num9(60))
// console.log(num9(61))
// console.log(num9(-3))


// function string(str) {
//     return str.split(" ")[0].length
// }
//
// console.log(string("lorem ipsum dolor sit amet"))
// console.log(string("bonjorno amigos"))


// function string2(str) {
//     return str.split(" ")[1].toLowerCase()
// }
//
// console.log(string2("bonjorno AmIgOs"))


// function string3(str) {
//     return str.split(" ")[0].toUpperCase()
// }
//
// console.log(string3("bonjorno amigos"))


// function string4(str) {
//     return str.split("")
// }
//
// console.log(string4("bonjorno amigos lorem ipsum dolor sit amet"))


// function string5(str) {
//     return str.split(" ")
// }
//
// console.log(string5("lorem ipsum dolor sit amet"))


// function task21(str) {
//     return str.slice(2, 6)
// }
//
// console.log(task21("loremjgjkh ipsum dolor sit amet"))


// function task22(str) {
//     return str.charAt(str.length - 1)
// }
//
// console.log(task22("lorem ipsum dolor sit amet"))


// function concat(str, str2) {
//     return str.concat(str2)
// }
//
// console.log(concat("строка", "строка"))


// function task24(str) {
//     let array = str.split(' ')[1]
//     return str.indexOf(array)
// }
//
// console.log(task24("lorem ipsum dolor"))


// function task25(str) {
//     if (str.includes("a") >= 1) {
//         return "встречается более 1 раза"
//     }
//     return "встречается менее одного раза"
// }
//
// console.log(task25("Maleficent"))
// console.log(task25("Aurora"))
// console.log(task25("Elsa"))
// console.log(task25("Anastasia"))
// console.log(task25("Egor"))


// function task26(str) {
//     return str.lastIndexOf("a")
// }
//
// console.log(task26("Aurora"))
// console.log(task26("Elsa"))
// console.log(task26("Anastasia"))
// console.log(task26("Egor"))


// function isPrime(num) {
//     if (num < 2) {
//         return false
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0){
//             return false
//         }
//     }
//     return true
// }
//
// console.log(isPrime(73))


// function anagrams(word, words){
//     return words.filter(function(e){
//        return e.split("").sort().join("")=== word.split("").sort().join("")
//     })
// }
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))


// function solution(number){
//     let sum = 0
// for (let i = 1; i < number; i++){
//     if (0 === i % 3  || 0 === i % 5){
//         sum += i
//     }
// }
// return sum
// }
// console.log(solution(15))


// function digital_root(n) {
//     if (n < 10){
//        return n
//     }
//      return digital_root(String(n).split("").reduce((acc, item) => acc + +item, 0))
// }
//
// console.log(digital_root(181))


// function duplicateCount(text){
//     return (text.toLowerCase().split("").sort().join("").match(/([^])\1+/g) || []).length
// }
//
// console.log(duplicateCount("aabbcde"))


// function findOdd(A) {
//     return A.find(item => A.filter(el  => el === item).length % 2)
// }
// console.log(findOdd([3,35,6,7,4,3,73,4,6,4, 35, 35]))


// function task27(str) {
//     return str.indexOf("о")
// }
//
// console.log(task27("Потап"))
// console.log(task27("Аврора"))
// console.log(task27("Иоганн"))
// console.log(task27("озеро"))
// console.log(task27("Егор"))


// function task28(str) {
//     let substr1 = str.substr(2, 5)
//     return substr1
// }
//
// function task28_1(str) {
//     let substring1 = str.substring(2, 7)
//     return substring1
// }
//
// function task28_2(str) {
//     let slice1 = str.slice(2, 7)
//     return slice1
// }
//
// console.log(task28("seveniybgg divide seven"))
// console.log(task28_1("seveniybgg divide seven"))
// console.log(task28_2("seveniybgg divide seven"))
// console.log(task28("Hellhbkjno, how are you?"))
// console.log(task28_1("Hellhbkjno, how are you?"))
// console.log(task28_2("Hellhbkjno, how are you?"))
// console.log(task28("sevenhbkug plus eight"))
// console.log(task28_1("sevenhbkug plus eight"))
// console.log(task28_2("sevenhbkug plus eight"))


// function task29(str) {
//     return str.replace(/-/g, "/")
// }
//
// console.log(task29("17-02-2021"))


// function task30(str) {
//     return str.includes("л") ? "Да" : "Нет"
// }
//
// console.log(task30("Максимально ужасно"))
// console.log(task30("Как ты поживаешь?"))


// function task31(str) {
//     return str[0] === str[str.length - 1] ? "Совпадает" : "Не совпадает"
// }
//
// console.log(task31("Максимально ужасно, переделывай"))
// console.log(task31("Apkosjf jngdnjnvjaA"))


// function task32(today, birthday) {
//     return today === birthday ? "Happy Birthday!" : "Not Today!"
// }
//
// console.log(task32(7, 1))
// console.log(task32(1, 1))


// function task33(age) {
//     return age < 18 ? "вы должны быть старше 18" : age > 18 ? "добро пожаловать!" : "не разрешено!"
// }
//
// console.log(task33(12))
// console.log(task33(18))
// console.log(task33(20))


// function task34(light) {
//     return light === "green" ? "можете ехать" : light === "yellow" ? "немного подождите" : light === "red" ? "остановитесь" : "неизвестно"
// }
//
// console.log(task34("green"))
// console.log(task34("red"))
// console.log(task34("yellow"))
// console.log(task34("blue"))


// function task35(str) {
//     return +(str[0]) + +(str[1]) + +(str[2])
//
// }
//
// console.log(task35('617'))
// console.log(task35('456'))
// console.log(task35('123'))


// let value = [NaN, 0, 77, false, -17, '',undefined, 99, null]
// let result = value.filter(item => item)
// console.log(result)
//
// const task11 = num => {
//     return num.filter(item => item)
// }
// console.log(task11([NaN, 0, 77, false, -17, '',undefined, 99, null]))
//


// let array = ['Бегимай', 'Баяман', 'Калмамат']
// let result = array.map(item => item.length)
// console.log(result)
//
// let array1 = ['Баяман', 'Калмамат']
// let name1 = array1[0].replace("Б", "К")
// let name2 = array1[1].replace("К", "Б")
// let array2 = [name1, name2]
// console.log(array2)
//
// let array = ['Баяман', 'Калмамат']
// let name1 = array[0]
// let name2 = array[1]
// console.log(`${name1[0]}${name2.substr(1)} ` + `${name2[0]}${name1.substr(1)}`)


// const task12 = array => {
//     let name1 = array[1][0] + array[0].slice(1)
//     let name2 = array[0][0] + array[1].slice(1)
//     return [name1, name2]
// }
// console.log(task12(['Баяман', 'Калмамат']))


// let dollars =  [1, 65, 13 , 30, 100]
// let soms = dollars.map(item => item * 84.9)
// console.log(soms)
//
// const task13 = num =>{
//     return num.map(item => item * 84.9)
// }
// console.log(task13( [1, 65, 13 , 30, 100] ))


// const task14 = name =>{
//     return name .map(item=>item[0].toUpperCase() + item.substr(1).toLowerCase())
// }
// console.log(task14(['асКар', 'бЯяман', 'калМмамат']))


// const task15 = name => {
//     return name.map((item, idx)=>{
//         return `${idx + 1}.${item}`
//     })
// }
// console.log(task15( ['Оскар', 'Баяман', 'Калмамат']))

// let example = ['Misha', 'Kolya']
// console.log(example[0]) //Misha
// console.log(example[1]) //Kolya
// console.log(example[0][0]) //M
// console.log(example[1][0]) //K


// const task1 = array => {
//     return array.reduce((acc, item) => {
//         return acc + item
//     }, 0)
// }
// console.log(task1( [5,15,315,2,13,20,9]))


// const task2 = array => {
//     return array.reduce((acc, item) => {
//         return item % 2 === 0 ? acc + item : acc
//     }, 0)
// }
// console.log(task2([7, 4, 8, 9, 11]))
// console.log(task2([5, 12, 314, 2, 13, 20, 9]))


// const task3 = array => {
//     return array.reduce((acc, item) => {
//         return item > 10 ? acc + item : acc
//     }, 0)
// }
// console.log(task3([5,15,315,2,13,20,9]))


// const task4 = array => {
//     return array.reduce((acc,item) => {
//         return item > 10 ?  acc - item : acc
//     }, 0)
// }
// console.log(task4([3,13,54,15,335, 39]))


// const task5 = (array) => {
//     return array.reduce((acc, item) => acc + item, "").length
// }
// console.log(task5( ['Аскар', 'Баяман', 'Калмамат']))


// const task5 = (array) => {
//     return array.reduce((acc, item) => acc + item.length, 0)
// }
// console.log(task5( ['Аскар', 'Баяман', 'Калмамат']))


// const task6 = (array) => {
//     return array.map(item => item.toUpperCase())
// }
// console.log(task6(['Аскар', 'Баяман', 'Калмамат']))


// const task7 = array => {
//     return array.map((item, idx) => {
//        return  idx % 2 === 1 ? item.toUpperCase() : item
//     })
// }
// console.log(task7(['Аскар', 'Баяман', 'Калмамат']))
// console.log(task7(['Аскар', 'Баяман', 'Калмамат', 'Тилек']))


// const task9 = array => {
//     return array.map( item => item[0].toUpperCase() + item.slice(1).toLowerCase())
// }
// console.log(task9(['асКар', 'бЯяман', 'калМмамат']))


// const task11 = array => {
//     return array.reduce( (acc, item) =>{
//         if (typeof item === typeof array[0] ) {
//             return acc && true
//         }
//         return  acc && false
//     }, true)
// }
// console.log(task11( [true, '1234', 325]))
// console.log(task11( [265, 265, 325]))
// console.log(task11( [true, " ", true, true]))
// console.log(task11( ['1234', '1234', 566,  '1234']))


// const task12 = testing =>{
//     if ( testing.length % 2 === 0){
//         return testing.substr(testing.length/ 2 - 1, 2)
//     }
//     return testing.substr(Math.floor(testing.length / 2), 1)
// }
// console.log(task12('testing'))
// console.log(task12('Нечётная'))


// const task13 = array =>{
//     return array.reduce((acc, item) => {
//        return  item > 0 ? acc + item : acc
//     }, 0)
// }
// console.log(task13( [5, -3, 13, -7, 45]))


// const task14 = array => {
//     return array.reduce((acc, item)=> {
//         return item < -10 ? acc + item : acc
//     }, 0)
// }
// console.log(task14([5, -54, 13, -7, 45, -15, -34]))


// const task15 = array =>{
//     return array.map(item => {
//         return item * 100
//     })
// }
// console.log(task15([88, 5, 3 , 210, 99]))


// const task17 = array =>{
//     return array.map((item, idx) => {
//         return `${idx + 1}.${item}`
//     })
// }
// console.log(task17(['apple', 'banana', 'potato']))
// console.log(task17(['pineapple', 'peach', 'mango']))


// const task20 = array => {
//     return array.reduce((acc, item) => acc + item / array.length, 0 )
// }
// console.log(task20([5,15,315,2,13,20,9]))


// function rentalCarCost(d) {
//     let perDay = 40
//     let cost = perDay * d
//     return +d.toString().split(" ").map(item => item >= 7 ? cost - 50 : item >= 3 ? cost - 20 : cost)
// }
//
// console.log(rentalCarCost(8))
// console.log(rentalCarCost(2))
// console.log(rentalCarCost(3))
// console.log(rentalCarCost(7))
// console.log(rentalCarCost(1))
//
// const getMiddle = str => str.length % 2 === 0 ? str.substr( str.length/2 - 1, 2 ) : str.substr(str.length/2, 1)
// console.log(getMiddle("testing"))
// console.log(getMiddle("Нечётная"))
// console.log(getMiddle("Улан"))
// console.log(getMiddle("Alikhan"))
// console.log(getMiddle("Тимурлан"))


// const countWords = (str) => {
//     return str.trim().split().length
// }
//
// console.log(countWords("Dear   Victoria, I love  to press   space button."))
// console.log(countWords("﻿Hello﻿World "))
// console.log(countWords(" Hello"))
// console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))
//
//
// const array= arr => arr.split(",").slice(1,-1).join(" ") || null
// console.log(array("1,2,3"))
//
// console.log(array('1'))


// const findSquares = num => {
//     let a = (num - 1) / 2
//     let b = a + 1
//     return `${b * b}-${a * a}`
// };
// console.log(findSquares(81))
// console.log(findSquares(5))
//
//
// const maxRedigit = num => {
//     if (num < 100 || num > 1000) {
//         return null
//     } else if (num > 999) {
//         return null
//     } else if (num > 99 && num < 1000) {
//         return +`${num}`
//             .split("")
//             .sort((a, b) => b - a)
//             .join("")
//     } else if (num === +`${num}`.split("").sort((a, b) => b - a).join("")) {
//         return num
//     }
//
// }
//
// console.log(maxRedigit(123))
// console.log(maxRedigit(321))
// console.log(maxRedigit(-123))
// console.log(maxRedigit(1000))
// console.log(maxRedigit(99))


// const maskify = cc => {
//     let length = cc.length
//     let array = cc.split("")
//     let visible = cc.slice(-4)
//     let newArray = []
//     if (length <= 4){
//         return cc
//     } else if (length > 4){
//         let index = length - 4
//         array.splice(index, 4)
//         array.forEach(n => {
//             newArray = [...newArray, "#"]
//             return newArray
//         })
//         return newArray.concat(visible).join("")
//     }
// }
// console.log(maskify("1876543q234567890"))
// console.log(maskify("1876543q234567890"))
// console.log(maskify("Nananananananananananananananana Batman!"))


// const maskify = cc => {
//     return `${cc.slice(0, -4).replace(/./g, '#')}${cc.slice(-4)}`
// }
//
// console.log(maskify("gyftsdxgfchvjbknjgfdrseS"))


// const DNAStrand = dna => {
//     return dna.replace(/"A"/g, "T")
// }
//
// console.log(DNAStrand("AATTGC"))

// function multiple(x) {
//     return x % 15 === 0 ? "BangBoom" : x % 3 === 0 ? "Bang" : x % 5 === 0 ? "Boom" : "Miss"
// }
//
// var splitInParts = function (s, partLength) {
//     let array = []
//     for (let i = 0; i < s.length; i += partLength) {
//         array.push(s.slice(i, i + partLength))
//     }
//     return array.join(" ")
// }
// console.log(splitInParts("HelloKata", 8))


// function vowelsAndConsonants(s) {
//
//     let vowels = 'aeiou';
//     let consonants = '';
//     for (let i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             console.log(s[i]);
//         } else {
//             consonants += s[i] + '\n';
//         }
//     }
//     console.log(consonants.trim());
// }

//
// function reverseString(s) {
//     let answer = Number(s.split("").reverse().join(""))
//     return answer
// }
//
// console.log(reverseString("4321"))


// const Calculator = {
//     average: function(n1, n2, n3) {
//         if (Calculator.average() === "number"){
//             return (n1 + n2 + n3 )/ Calculator.average.length
//         } else if ( !== "number"){
//             return NaN
//         }
//     }
// };
// console.log(Calculator.average(3,4,5))


// function arithmetic(a, b, operator) {
//     return operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : operator === "divide" ? a / b : 0
// }

// console.log(arithmetic(50, 6, "multiply"))


// const object = array => {
//     return array.reduce((acc, item) => {
//         if (acc[item] === undefined) {
//             return {...acc, [item]: 1}
//         }
//         return {...acc, [item]: acc[item] + 1}
//     }, {})
// }


// const object2 = array => {
//     return array.reduce((acc, item) => {
//         return {...acc, [item]: (acc[item] || 0) + 1}
//     }, {})
// }
// console.log(object2(["a", "b", "a"]))


// // let array = [22, 33, 44, 55]
// // let array2 = array
// // array2[2] = 200
// // console.log(array2)
// // console.log(array)


// let array = [22, 33, 44, 55]
// let array2 = [...array]
// array2[2] = 200
// console.log(array2)
// console.log(array)


// const user1 = {
//     name: "Misha",
//     age: 25
// }
// const user2 = user1
// user2.name = "Petya"
// console.log(user2)
// console.log(user1)


// const user1 = {
//     name: "Misha",
//     age: 25
// }
// const user2 = {...user1}
// user2.name = "Petya"
// console.log(user1)
// console.log(user2)


// for (let i = 1; i < 51; i++)
// console.log(i)


// let letters = []
// for (let i = 0; i < 10; i++) {
//     letters[i] = "X"
// }
//     console.log(letters)


// let numbers =  [5, 3, 1, 2, 7]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }


// let multiply =  [5, 2, 1, 2]
// let result = 1
// for (let i = 0; i < multiply.length; i++){
//     result *= multiply[i]
// }
// console.log(result)


// function addUsername(list) {
//     return list.map(item => {
//
//         return {...item, username: (item.firstName.toLowerCase() + item.lastName.toLowerCase()[0] + ((new Date).getFullYear() - item.age))}
//     })
// }
//
//
// console.log(addUsername([
//     {firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby'},
//     {firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure'}
// ]))


// function bump(x) {
//     return x.split("")
//         .filter(item => item === "n")
//         .length <= 15 ? "Woohoo!" : "Car Dead"
// }
//
// console.log(bump("n______nnn_______n_nn_"))
//
//
// const obj = {
//     "Bread": 50,
//     "Meat": 500,
//     "Tomato": 50,
//     "Water": 30,
//     "Pepper": 80,
//     "Cola": 100,
//     "Rice": 200
// }
//
//
// const sortObj = (obj) => {
//     return Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]))
// }
// console.log(sortObj(obj))
//
//
// function switcheroo(x) {
//     return x.split("").map(symb => {
//         return symb === "a" ? "b" : symb === "b" ? "a" : symb
//     }).join("")
// }
//
// console.log(switcheroo("abc"))
//
//
// function sum(digits) {
//     if (typeof digits !== "number" && typeof digits !== "string" && !digits) return ""
//     digits = String(digits)
//     const res = digits.split("").reduce((acc, item) => `${acc} + ${item}`)
//     const sum = digits.split("").reduce((acc, item) => +acc + +item, 0)
//     return `${res} = ${sum}`
//
// }
//
// console.log(sum("9776"))
//
//
// function getFirstPython(list) {
//     let result = list.find(item => item.language === "Python")
//     return result ? `${result.firstName}, ${result.country}` : "There will be no Python developers"
// }
//
// console.log(getFirstPython([
//     {firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript'},
//     {firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure'}
// ]))
//
//
//
// function findSenior(list) {
//     let result = list.map(item => item.age)
//     let maxAge =  Math.max(...result)
//     return list.filter(item => item.age === maxAge)
// }
//
// console.log(findSenior([
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//     { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]))
//
//
// function findUniq(arr) {
//     if (arr.length >= 3){
//         return arr.find(item => arr.indexOf(item) === arr.lastIndexOf(item))
//     }
// }
//
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
//
//
// function persistence(num) {
//     let counter = 0
//     while (num >= 10){
//         num = num.toString().split("").reduce((acc, item)=> acc * item, 1)
//         counter++
//     }
//     return counter
//
// }
//
// console.log(persistence(999))
// console.log(persistence(39))


// let capitals = function (word) {
//     return word.split("").reduce((acc, item, idx) => {
//         if (item.toUpperCase() === item) return [...acc, idx]
//         return acc
//     }, [])
// }
//
// console.log(capitals("CodEWaRs"))


let Capitals = function (word) {
    let arr = []
    for (let i = 0; i < word.length; i++){
        if (word[i] === word[i].toUpperCase()){
            arr = [...arr, i]
        }
    }
    return arr
}

console.log(Capitals("CodEWaRs"))


function howManydays(month){
  var days;
  switch (month){
    case 1:
      days=31
      break
    case 2:
      days=28
      break
    case 3:
      days=31
      break
    case 4:
      days=30
      break
    case 5:
      days=31
      break
    case 6:
      days=30
      break
    case 7:
      days=31
      break
    case 8:
      days=31
      break
    case 9:
      days=30
      break
    case 10:
      days=31
      break
    case 11:
      days=30
      break
    case 12:
      days=31
      break
  }
  return days;
}

function padIt(str,n){
  count=0
  while( count<n){
    count%2 ? str+="*": str= "*"+str
    count++
  }
  return str
}

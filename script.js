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
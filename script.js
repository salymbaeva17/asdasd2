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



function string2(str) {
    return str.split(" ")[1].toLowerCase()
}

console.log(string2("bonjorno AmIgOs"))
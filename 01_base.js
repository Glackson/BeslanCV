// // 1 Переменные
// // variable - переменная
// // cameCase
// // const age = 19
// const firstName = 'Beslan'

// const _ = 'private'
// const $ = 'some value'
// const withNum5 = '5'

// // 2 Мутирование
// // console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// // console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// // const lastName = prompt("Введите фамилию")// выводит окно для ввода
// // alert(firstName + ' ' + lastName) - выводит окно с текстом



// // 3 Операторы
// const currentYear = 2022
// const birthYear = 2003
// // const age = currentYear - birthYear
// const a = 5
// const b = 10
// let c = 32




//4 Типы даннных
// const isProgrammer = true
// const myName= 'Beslan'
// const age = 19
// console.log(typeof isProgrammer)
// console.log(typeof myName)
// console.log(typeof age)




// 5 Приоритет операторов
const fullAge = 19
const birthYear = 2003
const currentYear = 2022
const isFullAge= currentYear - birthYear >= fullAge




// 6 Условные операторы
const courseStatus = 'ready' // ready, fail, pending

if (courseStatus === 'ready'){
    console.log('Курс готов к прохождению')
} else if (courseStatus ==='pending') {
    console.log('Курс находится в процессе разработки')
} else{
    console.log('Курс не готов')
}

const isReady = true
// Тернарное выражение
isReady ? console.log('Все готово') : console.log('Не готово')
// if (isReady){
//     console.log('Все готово')
// }else{
//     console.log('Не готово')
// }
// const num1 = 42
// const num2 = '42'
// console.log(num1===num2)





// 7 Булевая логика




// 8 Функции

// function calculateAge(year){
//     return 2022 - year
// }

// // const myAge = calculateAge(2003)
// // console.log(calculateAge(1941))

// function logInfoAbout(name, year){
//     const age = calculateAge(year)

//     if (age>0 || age===0){
//         console.log('Имя: ' + name + ', возраст: ' + age)
//     } else{
//         console.log("Вообще-то это уже будущее!")
//     }

    
// }
// logInfoAbout('Беслан', 2022)



// 9 Массивы
// const cars = ['Форд','Мерседес','Бентли']
// const cars = new Array('Форд','Мерседес','Бентли')
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])

// cars[0] = 'БМВ'
// console.log(cars)







// 10  Циклы
const cars = ['Форд','Мерседес','Бентли']

// for(let i = 0; i < cars.length; i++){
//     const car = cars[i]
//     console.log(car)
// }

for(let car of cars){
    console.log(car)
}



// 11 Обьекты
const person = {
    firstName: 'Beslan',
    lastName: 'Adamokov',
    year: 2003,
    languages:['Ru', 'En', 'Kab'],
    hasWife: false,
    greet: function(){
        console.log('greet from person')
    }
}
console.log(person.firstName)
const key = 'languages'
console.log(person[key])
person.hasWife = true
console.log(person)





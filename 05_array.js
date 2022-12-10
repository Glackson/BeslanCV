// 1 Массивы
const cars = ['BMW', 'Ford', 'Mercedess','Bentley']
const fib = [1, 1, 2, 3, 5, 8, 13]
// const people = [
//     {Name: 'Vladilen', budget: 4200},
//     {Name: 'Elena', budget: 3500},
//     {Name: 'Victoria', budget: 2100}
// ]


// Function - 
function addItemToEnd(){

}

// Method
//cars.shift() - удаляет первый элемент из начала и возвращает его
//cars.pop()- аналогичен методу shift, но удаляет элемент с конца
// cars.push('Porsche') //добавляет в конец массива новый элемент 
// console.log(cars)
// cars.unshift('Bugatti') //добавляет в начало массива новый элемент
// const firstCar = cars.shift() // удаляет первый элемент массива
// const lastCar = cars.pop()// удаляет последний элемент массива.
// console.log(cars)


// reverse()// возвращает массив с конца

//const index = cars.indexOf('BMW') - возвращает индекс элемента
// const index = people.findIndex(function(person){
//     return person.budget === 2100
// }) //- является циклом, возвращает индекс первого элемента в массиве, который удовлетворяет требованиям
// const person = people.find(function(person){
//     return person.budget === 2100
// }) - выведет элемент напрямую, без индекса
// cars[index] = 'Volga'
// console.log(people[index])
// console.log(person)



// let fingPerson
// for(const person of people) {
//     console.log(person)
//     if (person.budget === 2100) {
//         fingPerson = person
//     }
// }


// const person = people.find(person => person.budget === 2100)
// console.log(person)



// console.log(cars.includes('BMW'))//проверяет наличие элемента



const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})// map принимает в себя функцию



const pow2 = fibo => fibo**2
// const sqrt = fibo => Math.sqrt(fibo)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filterNumbers = pow2Fib.filter(fibo => {
//     return fibo > 20 // метод фильтр фильрует по условию и возвоащает новый массив(поэтому его нужно обЬявить заранее)
// })

// console.log(pow2Fib)
// console.log(filterNumbers)


const people = [
    {Name: 'Vladilen', budget: 4200},
    {Name: 'Elena', budget: 3500},
    {Name: 'Victoria', budget: 2100}
]

const allBudget = people
    .filter(person => person.budget > 2500)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
    },0)//метод редьюс первым параметром принимает в себя некую функцию, а вторым параметром принимает некое начальное значание
console.log(allBudget)





console.log(upperCaseCars)
console.log(cars)





//Exercise 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
//.split() - делит строчку и возвращает нам массив
//.join() - соединяет каждый элемент массива, по умолчанию соединяет через запятую
// console.log(reverseText)





//Объекты
const person = {
    Name: 'Beslan',
    age: 19,
    isProgrammer: true,
    languages: ['ru', 'en', 'kbr'],
    'complex key': 'Complex Value',
    ['key_' +(1+3)]: 'Compudet key', //key4
    greet(){
        console.log('greet from person')
    },
    info(){
        // console.log('this: ',this)
        console.info('Информация про человека по имени: ', this.Name)
    }
}
// console.log(person.Name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person["complex key"])

// console.log(person)
// person.greet()
// person.age++
// person.languages.push('by')
// console.log(person)
// delete person['key_4']

// person['key_4'] = undefined
// console.log(person['key_4'])


// const Name = person.Name
// const age = person.age
// const languages = person.languages

// const {Name, age: personAge, languages} = person

// console.log(Name, personAge, languages)


// console.log(person)

// for ( let key in person){
//     if (person.hasOwnProperty(key)){
//         console.log('key: ', key)
//         console.log('value ', person[key])
//     }
// }

// const keys = Object.keys(person)//работает с ключами
// keys.forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// }) //тоже самое что и выше, но метод Объект не бежит по прототипу






//Context

// person.info()

const logger = {
    keys(){
        console.log('Object Keys: ', Object.keys(this))
    },

    keysAndValues(){
        Object.keys(this).forEach(key => {
           console.log(`"${key}": ${this[key]}`); 
        })
    }
}
// const bound = logger.keys.bind(person)// bind привязывает определенный контекст, который мы сами выберем, возвращает новую функцию
// bound()
// logger.keys.call(person)// тоже самое, что и байнд, только сразу вызыввает функцию
logger.keysAndValues.call(person)
// // // // //Event Loop

// // // const timeout = setTimeout(() => {
// // //     console.log('After timeout')
// // // }, 2500)//функция выводит сообщение через заданное вре мя
// // //  clearTimeout(timeout)
// // //  const interval = setInterval(() => {
// //     // console.log("After interval")
// // //  }, 10000);
// // //  clearInterval



// // // const delay = (callback, wait = 1000 ) => {
// // //     setTimeout(callback, wait)
// // // }
// // // delay( () => {
// // //     console.log('After timeout');
// // // }, 2000)


const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('Что-то пошло не так. Повторите попытку')
            resolve()
        }, wait)
    })
    return promise
} 


// // // delay(2500)
// // //     .then(() =>{
// // //         console.log('After 2 secodns');
// // //     })  
// // //     .catch(err => console.error(err))
// // //     .finally(() =>console.log('Finally') )



const getData = () => new Promise(resolve => resolve([
    1, 1 ,2, 3, 5, 8, 13
]))


// // getData().then(data => console.log(data))

async function asyncExample() {
    await delay(3000)
    const data = await getData()
    console.log('Data', data);
}
asyncExample()











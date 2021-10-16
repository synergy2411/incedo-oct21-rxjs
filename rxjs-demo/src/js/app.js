import {Observable, interval, take, timer, from, fromEvent, of } from 'rxjs';

console.clear()

// CREATIONAL OPERATORS
// Observable

// Producer code
// let obs$ = new Observable((observer)=>{
//     setTimeout(()=>{
//         observer.next("First Package")
//     }, 1000)
//     setTimeout(() => {
//         observer.next("Second Package")
//     }, 2000)
//     setTimeout(() => {
//         observer.next("Third Package")
//     }, 4000)
//     setTimeout(()=>{
//         observer.error(new Error('Something bad happened!'))
//     }, 4500)
//     setTimeout(()=>{
//         observer.complete();
//     }, 5000)
// })

// // Consumer Code
// console.log("Start")
// obs$.subscribe({
//     next : data => {console.log("next : ", data)},
//     error : (err) => {console.log("Error : ", err)},
//     complete : () =>{console.log("[COMPLETED]")}
// })
// console.log("End")


let observer = {
    next : (data) => console.log(data),
    error : err => console.log(err),
    complete : () => console.log("[COMPLETED]")
}


// interval - value till infinity

// const source$ =  interval(1000)

// source$.subscribe(
//     (data)=>{console.log(data)}
//     )

// const takeFive$ = source$.pipe(take(5))

// takeFive$.subscribe(observer)

// console.log("Start")
// timer(3000).subscribe(console.log)
// console.log("End")


















// from - create observables from Array, Promises, any iterable
// Array
// const numbers = [1,2,3,4,5]

// const numbers$ = from(numbers)

// numbers$.subscribe(console.log)

// Iterator
// function *display(){
//     yield "First"
//     yield "Second"
// }

// const iter = display();

// const iterator$  =  from(iter)

// iterator$.subscribe(console.log)

// Promise

// const promise$ = from(new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Third")
//     }, 3000)
//     setTimeout(()=>{
//         resolve("Fourth")
//     }, 5000)
// }))

// promise$.subscribe(console.log)

















// fromEvent

// const click$ = fromEvent(document, "click")
// const keyup$ = fromEvent(document, "keyup")

// // click$.subscribe(console.log)
// // keyup$.subscribe(console.log)

// const btnStart = document.getElementById("btnStart");

// const btnClick$ = fromEvent(btnStart, "click")
// btnClick$.subscribe(console.log)


// const inputMsg = document.getElementById("input-msg")
// const input$ = fromEvent(inputMsg, 'input')

// input$.subscribe(console.log)













// of

const user$ = of("john Doe",32, true)
const userOne$ = of(["john Doe",32, true])

user$.subscribe(console.log)
userOne$.subscribe(console.log)
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, from, fromEvent, interval, map, reduce, scan, take, takeUntil, takeWhile, tap } from "rxjs";
// FILTERING OPERATORS
// - take
const interval$ = interval(1000);
// const takeThree$ = interval$.pipe(
//     take(3)
// )
// takeThree$.subscribe(console.log)

// - takeWhile
    // const takeFiveWithUntil$ = interval$.pipe(
    //     takeWhile(val => val <= 5)
    // )
    // takeFiveWithUntil$.subscribe(console.log)

// - takeUntil
    // const click$ = fromEvent(document, "click")

    // const takeUntilClick$ = interval$.pipe(
    //     takeUntil(click$)
    // )

    // takeUntilClick$.subscribe(console.log)


// - filter
// const keyup$ = fromEvent(document, "keyup")

// const filteredKey$ = keyup$.pipe(
//     tap(event => console.log("[TAP]", event)),
//     map(event => { return event.code}),
//     tap(mapValue => console.log("[TAP AFTER MAP]", mapValue)),
//     filter(code => code === 'Enter')
// )

// let unsub = filteredKey$.subscribe(
//     () => {
//         const heading = document.getElementById("heading")
//         heading.innerHTML = "Enter Pressed Now"
//     }
// )

// setTimeout(() => {
//     unsub.unsubscribe();
// }, 4000)


// from(["apple", "banana", "orange"])
//     .pipe(filter(val => val === 'apple'))
//     .subscribe(console.log)


// - reduce

// let numbers = [1,2,3,4,5];
// const numbers$ = from(numbers);

// let numberWithReduce$ = numbers$.pipe(
//     reduce((acc, curr) => acc + curr, 0)
// )

// numberWithReduce$.subscribe(console.log)

// - distinct
// let numbers = [1,1,2,2,3,3,4,5,3,4];
// const numbers$ = from(numbers);
// const numbersWithDistinct$ = numbers$.pipe(
//     distinct()
// )

// numbersWithDistinct$.subscribe(console.log)

// const users = [
//     {name : "john", age : 32},
//     {name : "john", age : 32},
//     {name : "jenny", age : 34},
//     {name : "john", age : 32},
// ]

// const users$ = from(users)

// users$.pipe(
//     // distinct()
//     distinctUntilKeyChanged('age'),
//     distinctUntilKeyChanged('name'),
//     distinctUntilChanged((prev, curr) => prev.name === curr.name)
// ).subscribe(console.log)

// const usersWithDistinct$ = users$.pipe(
//     distinct()
// )

// usersWithDistinct$.subscribe(console.log)

// - scan

let numbers = [1,2,3,4,5];
const numbers$ = from(numbers);

let numberWithScan$ = numbers$.pipe(
    scan((acc, curr) => acc + curr, 0)
)

numberWithScan$.subscribe(console.log)














// let objOne = {}
// let objTwo ={}
// console.log(objOne === objTwo);     // ?
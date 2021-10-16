import { fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, debounceTime, throttleTime, 
    sampleTime, auditTime, mergeAll, mergeMap,
    take, switchAll, concatAll, exhaustAll, concatMap,
switchMap, exhaustMap } from 'rxjs/operators';

// console.log("Loaded")
console.clear();

// const inputSearch = document.getElementById("input-search");

// const input$ = fromEvent(inputSearch, "input")
    

// input$.pipe(
//     debounceTime(1000),
//     // throttleTime(4000),
//     // sampleTime(5000),
//     // auditTime(3000),
//     map(event => event.target.value),
//     mergeMap(value => {
//         return ajax.getJSON(`https://api.github.com/users/${value}/repos`)
//     }),
//     // mergeAll()   // - flattening operator 
//     // switchAll()
//     // concatAll()
// ).subscribe(console.log)

// .subscribe(obs$ => {
//     obs$.subscribe(response => {
//         console.log(response)
//     })
// })


// const click$ = fromEvent(document, "click")

// // click$.pipe(
// //     mergeAll()
// // ).subscribe(console.log)

// const interval$ = interval(1000).pipe(take(4))

// click$.pipe(
//     // interval$,
//     // mergeAll()
// ).subscribe(console.log)


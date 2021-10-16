import { Subject, BehaviorSubject, ReplaySubject,
    AsyncSubject, interval, take, of, throwError, empty, from } from "rxjs";



// Custom Operators
function customOp(val){
    return function(source$){
        // Add the Observable functionality here
        source$.subscribe(data => {
            if(data <= val){
                return of(data)
            }
        })
        return from([1,2,3,4,5])
    }
}

interval(1000)
    .pipe(
        customOp(5),
        take(4)
    ).subscribe(console.log)








// const sub = new AsyncSubject();

// sub.subscribe((data) => console.log("sub 1 : ", data));

// sub.next(102);

// sub.next(103);
// sub.next(104);

// sub.subscribe((data) => console.log("sub 2 : ", data));

// sub.complete()









// const sub = new ReplaySubject(2);

// sub.subscribe((data) => console.log("sub 1 : ", data));

// sub.next(102);

// sub.next(103);
// sub.next(104);

// sub.subscribe((data) => console.log("sub 2 : ", data));












// const sub = new BehaviorSubject(101);

// sub.subscribe((data) => console.log("sub 1 : ", data));

// sub.next(102);

// sub.subscribe((data) => console.log("sub 2 : ", data));






// const sub = new Subject();

// sub.subscribe((data) => console.log("sub 1 : ", data));

// sub.next("First Package");

// sub.subscribe((data) => console.log("sub 2 : ", data));

// sub.next("Second Package");
// sub.next("Third Package");



// - Observer - next, error , complete

// - Observable - pipe, subscribe

// - Subject = next, error, complete, pipe, subscribe

// Flattening Operators
// switchMap
// cancatMap
// mergeMap



const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
    startWith("About to Start"),
  exhaustMap((ev) => interval(1000).pipe(take(4))),
).subscribe(console.log);

// map + concatAll
// const firstOrder = higherOrder.pipe(mergeAll(2));
// firstOrder.subscribe(x => console.log(x));
// const firstOrder = higherOrder.pipe(switchAll(2));
// firstOrder.subscribe(x => console.log(x));
// const firstOrder = higherOrder.pipe(concatAll());
// firstOrder.subscribe(x => console.log(x));
// const firstOrder = higherOrder.pipe(exhaustAll());
// firstOrder.subscribe(x => console.log(x));
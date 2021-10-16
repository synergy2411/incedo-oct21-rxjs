import { interval, forkJoin,combineLatest } from 'rxjs'
import { startWith, take,endWith, 
    combineLatestWith } from 'rxjs/operators'

// interval(1000)
// .pipe(
//     startWith('About ot Start...'), 
//     take(3),
//     endWith("Mission Abort...")
//     )
// .subscribe(console.log)

const sourceOne$ = interval(1000).pipe(take(3))
const sourceTwo$ = interval(1000).pipe(take(4))

combineLatest([sourceOne$, sourceTwo$])
    .subscribe(console.log)

forkJoin({sourceOne$, sourceTwo$})
    .subscribe(console.log)
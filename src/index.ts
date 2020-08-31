import "./index.css";

import { fromEvent } from "rxjs";

import { pluck, timeInterval, map } from "rxjs/operators";



let clicks$ = fromEvent(document, "click");

clicks$.pipe(
    pluck('clientX'),
    timeInterval(),
    map(clickInfo => `${clickInfo.interval / 1000} seconds (${clickInfo.value})`)
)
.subscribe(
  (value: any) => console.log(value),
  (err: any) => console.log(`ERROR: ${err}`),
  () => console.log("All done.")
);

//let nums = [2, 4, 6, 9, 10];

//let numsObservable$ = from (nums);

// let evenNumbers$ = Observable.create((subscriber: { next: (arg0: number) => void; error: (arg0: string) => void; complete: () => void; }) => {

//     for (let currentNum of nums) {
//         if (currentNum % 2 === 0) {
//             subscriber.next(currentNum);
//         } else {
//             subscriber.error('Value is not even');

//         }
//     }

//     subscriber.complete();
// })

// evenNumbers$.subscribe(
//     (value: any) => console.log(value),
//     (err: any) => console.log(`ERROR: ${err}`),
//     () => console.log('All done.'),
// );

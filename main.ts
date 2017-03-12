import {Observable, Observer} from 'rxjs';

let numbers = [1, 5, 10];

// Promise | Array
let source = Observable.from(numbers);

source.subscribe(
  value => console.log(`value: ${value}`),
  e => console.log(`error: ${e}`),
  () => console.log('complete')
);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
var numbers = [1, 5, 10];
var source = Observable_1.Observable.create(function (observer) {
    var index = 0;
    var produceValue = function () {
        observer.next(numbers[index++]);
        if (index < numbers.length) {
            setTimeout(produceValue, 200);
        }
        else {
            observer.complete();
        }
    };
    produceValue();
}).map(function (n) { return n * 2; })
    .filter(function (n) { return n > 4; });
source.subscribe(function (value) { return console.log("value: " + value); }, function (e) { return console.log("error: " + e); }, function () { return console.log('complete'); });
//# sourceMappingURL=main.js.map
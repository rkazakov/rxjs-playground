"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var numbers = [1, 5, 10];
var source = rxjs_1.Observable.create(function (observer) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var n = numbers_1[_i];
        observer.next(n);
    }
    observer.complete();
});
source.subscribe(function (value) { return console.log("value: " + value); }, function (e) { return console.log("error: " + e); }, function () { return console.log('complete'); });
//# sourceMappingURL=04-observer-loop.js.map
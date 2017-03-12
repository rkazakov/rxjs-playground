"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var numbers = [1, 5, 10];
var source = rxjs_1.Observable.from(numbers);
var MyObserver = (function () {
    function MyObserver() {
    }
    MyObserver.prototype.next = function (value) {
        console.log("value: " + value);
    };
    MyObserver.prototype.error = function (e) {
        console.log("error: " + e);
    };
    MyObserver.prototype.complete = function () {
        console.log('complete');
    };
    return MyObserver;
}());
source.subscribe(new MyObserver());
//# sourceMappingURL=main.js.map
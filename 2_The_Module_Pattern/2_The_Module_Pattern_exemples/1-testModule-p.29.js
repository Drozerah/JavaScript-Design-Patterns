// 2-the-module-pattern-p.29.js

var testModule = (function(){

    var counter = 0;

    return {
        incrementCounter: function () {
            return ++counter
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    }

})();

// Usage:

// Increment ou counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: 1
testModule.resetCounter();
var testModule = (function() {

    var counter = 0;

    return {

        incrementCounter: function() {
            return counter++;
        },

        resetCounter: function() {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
            console.log("counter value after to reset: " + counter);
        }
    };

})();

// Usage:
//counter variable is actually fully shielded from our global scope so it acts just like a private variable would.
console.log(testModule.counter); //Counter will br printed as undefined because of the scope limitation or closure.
// Increment our counter
testModule.incrementCounter();
testModule.incrementCounter();
// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();
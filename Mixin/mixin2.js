var underScore = require('underscore');


var myMixins = {

    moveUp: function() {
        console.log("move up");
    },

    moveDown: function() {
        console.log("move down");
    },

    stop: function() {
        console.log("stop! in the name of love!");
    }

};


// A skeleton carAnimator constructor
function CarAnimator() {
    this.moveLeft = function() {
        console.log("move left");
    };
}

// A skeleton personAnimator constructor
function PersonAnimator() {
    this.moveRandomly = function() { /*..*/ };
}

// Extend both constructors with our Mixin
underScore.extend(CarAnimator.prototype, myMixins);
underScore.extend(PersonAnimator.prototype, myMixins);

// Create a new instance of carAnimator
var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

// Outputs:
// move left
// move down
// stop! in the name of love!
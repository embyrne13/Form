const util = require('util');
const assert = require('assert');
const mixOf = require('./index.js');


let squeaking = (superclass) => class extends superclass {
  squeak() {
    if (super.squeak) super.squeak();
    return 'Squeak!';
  }
};

let speaking = (superclass) => class extends superclass {
  speak() {
    if (super.speak) super.speak();
    return 'How does an individual influence the realm of the living?';
  }
};


class Soul {}

class Monstrosity extends mixOf(Soul).with(squeaking, speaking) {
  /*‿*/
}

let monstrosity = new Monstrosity();

assert.deepEqual( monstrosity.speak() , 'How does an individual influence the realm of the living?' );

# mixof
Tiny mixin system for modern JavaScript

```JavaScript


const mixOf = require('mixof');

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


```

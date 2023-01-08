
class Mixof {
  constructor(s) {
    this.s = s;
  }
  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.s);
  }
}

module.exports = s => new Mixof(s);

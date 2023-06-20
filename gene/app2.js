//============ Iterables via async generators =============

//===== As we already know, to make an object iterable, we should add Symbol.iterator to it. ====

let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    // a shorthand for [Symbol.iterator]: function*()
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};
for (let value of range) {
  alert(value); // 1, then 2, then 3, then 4, then 5
}

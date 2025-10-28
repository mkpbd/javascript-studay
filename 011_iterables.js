// Iterable objects are a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop.

// An object is iterable if it implements the Symbol.iterator method.
// This method should return an iterator – an object with the next() method that returns {done: Boolean, value: any} objects.

// Symbol.iterator is a well-known symbol that is used to define the default iterator for an object. Here’s how we can create a simple iterable object:
let iterableObject = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        let current = this.from;
        let last = this.to;
        return {
            next() {
                if (current <= last) {
                    return { done: false, value: current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};
for (let value of iterableObject) {
    console.log(value); // 1, 2, 3, 4, 5
}

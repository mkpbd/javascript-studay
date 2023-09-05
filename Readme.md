# Methods of primitives

A primitive

* Is a value of a primitive type.
* There are 7 primitive types: `string`, `number`, `bigint`, `boolean`, `symbol`, `null` and `undefined`.

An object

* Is capable of storing multiple values as properties.
* Can be created with `{}`, for instance: `{name: "John", age: 30}`. There are other kinds of objects in JavaScript: functions, for example, are objects.

```javascript
let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!
```

## [A primitive as an object](https://javascript.info/primitives-methods#a-primitive-as-an-object)

Here's the paradox faced by the creator of JavaScript:

* There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
* Primitives must be as fast and lightweight as possible.

The solution looks a little bit awkward, but here it is:

1. Primitives are still primitive. A single value, as desired.
2. The language allows access to methods and properties of strings, numbers, booleans and symbols.
3. In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

The “object wrappers” are different for each primitive type and are called: `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. Thus, they provide different sets of methods.  For instance, there exists a string method [str.toUpperCase()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) that returns a capitalized `str`.

```javascript
let str = "Hello";
alert( str.toUpperCase() ); // HELLO
```

 Constructors `String/Number/Boolean` are for internal use only

`new Number(1)` or `new Boolean(false)`.

```javascript
alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!
```

```javascript
let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}
```

**null/undefined have no methods**

The special primitives `null` and `undefined` are exceptions. They have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”.

An attempt to access a property of such value would give the error:

```javascript
alert(null.test); // error
```

# Numbers

In modern JavaScript, there are two types of numbers:

1. Regular numbers in JavaScript are stored in 64-bit format [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754), also known as “double precision floating point numbers”. These are numbers that we’re using most of the time, and we’ll talk about them in this chapter.
2. BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed `(2<sup>53</sup>-1)` or be less than `-(2<sup>53</sup>-1)`, as we mentioned earlier in the chapter [Data types](https://javascript.info/types). As bigints are used in few special areas, we devote them a special chapter [BigInt](https://javascript.info/bigint).

```javascript
let billion = 1000000000;
let billion = 1_000_000_000;
```

```javascript
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
```

### [Hex, binary and octal numbers](https://javascript.info/number#hex-binary-and-octal-numbers)

```javascript
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)
```

```javascript
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides
```

## [toString(base)](https://javascript.info/number#tostring-base)

The method `num.toString(base)` returns a string representation of `num` in the numeral system with the given `base`.

```javascript
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

# Strings

```javascript
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;
```

```javascript
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines
```

## [Special characters](https://javascript.info/string#special-characters)

```javascript
let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true
```

| Character              | Description                                                                                                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\n`                 | New line                                                                                                                                                                                                         |
| `\r`                 | In Windows text files a combination of two characters `\r\n` represents a new break, while on non-Windows OS it’s just `\n`. That’s for historical reasons, most Windows software also understands `\n`. |
| `\'`,`\"`,`\``     | Quotes                                                                                                                                                                                                           |
| `\\`                 | Backslash                                                                                                                                                                                                        |
| `\t`                 | Tab                                                                                                                                                                                                              |
| `\b`, `\f`, `\v` | Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).                                                                      |

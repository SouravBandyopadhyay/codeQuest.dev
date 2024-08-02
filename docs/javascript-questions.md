# JavaScript Questions

Here are the questions that are most likely to come up in your interview.

## Table of Contents
1. [What is undefined?](#what-is-undefined)

## What is undefined?

In JavaScript, `undefined` is a primitive data type that represents a value that is not assigned. When a variable is declared but not assigned a value, its value is `undefined`.

In addition to being the value of an uninitialized variable, `undefined` can also be returned by a function that does not explicitly return a value.

**Example:**

```javascript
var a // exist but no value is assigned to a
console.log(a) // undefined 
console.log(b) // referror: b is not defined bcz b do not exist
console.log(typeof (b))// undefined printed

function foo() {
  // This function does not return a value
}
console.log(foo()); // Output: undefined
```
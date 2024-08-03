# JavaScript Questions

Here are the questions that are most likely to come up in your interview.

## Table of Contents
1. [What is undefined?](#what-is-undefined)
2. [What is null?](#what-is-null)
3. [What is Hoisting?](#what-is-hoisting)
4. [What are Promises?](#what-are-Promises)
5. [What is a Temporal Dead Zone?](#what-is-a-Temporal-Dead-Zone)
6. [Data Types in JavaScript](#data-Types-in-JavaScript)


## What is undefined?

In JavaScript, `undefined` is a primitive data type that represents a value that is not assigned. When a variable is declared but not assigned a value, its value is `undefined`.

In addition to being the value of an uninitialized variable, `undefined` can also be returned by a function that does not explicitly return a value.

**Example:**

```javascript
var a; // Variable exists but no value is assigned
console.log(a); // Output: undefined

console.log(b); // ReferenceError: b is not defined because b does not exist
console.log(typeof b); // Output: undefined (typeof returns 'undefined' for undeclared variables)

function foo() {
  // This function does not return a value
}
console.log(foo()); // Output: undefined
```




## What is null?

`null` is a keyword in JavaScript that represents the intentional absence of any object value. It is one of JavaScript’s primitive values and is treated as `false` in Boolean operations. Essentially, `null` acts as a placeholder that signifies <strong>"NOTHING."</strong>

In simple terms, a value has been set to be empty.

### Type of null

The type of `null` is `object`:

```javascript
typeof null;          // "object" (not "null" for legacy reasons)
typeof undefined;     // "undefined"
```
::: tip Note

- Undefined means a variable has been declared but not assigned a value.
- Null means a variable has been explicitly assigned an empty value.
:::


## What is Hoisting?

Hoisting is a concept in JavaScript, not a feature. JavaScript hoisting refers to the process where the interpreter appears to move the declarations of functions, variables, or classes to the top of their scope, prior to the execution of code.


::: details Function Hoisting
```js
test(); 
// This will not fail due to hoisting, even though it appears before the function declaration

function test() {
    console.log("hello");
}
test(); // Output: hello 
```
:::



::: details Variable Hoisting
```js
function test2() {
    var y = 50;
    console.log("hello", x, y); // Output: hello undefined 50
    var x; // Variable x is hoisted and initialized as undefined
    var y = 10; // Variable y is re-declared and initialized with 10
    console.log("hello", x, y); // Output: hello undefined 10
}
test2();
```
:::

:::tip Things to Remember
- Function Declarations: Function declarations are hoisted completely.
- Variable Declarations: Variable declarations are hoisted, but their initializations are not.
- Arrow Functions: Arrow functions and function expressions are <strong>not hoisted</strong>.
- Class Declarations: Class declarations are hoisted but not initialized.
:::



## What are Promises?

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, using multiple callbacks to handle asynchronous code can lead to unmanageable code.

### Promise States

- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Meaning that the operation was completed successfully.
- **Rejected**: Meaning that the operation failed.
- **Settled**: Represents that the promise has been either rejected or fulfilled.

::: details Example
```javascript
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data has been received');
    }, 2000);
  });
}

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
  ```
:::


## What is a Temporal Dead Zone?

The Temporal Dead Zone (TDZ) is a behavior that occurs with variables declared using the `let` and `const` keywords. It refers to the period from the start of a block until the variable is declared and initialized. During this time, accessing the variable will result in a `ReferenceError`.

::: details Example of Temporal Dead Zone

```js
x = 23; // ReferenceError: Cannot access 'x' before initialization

let x;

function anotherRandomFunc() {
  message = "Hello"; // ReferenceError: Cannot access 'message' before initialization

  let message;
}
anotherRandomFunc();
```
:::
In the code above, attempting to access variables before they are declared results in a ReferenceError. This behavior, known as the Temporal Dead Zone, prevents variables from being accessed before their declaration and initialization within their scope.




## Data Types in JavaScript

JavaScript has two main categories of data types: **Primitive** and **Non-Primitive** (or **Reference**).

### Primitive Data Types

Primitive data types are immutable and are compared by their value.

| Data Type | Description | Example |
|-----------|-------------|---------|
| **Number** | Represents both integer and floating-point numbers. | `42`, `3.14` |
| **String** | Represents a sequence of characters. | `"Hello, World!"`, `'JavaScript'` |
| **Boolean** | Represents a logical value, either `true` or `false`. | `true`, `false` |
| **Undefined** | Represents a variable that has been declared but not yet assigned a value. | `let a; console.log(a); // undefined` |
| **Null** | Represents the intentional absence of any object value. | `let b = null; console.log(b); // null` |
| **Symbol** | Represents a unique and immutable value used primarily as object property keys. | `Symbol('description')` |
| **BigInt** | Represents whole numbers larger than `Number.MAX_SAFE_INTEGER`. | `1234567890123456789012345678901234567890n` |

### Non-Primitive (Reference) Data Types

Non-Primitive data types are mutable and are compared by reference.

| Data Type | Description | Example |
|-----------|-------------|---------|
| **Object** | Represents a collection of key-value pairs. Can include other data types as values. | `{ name: "John", age: 30 }` |
| **Array** | A special type of object used to store ordered collections of values. | `[1, 2, 3, 4, 5]` |
| **Function** | A block of code designed to perform a particular task, which can be assigned to variables and passed as arguments. | `function greet() { console.log("Hello!"); }` |
| **Date** | Represents date and time. | `new Date()` |

Each data type has its own characteristics and use cases, making JavaScript versatile and dynamic for various programming needs.

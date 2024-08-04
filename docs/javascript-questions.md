# JavaScript Questions

Here are some of the most common and high-impact questions you might encounter in your interviews. These are key questions that frequently start conversations and are favorites among interviewers. Prepare well, and you'll be ready to impress!

## Table of Contents

1. [What is undefined?](#what-is-undefined)
2. [What is null?](#what-is-null)
3. [What is Hoisting?](#what-is-hoisting)
4. [What are Promises?](#what-are-promises)
5. [What is a Temporal Dead Zone?](#what-is-a-temporal-dead-zone)
6. [Data Types in JavaScript](#data-types-in-javaScript)
7. [What is a Callback Function?](#what-is-a-callback-function)
8. [Explain passed by value and passed by reference.](#explain-passed-by-value-and-passed-by-reference)
9. [Explain Types of Coercion in javascript.](#explain-types-of-coercion-in-javascript.)
10. [What is callback hell?](#what-is-callback-hell)

## What is undefined?

In JavaScript, `undefined` is a primitive data type that represents a value that is not assigned. When a variable is declared but not assigned a value, its value is `undefined`.

In addition to being the value of an uninitialized variable, `undefined` can also be returned by a function that does not explicitly return a value.

::: details Example

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

:::

## What is null?

`null` is a keyword in JavaScript that represents the intentional absence of any object value. It is one of JavaScript’s primitive values and is treated as `false` in Boolean operations. Essentially, `null` acts as a placeholder that signifies <strong>"NOTHING."</strong>

In simple terms, a value has been set to be empty.

### Type of null

The type of `null` is `object`:

```javascript
typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
```

::: tip Note

- Undefined means a variable has been declared but not assigned a value.
- Null means a variable has been explicitly assigned an empty value.
  :::

## What is Hoisting?

Hoisting is a concept in JavaScript, not a feature. JavaScript hoisting refers to the process where the interpreter appears to move the declarations of functions, variables, or classes to the top of their scope, prior to the execution of code.

::: details Function Hoisting

```javascript
test();
// This will not fail due to hoisting, even though it appears before the function declaration

function test() {
  console.log("hello");
}
test(); // Output: hello
```

:::

::: details Variable Hoisting

```javascript
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
      resolve("Data has been received");
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

```javascript
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

| Data Type     | Description                                                                     | Example                                     |
| ------------- | ------------------------------------------------------------------------------- | ------------------------------------------- |
| **Number**    | Represents both integer and floating-point numbers.                             | `42`, `3.14`                                |
| **String**    | Represents a sequence of characters.                                            | `"Hello, World!"`, `'JavaScript'`           |
| **Boolean**   | Represents a logical value, either `true` or `false`.                           | `true`, `false`                             |
| **Undefined** | Represents a variable that has been declared but not yet assigned a value.      | `let a; console.log(a); // undefined`       |
| **Null**      | Represents the intentional absence of any object value.                         | `let b = null; console.log(b); // null`     |
| **Symbol**    | Represents a unique and immutable value used primarily as object property keys. | `Symbol('description')`                     |
| **BigInt**    | Represents whole numbers larger than `Number.MAX_SAFE_INTEGER`.                 | `1234567890123456789012345678901234567890n` |

### Non-Primitive (Reference) Data Types

Non-Primitive data types are mutable and are compared by reference.

| Data Type    | Description                                                                                                        | Example                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| **Object**   | Represents a collection of key-value pairs. Can include other data types as values.                                | `{ name: "John", age: 30 }`                   |
| **Array**    | A special type of object used to store ordered collections of values.                                              | `[1, 2, 3, 4, 5]`                             |
| **Function** | A block of code designed to perform a particular task, which can be assigned to variables and passed as arguments. | `function greet() { console.log("Hello!"); }` |
| **Date**     | Represents date and time.                                                                                          | `new Date()`                                  |

Each data type has its own characteristics and use cases, making JavaScript versatile and dynamic for various programming needs.

## What is a Callback Function?

A callback function is a function that is passed as an argument to another function and is executed after the first function has completed. Callback functions are essential for handling asynchronous operations, allowing you to perform long-running tasks without blocking the main execution thread.

::: details Example 1: Basic Callback

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye); // Output: Hello, John! Goodbye!
```

:::

## Explain passed by value and passed by reference

In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

### Passed by Value

When a value is passed by value, a copy of the actual value is passed to the function. Changes to the value inside the function do not affect the original value.

```javascript
function modifyValue(x) {
  x = 10;
}

let a = 5;
modifyValue(a);
console.log(a); // Output: 5

//Here, a is passed by value, so the function modifyValue does not alter the original value of a.
```

### Passed by Value

When a value is passed by reference, a reference to the original value is passed to the function. Changes to the value inside the function affect the original value.

```javascript
function modifyObject(obj) {
  obj.name = "John";
}

let person = { name: "Doe" };
modifyObject(person);
console.log(person.name); // Output: John

//In this case, person is passed by reference, so the function modifyObject alters the original object.
```

:::tip NOTE

- **Primitive types (e.g., numbers, strings, booleans):** Passed by value.
- **Non-primitive types (e.g., objects, arrays):** Passed by reference.
  :::

## Explain Types of Coercion in javascript.

Type coercion in JavaScript refers to the process of automatically or explicitly converting values from one data type to another.

- **Implicit Coercion**: JavaScript automatically converts a value from one type to another without explicit instructions.

```javascript
var string = "Hello";
var number = 42;
console.log(string + number); // Output: "Hello42" (number is coerced to a string)
```

- **Explicit Coercion**: The developer explicitly converts a value from one type to another using built-in functions.

```javascript
var string = "42";
var number = Number(string); // Explicitly convert string to number
console.log(typeof string); // Output: "string"
console.log(typeof number); // Output: "number"
```

## What are Closures in JavaScript?

Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
In JavaScript, closures are created every time a function is created, at function creation time.

### Key Characteristics of Closures

- **Function within a Function**: A closure is created when a function is defined inside another function.
- **Access to Outer Function’s Variables**: The inner function retains access to the variables of its outer function, even after the outer function has returned.
- **Encapsulation**: Closures allow for private variables and functions.

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const closureExample = outerFunction("Outside");
closureExample("Inside");

// Output:
// Outer Variable: Outside
// Inner Variable: Inside
```

## What is Callback Hell?

**Callback Hell** is a term used to describe the situation where multiple nested callbacks are used to handle asynchronous operations in JavaScript, leading to code that can be difficult to read, debug, and maintain.

To avoid callback hell, a few solutions have been developed, such as using Promises, async/await syntax, or functional programming concepts like map and reduce. These approaches allow developers to write asynchronous code in a more declarative and linear style, without the need for nested callbacks.

::: details Example

```javascript
getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getProducts(orders, (products) => {
      displayProducts(products);
    });
  });
});
```

:::

## What are Pure and Impure functions?

In JavaScript, functions can be categorized as pure or impure based on their behavior and the effect they have on their environment. Understanding the distinction between pure and impure functions is crucial for writing predictable and maintainable code.

### Pure Functions

A pure function is a function that:

- Given the same input, always returns the same output.
- Produces no side effects (i.e., it doesn't modify any external state or variables).

#### Benefits of Pure Functions

- **Predictable**: Easier to understand and test since their output is consistent for the same input.
- **Reusable**: Can be used in different contexts without worrying about side effects.
- **Optimizable**: Can be memoized to improve performance.

::: details Example of a Pure Function

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (same input, same output)
```

:::

### Impure Functions

An impure function is a function that:

- May return different outputs for the same input.
- Produces side effects (e.g., modifying a global variable, logging to the console, making HTTP requests).

#### Drawbacks of Impure Functions

- **Unpredictable**: Harder to test and debug due to varying outputs and side effects.
- **Less Reusable**: Can't be reliably reused in different contexts.
- **Harder to Optimize**: Can't be memoized easily due to changing outputs.

::: details Example of an Impure Function

```javascript
let counter = 0;

function incrementCounter() {
  counter += 1;
  return counter;
}

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2 (different output for the same call)
```

:::

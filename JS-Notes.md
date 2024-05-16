### 1. What is Hoisting?

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in your code.

- Functions and `var` are hoisted.
- `const` and `let` are not hoisted.

### 2. What is JSON?

JSON stands for JavaScript Object Notation. It is a lightweight data exchange format consisting of key-value pairs.

### 3. Scopes:

- Global Scope
- Functional Scope
- Block Scope/Scope

### 4. What are variables? What is the difference between `var`, `let`, and `const`?

Variables are used to store values.

- `var`: Creates a function-scoped variable.

  ```javascript
  function example() {
    var count = 10;
    console.log("Count", count);
  }
  console.log("Count", count); // Output: 10
  ```

- `let`: Creates a block-scoped variable.

  ```javascript
  function example() {
    let count = 10;
    console.log("Count", count);
  }
  console.log("Count", count); // Error
  ```

- `const`: Can only be assigned once, and its value cannot be changed.

### 5. What are the data types in JavaScript?

Data types determine the type of the variable.

- Primitive: Number, String, Boolean, undefined, null
- Non-Primitive: Object, Array, Function, Date, RegExp

### 6. Difference between primitive and non-primitive data types:

- Primitive: Stores single values.
- Non-Primitive: Stores multiple values.

### 7. ES6 Features:

#### 1. `let` and `const` Keywords:

`let` allows defining variables and `const` allows defining constants with block scope.

```javascript
let i = 10;
console.log(i); // Output: 10

const PI = 3.14;
console.log(PI); // Output: 3.14
```

#### 2. Arrow Functions:

Provides a more concise syntax for writing function expressions.

```javascript
let sumOfTwoNumbers = (a, b) => a + b;
console.log(sum(10, 20)); // Output: 30
```

#### 3. Multi-line Strings:

Create multi-line strings using back-ticks.

```javascript
let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`;
```

#### 4. Template Literals:

String templates with placeholders for variables.

```javascript
let name = `My name is ${firstName} ${lastName}`;
```

#### 5. Destructuring Assignment:

Extract values from arrays or properties from objects.

```javascript
// Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);

// Object Destructuring
let person = { name: "Peter", age: 28 };
let { name, age } = person;
console.log(name, age);
```

#### 6. Promises:

Used for asynchronous execution.

```javascript
var asyncCall = new Promise((resolve, reject) => {
  // do something
  resolve();
}).then(() => {
  console.log("Done!");
});
```

#### 7. Rest and Spread Operators:

Allow working with variable numbers of arguments and iterable objects more easily.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
```

#### 8. Classes:

Introduced a more familiar syntax for defining classes and working with object-oriented programming concepts.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area()); // Output: 50
```

###

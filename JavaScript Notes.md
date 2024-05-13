## ES6 features

ES6 (ECMAScript 2015) introduced several new features and enhancements to JavaScript, making the language more expressive, concise, and powerful. Here's an overview of some key ES6 features:

1. **Arrow Functions**: A more concise syntax for defining functions, especially useful for inline and callback functions. Arrow functions have a shorter syntax compared to traditional function expressions and lexically bind the `this` value.

   ```javascript
   // Traditional function expression
   function add(a, b) {
     return a + b;
   }

   // Arrow function
   const add = (a, b) => a + b;
   ```

2. **let and const**: `let` and `const` are block-scoped variables introduced in ES6. `let` allows variable reassignment, while `const` declares constants, whose values cannot be re-assigned.

   ```javascript
   let x = 10;
   x = 20; // Valid
   const y = 5;
   y = 8; // Error: Assignment to constant variable
   ```

3. **Template Literals**: A convenient way to concatenate strings and variables, using backticks (`) to enclose the string and placeholders `${}` for variable interpolation.

   ```javascript
   const name = "Alice";
   const greeting = `Hello, ${name}!`;
   ```

4. **Destructuring Assignment**: An elegant way to extract values from arrays or objects into distinct variables using syntax that mirrors the structure of the array or object.

   ```javascript
   // Array destructuring
   const [a, b] = [1, 2];

   // Object destructuring
   const { x, y } = { x: 1, y: 2 };
   ```

5. **Default Parameters**: Ability to specify default values for function parameters, which are used when the corresponding argument is not provided or is `undefined`.

   ```javascript
   function greet(name = "World") {
     console.log(`Hello, ${name}!`);
   }

   greet(); // Hello, World!
   ```

6. **Rest Parameters and Spread Syntax**: Rest parameters allow a function to accept an indefinite number of arguments as an array, while the spread syntax allows an array or iterable to be expanded into individual elements.

   ```javascript
   function sum(...numbers) {
     return numbers.reduce((acc, val) => acc + val, 0);
   }

   const arr = [1, 2, 3];
   const newArr = [...arr, 4, 5];
   ```

7. **Classes**: Introduced a more concise syntax for defining constructor functions and creating objects with prototype-based inheritance.

   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }
     greet() {
       console.log(`Hello, my name is ${this.name}`);
     }
   }

   const person = new Person("Alice");
   ```

8. **Promises**: A built-in mechanism for handling asynchronous operations in JavaScript, providing a more structured way to deal with asynchronous code compared to callbacks.

   ```javascript
   function fetchData() {
       return new Promise((resolve, reject) => {
           // Asynchronous operation
           if (/* operation succeeds */) {
               resolve(data);
           } else {
               reject(error);
           }
       });
   }

   fetchData()
       .then(data => console.log(data))
       .catch(error => console.error(error));
   ```

These are just some of the key features introduced in ES6. There are more enhancements in subsequent ECMAScript versions (ES7, ES8, etc.), but ES6 features form the foundation of modern JavaScript development.

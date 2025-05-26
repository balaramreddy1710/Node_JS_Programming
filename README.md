## Node.js Programming

This section includes both core Node.js concepts and important JavaScript features used in backend development.

### Topics Covered

- **NodeJS**  
  A runtime environment that allows JavaScript to run outside the browser, commonly used for server-side development.

- **NPM (Node Package Manager)**  
  Tool to manage project dependencies, run scripts, and install external libraries.

- **OOP (Object-Oriented Programming)**  
  JavaScript's class-based syntax for modeling real-world data using objects, classes, inheritance, encapsulation, and polymorphism.

- **Event Loop**  
  The core mechanism that allows JavaScript to perform non-blocking asynchronous operations by handling the call stack and task queues.

- **Event Handlers**  
  Functions that respond to events like user interactions, timers, or stream events (`on('data')`, `addEventListener()`).

- **Type Conversions**  
  Implicit and explicit type coercion between strings, numbers, booleans, etc.

- **"use strict" Directive**  
  Enables strict mode to catch common coding mistakes and unsafe actions.

- **Comparisons**  
  Understanding `==` vs `===`, and how coercion affects logical comparison.

- **Conditional Branching**  
  `if`, `else`, `else if`, `switch` — core constructs to make decisions in code.

- **Interaction (Browser APIs)**  
  `alert()`, `prompt()`, and `confirm()` functions for simple user input/output in browsers.

- **Logical & Nullish Coalescing Operators**  
  - `||` (OR): returns first truthy value  
  - `&&` (AND): returns first falsy value  
  - `??` (Nullish Coalescing): returns first defined (non-null/undefined) value

- **Polyfills and Transpilers**  
  - **Polyfill**: Code that adds missing functionality to older environments.  
  - **Transpiler**: Tool like Babel that converts modern JS into backward-compatible versions.

- **Recursion and Stack**  
  Function calling itself, using the call stack for complex or nested computations.

- **Rest Parameters and Spread Syntax**  
  - Rest: `function sum(...args)` collects arguments into an array  
  - Spread: `[...arr1, ...arr2]` merges arrays or clones objects

- **Variable Scope**  
  Scope defines the visibility of variables (`var`, `let`, `const`) — global, function, and block scopes.

- **Closure**  
  A function that "remembers" variables from its lexical scope even after the outer function has finished.

- **IIFE (Immediately Invoked Function Expression)**  
  Self-executing function:  
  `(function() { console.log("Run immediately"); })();`

- **NFE (Named Function Expression)**  
  Function expressions with internal names for recursion or debugging.

- **The "new Function" Syntax**  
  Dynamically creates functions from strings — generally discouraged due to performance and security concerns.

- **Scheduling**  
  - `setTimeout(fn, delay)`  
  - `setInterval(fn, interval)`  

- **Decorators and Forwarding (Advanced)**  
  Functions that wrap others to extend or modify behavior (common in frameworks and metaprogramming).

- **call(), apply(), bind()**  
  - `call(thisArg, ...args)` — call with custom `this`  
  - `apply(thisArg, [args])` — same but with array  
  - `bind(thisArg)` — returns new function with bound `this`


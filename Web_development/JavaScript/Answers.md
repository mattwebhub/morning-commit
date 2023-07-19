#### 1. JavaScript's Closure in Asynchronous Programming:

Closure in JavaScript is when an inner function has access to its own scope, the outer function's variables, and the global variables even after the outer function has finished execution. Closure can store states for asynchronous callbacks.

#### 2. Event Loop in JavaScript:

The event loop is a component that checks the call stack and the task queue. If the call stack is empty, the event loop will push the first task from the queue to the call stack, which then starts executing. JavaScript timers and event execution orders are examples to understand importance of the event loop.

#### 3. Hoisting in JavaScript:

Hoisting is a mechanism in JavaScript that moves variables and function declarations to the top of their containing scope during the compile phase. Hoisting can cause unpredictable behavior if misunderstood, as you may try to use a variable before it’s declared.

#### 4. Null in JavaScript:

Although null is considered a primitive type in JavaScript, the `typeof` operator returns "object". This is due to a bug which was never corrected for backward compatibility. It is usually handled by also checking the value, like using the triple equals (===) for comparisons.

#### 5. 'The 'this' Keyword in JavaScript:

The 'this' keyword in JavaScript refers to the object it belongs to: in the global context, 'this' is the global object; or in an object method, 'this' refers to the object; in a function call 'this' is undefined (`strict mode`); for event handlers, 'this' refers to the HTML element receiving the event.

#### 6. Prototypal Inheritance in JavaScript:

JavaScript uses prototypal inheritance, meaning objects inherit directly from other objects. This is more flexible than classical inheritance. Use Object.create() method to effectively use prototypal inheritance, which creates new objects with their prototype set to a certain object.

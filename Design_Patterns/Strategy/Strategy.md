# Strategy Pattern

Strategy pattern is a behavioral design pattern that lets your program choose the algorithm to execute at runtime.

## When to Use

- Use the Strategy pattern when you need to switch between different variants of the same algorithm directly in your code.

- Use the pattern when you have a lot of similar classes that only differ in the way they execute some behavior.


## Advantages

- Potentially large reduction in the number of subclasses.
- Strategies can be chosen at run-time, allowing behavior to change dynamically.
- Different strategies can be easily swapped out if requirements change.

## Disadvantages

- Adding new strategies requires modifying the context.
- Context and the strategy interface should stay compatible.
- Increased overall code complexity due to the need to introduce multiple additional classes.

## Conclusion

Strategy pattern allows the algorithm to be selected at runtime. It separates behavior from super and subclasses. It's a means to define a family of algorithms, encapsulate each as an object, and make them interchangeable.

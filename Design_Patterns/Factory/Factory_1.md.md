# Factory Pattern

The Factory pattern is a creational design pattern which provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

## When to Use

- Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.

- Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.

## Advantages

- Avoid tight coupling between the creator and the concrete products.

- Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.

- Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

## Disadvantages

- The code may become more complicated since you need to introduce a lot of new subclasses which implement the factory method.

## Conclusion

The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. Objects returned by a factory method are often referred to as products.
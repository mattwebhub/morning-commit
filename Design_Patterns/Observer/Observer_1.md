
# Observer Pattern

The Observer pattern is a design pattern in which an object maintains a list of its dependents, called observers, and notifies them automatically of any state changes.

## When to Use 

- You need to implement a subscription model where subscribers should be notified about changes in the publishing entities.

- You have components of a system that need to communicate with each other, but you want to avoid tight coupling.

Observer pattern allows objects to notify other objects when their state changes. It's a behavioral design pattern that's primarily used to implement distributed event handling systems. **Why would you use it?** The key advantages to using the Observer pattern include: 1. **Decoupling of senders and receivers**: Senders (or "subjects") don't need to know anything about the receivers (or "observers"). This decoupling allows you to change the observers independently of the sender. 2. **Dynamic relationships**: The relationship between observers and subjects isn't statically defined. You can add and remove observers while your app is running. 3. **Broadcast communication**: When a subject changes, all its observers get notified. This is a kind of one-to-many dependency that's hard to set up with other means. **How to use it?** Here's how to use it in JavaScript using function style as plain JavaScript objects, known as "object literals".


## Advantages

- Defines a one-to-many dependency between objects so that any change to one object will automatically notify the other objects.

- Encourages a well-defined, loosely coupled communication protocol.

## Disadvantages

- Can lead to unnecessary complexity and unintended side effects that are difficult to troubleshoot.

- Observers are unaware of each other and can complicate the update process.

## Conclusion

The Observer pattern provides a loosely coupled design between objects that interact. This gives the system more flexibility, because it's easier to add, remove, or modify subjects and observers independently.
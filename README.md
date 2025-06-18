# SOLID principles
Principles of scalable and extendable OOP code

## Docs:
[SOLID Article](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#dependency-inversion-principle)

## S - Single-responsibility Principle
- A class should have a single responsibility.
- A class should have methods that work with its own internal variables. 
- If you find yourself implementing complex logic based on different instances, stop, and think of implementing this logic inside the respective classes, wrapping the logic inside a public method which then the other class calls.

## O - Open-Closed Principle
- Objects or entities should be open for extension but closed for modification
- You are allowed to add new methods / variables, but shouldn't have to modify already existing methods just because you add a new dependency.
- You should only change the already existing methods in two cases 
    - You are rewriting the already implemented logic and the class is impacted by the changes
    - You are refactoring someone elses code which validates the principle and are specifically tasked to do it

## L - Liskov Substitution Principle
- Every subclass or derived class should be substitutable for their base or parent class.
- In other words, the return types of the same methods on the subclasses and parents classes should be consistent! If parent class method produced a string, the same subclass method should again produce a string (not an array or anything else)

## I - Interface Segregation Principle
- A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use
- In simple terms, break down general purpose interfaces into smaller ones so classes only implement those which make sense for them. They can implement multiple of them at ones.

## D - Dependency Inversion Principle
- Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.
- High level classes should use broader types in the constructor (typically abstract classes, interfaces or base classes) in the contructor instead of using multiple types that are allowed (ClassA | ClassB). It doesn't really matter which class it is as long as the interface you expect is defined and implemented. General is better than concrete (because it is more flexible). Also forces you to use inheritence / extensions properly in the classes which are being injected.

# Singleton

The Singleton design pattern restricts the instantiation of a class to a singular instance, ensuring that only one object of that class can exist within the system while providing easy access to that instance.

## References

https://refactoring.guru/design-patterns/singleton

## Usage Examples

### Cache Manager

A cache manager is responsible for managing the caching of data in a system. Using the Singleton pattern ensures that there is only one instance of the cache manager, providing a single point of control for all caching operations.

A Singleton cache manager allows multiple parts of the system to share the same cache, promoting efficient use of resources and avoiding redundancy in caching logic.

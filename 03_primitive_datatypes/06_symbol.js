// Unique Identifiers: Symbols are unique and immutable primitive values, introduced in ES6.
// Guaranteed Uniqueness: Each Symbol is distinct, even if created with the same description.
// Not Strings or Numbers: They are not interchangeable with strings or numbers, despite being created with the Symbol() function.
// Key Characteristics:

// Creation: Use Symbol() to create a Symbol:

const mySymbol = Symbol("myDescription"); // Optional description
// Use code with caution. Learn more
// Uniqueness: Each Symbol is guaranteed to be unique across your entire codebase.
// Immutability: Symbols cannot be changed after creation.
// Not Enumerable: Symbols used as object property keys won't show up in for...in loops or Object.keys().
// Common Uses:

// Creating Unique Property Keys:

const myObject = {};
const myKey = Symbol("myUniqueKey");
myObject[myKey] = "secret value";
// Use code with caution. Learn more
// Preventing Property Name Conflicts:

const library1 = {};
const library2 = {};

// Using Symbols avoids conflicts:
library1[Symbol("version")] = 1.0;
library2[Symbol("version")] = 2.0;

// Use code with caution. Learn more
// Creating Namespaces:

const myNamespace = {};
myNamespace.myProperty = Symbol("myProperty");
// Use code with caution. Learn more
// Metaprogramming: Used for internal object properties and methods in frameworks and libraries.
// WeakMaps and WeakSets: Used as keys in these data structures to prevent memory leaks.
// Additional Points:

// Symbol.for(): Creates a global Symbol registry for shared Symbols:

const sharedSymbol = Symbol.for("sharedKey");
// Use code with caution.
// Symbol.keyFor(): Retrieves the key for a Symbol from the registry.
// When to Use Symbols:

// When you need absolute certainty of unique property keys.
// To avoid naming collisions in complex object structures.
// To create private or hidden properties within objects.
// For advanced metaprogramming techniques.
// By understanding Symbols, you can leverage their unique properties to write more organized, conflict-free, and secure JavaScript code.
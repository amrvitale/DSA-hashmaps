/* Hashmaps are unordered associations between keys and values - similar to JS objects.
Objects are just hash maps, with some additional prototype cleverness.

Hashing = process of mapping a key to its location.

Hash table = stoarge that holds the records (the key and any value assocaited with key.) Hashmaps require
a hash table

Hash Function = function that maps keys to positions in hash table

With hashmaps, if we store the element (that we are looking for)
as a key in the hashmap, the number of comparisons that we would need to do to find
the key would be constant time O(1)
It would not depend on the number of elements

Examples of hashmaps:
- compilers use hashmaps for their symbol table, which associates identifiers (i.e. variables) 
with info about them

- dictionary app - word that you are looking up is the key, definition is the value
*/